import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./MakeupExpert.module.scss";
import { useReveal } from "../../../../shared/hooks/useScrollRaveal";

const statsData = [
  {
    targetNumber: 6,
    suffix: "+",
    description: ["років", "ведення", "блогу"],
    modifier: styles["expert__card--first"],
  },
  {
    targetNumber: 8,
    suffix: "+",
    description: ["років у б'юті", "сфері"],
    modifier: styles["expert__card--second"],
  },
  {
    targetNumber: 500,
    suffix: "+",
    description: ["задоволених", "учениць"],
    modifier: styles["expert__card--third"],
  },
];

// Окремий компонент для картки зі статистикою
function StatCard({ stat, index }: { stat: typeof statsData[0], index: number }) {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={viewRef}
      // Додаємо reveal-item для плавної появи самої картки
      className={`${styles.expert__card} ${stat.modifier} reveal-item`}
      // Додаємо затримку, щоб картки з'являлися по черзі
      style={{ transitionDelay: `${index * 200}ms` } as React.CSSProperties}
    >
      <p className={styles.expert__card_number}>
        {inView ? (
          <CountUp
            start={1}
            end={stat.targetNumber}
            duration={2.5}
            suffix={stat.suffix}
          />
        ) : (
          `1${stat.suffix}`
        )}
      </p>
      <div className={styles.expert__card_desc}>
        {stat.description.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export function MakeupExpert() {
  const containerRef = useRef<HTMLElement>(null!);
  useReveal(containerRef); // Активуємо спостереження за всіма reveal-item всередині

  return (
    <section ref={containerRef} className={styles.expert}>
      <div className={styles.expert__content}>
        <div className={styles.expert__stats}>
          <div className={styles.expert__grid}>
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
          
          <div className={`${styles.expert__description} reveal-item`} style={{ transitionDelay: '600ms' }}>
            <p className={styles.expert__title}>
              Я ЕКСПЕРТ З<br className={styles.mobile_br} />
              БАГАТОРІЧНИМ
            </p>
            <p className={styles.expert__subtitle}>
              ДОСВІДОМ В<br className={styles.mobile_br} />
              Б'ЮТІ СФЕРІ
            </p>
          </div>
        </div>

        <img
          data-aos="fade-up"
          className={`${styles.expert__image} reveal-item`}
          style={{ transitionDelay: '800ms' }}
          src="images/expert-image.png"
          alt="Expert"
        />
      </div>
    </section>
  );
}