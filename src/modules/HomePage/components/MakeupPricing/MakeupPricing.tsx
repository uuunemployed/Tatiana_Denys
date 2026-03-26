import { useRef } from "react";
// import { useState } from "react";
import ClockIcon from "../../../../shared/icons/clock.svg?react";
import InfinityIcon from "../../../../shared/icons/infinity.svg?react";
import GiftIcon from "../../../../shared/icons/gift.svg?react";
import CheckIcon from "../../../../shared/icons/check.svg?react"; 

import { Sectionheader } from "../../../../components/SectionHeader";
import { Button } from "../../../../components/MakeupButton/MakeupButton";
import styles from "./MakeupPricing.module.scss";
import { useReveal } from "../../../../shared/hooks/useScrollRaveal"; // Імпорт хука

export function MakeupPricing() {
  // const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLElement>(null!);
  useReveal(containerRef);

  const pricingData = {
    planName: "ОДИН ТАРИФ",
    lessonCount: "10 УРОКІВ",
    description: "10 практичних уроків «з нуля» до впевненого щоденного макіяжу.",
    details: [
      { 
        label: "ТРИВАЛІСТЬ", 
        value: "10 днів — 10 практичних уроків",
        icon: <ClockIcon />,
      },
      { 
        label: "ДОСТУП ДО УРОКІВ", 
        value: "Одразу після оплати і назавжди",
        icon: <InfinityIcon />,
      },
    ],
    bonuses: [
      "Чек-лист по пензликах",
      "Чек-лист по доглядових засобах",
      "Чек-лист бюджетної косметики",
      "Чек-лист люксової косметики",
      "Довідник косметики на різний бюджет",
    ],
    currentPrice: "699 грн",
    oldPrice: "1599 грн",
    badge: "✓ Доступ відразу після оплати • Безпечна оплата",
  };

  // const handleBuy = async () => {
  //   // setIsLoading(true);
  //   // try {
  //   //   const cleanPrice = pricingData.currentPrice.replace(/\D/g, "");
  //   //   const requestBody = {
  //   //     products: [{ name: `${pricingData.planName} — ${pricingData.lessonCount}`, price: cleanPrice, count: 1 }],
  //   //     client: { firstName: "Guest", email: "" },
  //   //   };

  //   //   const response = await fetch("https://tatiana-denys.onrender.com/create-payment", {
  //   //     method: "POST",
  //   //     headers: { "Content-Type": "application/json" },
  //   //     body: JSON.stringify(requestBody),
  //   //   });

  //   //   if (!response.ok) throw new Error("Помилка сервера");
  //   //   const htmlForm = await response.text();
  //   //   const tempContainer = document.createElement("div");
  //   //   tempContainer.innerHTML = htmlForm;
  //   //   tempContainer.style.display = "none";
  //   //   document.body.appendChild(tempContainer);
  //   //   tempContainer.querySelector("form")?.submit();
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   alert("Виникла помилка при переході до оплати. Спробуйте пізніше.");
  //   //   setIsLoading(false);
  //   // }
  // };

  const handleBuy = () => {
    window.location.href = "https://secure.wayforpay.com/button/b7c5a280ff8cf";
  }

  return (
    <section ref={containerRef} className={styles.pricing} id="pricing">
      <div className={`${styles.pricing__header} reveal-item`}>
        <Sectionheader title="Варіант" titleSub="участі" />
      </div>

      <div className={styles.pricing__content}>
        <div className={`${styles.pricing__card} reveal-item`}>
          <div className={styles.pricing__cardHeader}>
            <div className={styles.pricing__badgeContainer}>
              <span className={styles.pricing__badgeText}>{pricingData.planName}</span>
              <div className={styles.pricing__badgeDivider} />
              <span className={styles.pricing__badgeText}>{pricingData.lessonCount}</span>
            </div>
            <p className={styles.pricing__headerDesc}>{pricingData.description}</p>
            <div className={styles.pricing__headerBottomLine} />
          </div>

          <div className={styles.pricing__cardContent}>
            <div className={styles.pricing__gridWrapper}>
              <div className={styles.pricing__features}>
                {pricingData.details.map((detail, idx) => (
                  <div key={idx} className={styles.pricing__featureItem}>
                    <div className={styles.pricing__featureIcon}>{detail.icon}</div>
                    <div className={styles.pricing__featureText}>
                      <h3 className={styles.pricing__featureLabel}>{detail.label}</h3>
                      <p className={styles.pricing__featureValue}>{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.pricing__bonusSection}>
                <div className={styles.pricing__bonusHeader}>
                  <div className={styles.pricing__featureIcon}>
                    <GiftIcon />
                  </div>
                  <h3 className={styles.pricing__featureLabel}>БОНУСИ</h3>
                </div>
                <ul className={styles.pricing__bonusList}>
                  {pricingData.bonuses.map((bonus, index) => (
                    <li key={index} className={styles.pricing__bonusItem}>
                      <div className={styles.pricing__bonusCheck}>
                        <CheckIcon />
                      </div>
                      <span className={styles.pricing__bonusText}>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.pricing__divider} />
            
            <div className={styles.pricing__priceRow}>
              <span className={styles.pricing__priceCurrent}>{pricingData.currentPrice}</span>
              <span className={styles.pricing__priceOld}>{pricingData.oldPrice}</span>
            </div>

            {/* <Button
              variant="action"
              onClick={handleBuy}
              disabled={isLoading}
              showIcon={!isLoading}
              className={styles.pricing__cta}
            >
              {isLoading ? "Обробка..." : "Почати навчання"}
            </Button> */}

            <Button
              variant="action"
              onClick={handleBuy}
            >
              Почати навчання
            </Button>
          </div>
        </div>

        <div className={`${styles.pricing__trustBadge} reveal-item`}>
          {pricingData.badge}
        </div>
      </div>
    </section>
  );
}