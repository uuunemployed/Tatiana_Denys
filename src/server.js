import express from "express";
import crypto from "crypto";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());

const MERCHANT_ACCOUNT = process.env.WFP_ACCOUNT;
const MERCHANT_DOMAIN = process.env.WFP_DOMAIN;
const SECRET_KEY = process.env.WFP_SECRET;
const API = process.env.WFP_API_URL;

app.get("/", (req, res) => {
  res.send("Сервер працює! API для WayForPay налаштовано.");
});

app.post("/create-payment", (req, res) => {
  try {
    // 1. Отримуємо дані від клієнта (фронтенд)
    const { products, client } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).send("Кошик порожній");
    }

    // 2. Генеруємо службові дані
    const orderReference = "ORD_" + Date.now(); // Унікальний номер
    const orderDate = Math.floor(Date.now() / 1000); // Час

    // 3. Підготовка масивів для WayForPay
    // Нам потрібно розкласти об'єкти продуктів на окремі списки
    const productNames = [];
    const productCounts = [];
    const productPrices = [];
    let calculatedAmount = 0;

    products.forEach((p) => {
      productNames.push(p.name);
      productCounts.push(p.count);
      productPrices.push(p.price);

      // Рахуємо загальну суму (ціна * кількість)
      calculatedAmount += parseFloat(p.price) * parseInt(p.count);
    });

    // Форматуємо суму до 2 знаків після коми (рядок)
    const amountStr = calculatedAmount.toFixed(2);
    const currency = "UAH";

    // 4. ФОРМУВАННЯ ПІДПИСУ (Strict Order!)
    // Порядок: Account;Domain;Ref;Date;Amount;Currency;...Names;...Counts;...Prices
    const dataToSign = [
      MERCHANT_ACCOUNT,
      MERCHANT_DOMAIN,
      orderReference,
      orderDate,
      amountStr,
      currency,
      ...productNames, // Всі назви підряд
      ...productCounts, // Всі кількості підряд
      ...productPrices, // Всі ціни підряд
    ];

    const stringToSign = dataToSign.join(";");

    console.log("Підписуємо рядок:", stringToSign);

    const signature = crypto
      .createHmac("md5", SECRET_KEY)
      .update(stringToSign, "utf8")
      .digest("hex");

    // 5. ГЕНЕРАЦІЯ HTML ВІДПОВІДІ
    // Створюємо приховані інпути для кожного товару
    const productInputs = products
      .map(
        (p) => `
        <input type="hidden" name="productName[]" value="${p.name}">
        <input type="hidden" name="productPrice[]" value="${p.price}">
        <input type="hidden" name="productCount[]" value="${p.count}">
      `,
      )
      .join("");

    // Клієнтські дані (якщо прийшли, або дефолтні)
    const clientEmail = client?.email || "";
    const clientFirstName = client?.firstName || "";

    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="ua">
      <head>
          <meta charset="UTF-8">
          <title>Оплата замовлення</title>
      </head>
      <body>
          <h3>Переходимо до оплати...</h3>
          <form id="paymentForm" method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
              <input type="hidden" name="merchantAccount" value="${MERCHANT_ACCOUNT}">
              <input type="hidden" name="merchantAuthType" value="SimpleSignature">
              <input type="hidden" name="merchantDomainName" value="${MERCHANT_DOMAIN}">
              <input type="hidden" name="merchantSignature" value="${signature}">
              
              <input type="hidden" name="orderReference" value="${orderReference}">
              <input type="hidden" name="orderDate" value="${orderDate}">
              <input type="hidden" name="amount" value="${amountStr}">
              <input type="hidden" name="currency" value="${currency}">
              <input type="hidden" name="orderTimeout" value="49000">
              
              ${productInputs}

              <input type="hidden" name="clientEmail" value="${clientEmail}">
              <input type="hidden" name="clientFirstName" value="${clientFirstName}">
              <input type="hidden" name="defaultPaymentSystem" value="card">
          </form>
          <script>
              document.getElementById('paymentForm').submit();
          </script>
      </body>
      </html>
    `;

    // Відправляємо HTML клієнту
    res.send(htmlResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send("Помилка генерації оплати");
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
