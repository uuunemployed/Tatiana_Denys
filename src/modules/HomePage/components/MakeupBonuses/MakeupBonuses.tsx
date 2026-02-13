import styles from "./MakeupBonuses.module.scss";
import PresentIcon from "../../../../shared/icons/present.svg?react";

// const checklistItems = [
//   { text: "чек-лист по пензликам", top: "4.1rem", left: "10.86rem" },
//   { text: "довідник по косметиці", top: "20rem", left: "20rem" },
//   { text: "чек-лист по доглядовій косметиці", top: "30rem", left: "30rem" },
//   { text: "чек-лист бюджетної косметики", top: "40rem", left: "40rem" },
// ];

export function MakeupBonuses() {
  return (
    <section className={styles.bonuses}>
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

      <div className={styles.bonuses__videoWrapper}>
        {/* <video 
          className={styles.bonuses__video}
          poster="/images/video-placeholder.jpg"
          controls
          playsInline
        >
          <source src="/video/bonuses-preview.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video> */}
        {/* {checklistItems.map(item => (
          <div className={styles.bonuses__item} style={{top: item.top, left: item.left}}>
            {item.text}
          </div>
        ))} */}
      </div>
    </section>
  );
}
