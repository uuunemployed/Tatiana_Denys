import { useState } from "react"; // 1. Імпортуємо useState
import { Sectionheader } from "../../../../components/SectionHeader";
import ArrowIcon from "../../../../shared/icons/iron.svg?react";
import styles from "./MakeupPricing.module.scss";

export function MakeupPricing() {
  const [isLoading, setIsLoading] = useState(false); // Стан завантаження

  const pricingData = {
    planName: "ОДИН ТАРИФ — 10 уроків",
    description:
      "10 практичних уроків «з нуля» до впевненого щоденного макіяжу.",
    details: [
      { label: "ТРИВАЛІСТЬ", value: "10 днів — 10 практичних уроків" },
      { label: "ДОСТУП ДО УРОКІВ", value: "Одразу після оплати і назавжди" },
    ],
    bonuses: [
      "Чек-лист по пензликах",
      "Чек-лист по доглядових засобах",
      "Чек-лист бюджетної косметики",
      "Чек-лист люксової косметики",
      "Довідник косметики на різний бюджет",
    ],
    currentPrice: "799 грн",
    oldPrice: "1599 грн",
    badge: "✓ Доступ відразу після оплати • Безпечна оплата",
  };

  // 2. Функція обробки покупки
  const handleBuy = async () => {
    setIsLoading(true);

    try {
      // Очищаємо ціну від " грн" та пробілів, щоб отримати чисте число/рядок "799"
      const cleanPrice = pricingData.currentPrice.replace(/\D/g, "");

      const requestBody = {
        products: [
          {
            name: pricingData.planName, // Назва товару
            price: cleanPrice, // Ціна (без валюти)
            count: 1, // Кількість
          },
        ],
        // Можна додати дані клієнта, якщо вони є (наприклад, з форми вище)
        client: {
          firstName: "Guest",
          email: "",
        },
      };

      // Робимо запит на твій Node.js сервер
      const response = await fetch("http://localhost:3000/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Помилка сервера");
      }

      // Отримуємо HTML-форму від бекенду
      const htmlForm = await response.text();

      // 3. Створюємо невидимий контейнер, вставляємо туди форму і сабмітимо її
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = htmlForm;
      tempContainer.style.display = "none";
      document.body.appendChild(tempContainer);

      const form = tempContainer.querySelector("form");
      if (form) {
        form.submit(); 
      } else {
        console.error("Форму оплати не знайдено у відповіді");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Виникла помилка при переході до оплати. Спробуйте пізніше.");
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__header}>
        <Sectionheader title="Варіанти" titleSub="участі" />
      </div>

      <div className={styles.pricing__card}>
        <div className={styles.pricing__cardInner}>
          <div className={styles.pricing__planInfo}>
            <h3 className={styles.pricing__planTitle}>
              {pricingData.planName}
            </h3>
            <p className={styles.pricing__planDesc}>
              {pricingData.description}
            </p>
          </div>

          <div className={styles.pricing__details}>
            {pricingData.details.map((detail, idx) => (
              <div key={idx} className={styles.pricing__detailItem}>
                <div className={styles.pricing__detailLabel}>
                  {detail.label}
                </div>
                <div className={styles.pricing__detailValue}>
                  {detail.value}
                </div>
              </div>
            ))}

            <div className={styles.pricing__detailItem}>
              <div className={styles.pricing__detailLabel}>БОНУСИ</div>
              <ul className={styles.pricing__bonusList}>
                {pricingData.bonuses.map((bonus, idx) => (
                  <li key={idx} className={styles.pricing__bonusItem}>
                    <span>•</span>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.pricing__divider} />

          <div className={styles.pricing__priceRow}>
            <div className={styles.pricing__priceCurrent}>
              {pricingData.currentPrice}
            </div>
            <div className={styles.pricing__priceOld}>
              {pricingData.oldPrice}
            </div>
          </div>

          {/* 4. Оновлена кнопка */}
          <button
            className={styles.pricing__cta}
            onClick={handleBuy}
            disabled={isLoading} // Блокуємо кнопку під час завантаження
            style={{
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? "wait" : "pointer",
            }}
          >
            <p>{isLoading ? "Обробка..." : "Почати навчання"}</p>
            {!isLoading && <ArrowIcon />}
          </button>
        </div>
      </div>

      <div className={styles.pricing__trustBadge}>{pricingData.badge}</div>
    </section>
  );
}
