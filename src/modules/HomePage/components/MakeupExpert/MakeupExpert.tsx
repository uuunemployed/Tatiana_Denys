import styles from "./MakeupExpert.module.scss";

const statsData = [
  {
    number: "6+",
    description: ["років", "ведення", "блогу"],
    modifier: styles["expert__card--first"],
  },
  {
    number: "8+",
    description: ["років у б'юті", "сфері"],
    modifier: styles["expert__card--second"],
  },
  {
    number: "500+",
    description: ["задоволених", "учениць"],
    modifier: styles["expert__card--third"],
  },
];

export function MakeupExpert() {
  return (
    <section className={styles.expert}>
      <div className={styles.expert__content}>
        <div className={styles.expert__stats}>
          <div className={styles.expert__grid}>
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`${styles.expert__card} ${stat.modifier}`}
              >
                <p className={styles.expert__card_number}>{stat.number}</p>
                <div className={styles.expert__card_desc}>
                  {stat.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.expert__description}>
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
          className={styles.expert__image}
          src="images/expert-image.png"
          alt="Expert"
        />
      </div>
    </section>
  );
}