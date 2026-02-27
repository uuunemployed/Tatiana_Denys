import styles from "./MakeupBonuses.module.scss";
import PresentIcon from "../../../../shared/icons/present.svg?react";
import { useEffect, useState } from "react";

const checklistItems = [
  {
    text: "чек-лист по пензликам",
    top: "5%",
    left: "-15%",
    // Швидкість у % від ширини/висоти контейнера
    speedX: -0.02, 
    speedY: 0.01,
  },
  {
    text: "довідник по косметиці",
    top: "15%",
    left: "70%",
    speedX: 0.03,
    speedY: -0.02,
  },
  {
    text: "чек-лист по догляду",
    top: "45%",
    left: "-25%",
    speedX: -0.04,
    speedY: 0.03,
  },
  {
    text: "бюджетна косметика",
    top: "65%",
    left: "75%",
    speedX: 0.02,
    speedY: -0.04,
  },
  {
    text: "базовий набір",
    top: "85%",
    left: "10%",
    speedX: -0.01,
    speedY: 0.05,
  },
];
export function MakeupBonuses() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* <video 
          className={styles.bonuses__video}
          poster="/images/video-placeholder.jpg"
          controls
          playsInline
        >
          <source src="/video/bonuses-preview.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video> */}

        {checklistItems.map((item, index) => (
          <div
            key={index}
            className={styles.bonuses__item}
            style={{
              top: item.top,
              left: item.left,
              // Рух по діагоналі: скрол множимо на вектори X та Y
              transform: `translate3d(${scrollY * item.speedX}px, ${scrollY * item.speedY}px, 0)`,
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}
