import { useRef } from "react";
import styles from "./MakeupBonuses.module.scss";
import PresentIcon from "../../../../shared/icons/present.svg?react";
import { useReveal } from "../../../../shared/hooks/useScrollRaveal";

const checklistItems = [
  { text: "чек-лист по пензликам", top: "10%", left: "-10%" },
  { text: "довідник по косметиці", top: "20%", left: "45%" },
  { text: "чек-лист по догляду", top: "70%", left: "-10%" },
  { text: "люксова косметичка", top: "80%", left: "65%" },
  { text: "бюджетна косметичка", top: "90%", left: "10%" },
];

export function MakeupBonuses() {
  const containerRef = useRef<HTMLElement>(null!);
  useReveal(containerRef);

  return (
    <section ref={containerRef} className={styles.bonuses}>
      <div className={styles["bonuses__top-content"]}>
        {/* Кожен блок огортаємо в reveal-item для плавної появи */}
        <div className={`${styles.bonuses__badge} reveal-item`}>
          <PresentIcon className={styles.bonuses__badgeIcon} />
          <p className={styles.bonuses__badgeText}>Ексклюзивна пропозиція</p>
        </div>

        <h2 className={`${styles.bonuses__title} reveal-item`}>Бонуси</h2>

        <p className={`${styles.bonuses__subtitle} reveal-item`}>
          5 безкоштовних чек-листів <br /> із посиланнями
        </p>

        <div className={`${styles.bonuses__info} reveal-item`}>
          <p className={styles.bonuses__text}>
            Щоб ви не витрачали гроші на випадкові покупки я зібрала 
            <span className={styles.bonuses__highlight}>
              {" "}
              більше 500 засобів
            </span>
            , у чек листах, які реально працюють.
          </p>
          <p className={styles.bonuses__text}>
            Вони містять 
            <span className={styles.bonuses__highlight}> посилання на магазини</span>
            , де можна придбати косметику, яку я рекомендую.
          </p>
        </div>
      </div>

      <div className={`${styles.bonuses__videoWrapper} reveal-item`}>
        <video
          className={styles.bonuses__video}
          poster="/images/video-placeholder.jpg"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="videos/bonuses-preview.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>

        {checklistItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.bonuses__item} reveal-item`}
            style={{ 
              top: item.top, 
              left: item.left,
              // Каскадна поява чек-листів після появи відео
              transitionDelay: `${(index + 1) * 200}ms` 
            } as React.CSSProperties}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}