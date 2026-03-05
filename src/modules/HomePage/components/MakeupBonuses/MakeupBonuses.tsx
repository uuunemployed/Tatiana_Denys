import styles from "./MakeupBonuses.module.scss";
import PresentIcon from "../../../../shared/icons/present.svg?react";

const checklistItems = [
  { text: "чек-лист по пензликам", top: "10%", left: "-10%" },
  { text: "довідник по косметиці", top: "20%", left: "45%" },
  { text: "чек-лист по догляду", top: "70%", left: "-10%" },
  { text: "базовий набір", top: "80%", left: "65%" },
  { text: "бюджетна косметика", top: "90%", left: "10%" },
];

export function MakeupBonuses() {
  return (
    <section className={styles.bonuses}>
      <div className={styles["bonuses__top-content"]}>
        <div className={styles.bonuses__badge}>
          <PresentIcon className={styles.bonuses__badgeIcon} />
          <p className={styles.bonuses__badgeText}>Ексклюзивна пропозиція</p>
        </div>

        <h2 className={styles.bonuses__title}>Бонуси</h2>

        <p className={styles.bonuses__subtitle}>
          5 безкоштовних чек-листів <br /> із посиланнями
        </p>

        <div className={styles.bonuses__info}>
          <p className={styles.bonuses__text}>
            Щоб ви не витрачали гроші на випадкові покупки, я зібрала близько
            <span className={styles.bonuses__highlight}>
              {" "}
              300 бюджетних засобів
            </span>
            , які реально працюють
          </p>
          <p className={styles.bonuses__text}>
            Це мій особистий список після
            <span className={styles.bonuses__highlight}> сотень тестів</span>,
            який ви отримаєте у подарунок разом з курсом
          </p>
        </div>
      </div>

      <div className={styles.bonuses__videoWrapper}>
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

        {checklistItems.map((item) => (
          <div
            className={styles.bonuses__item}
            style={{ top: item.top, left: item.left }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}
