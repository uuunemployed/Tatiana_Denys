import styles from "./MakeupForWho.module.scss";
import { Sectionheader } from "../../../../components/SectionHeader/SectionHeader";
import { Button } from "../../../../components/MakeupButton/MakeupButton";

const cardsData = [
  {
    id: "01",
    title: "ДЛЯ НОВАЧКІВ БЕЗ ДОСВІДУ",
    description: "Ви не розумієте як підібрати тональний, як правильно робити корекцію та підкреслювати очі—цей курс для вас. Він навчить вас базі.",
  },
  {
    id: "02",
    title: "ДЛЯ ТИХ, У КОГО ОБМАЛЬ ЧАСУ",
    description: "Ви студентка або мама в декреті, яка не має вільних більше 15 хвилин на день. Уроки тривалістю 15хв та чек-листи, в яких я зібрала косметичку за вас.",
  },
  {
    id: "03",
    title: "ДЛЯ ТИХ, ХТО МАЄ ДОСВІД, АЛЕ НЕ ВИХОДИТЬ БАЖАНИЙ РЕЗУЛЬТАТ",
    description: "Ви витрачаєте гроші на продукти, які не працюють із вашими проблемами. Після перегляду ви отримаєте сотні компліментів вашим стрілкам.",
  },
];

export function MakeupForWho() {
  return (
    <section className={styles["makeup-for-who"]}>
      <div className={styles["makeup-for-who__container"]}>
        <div className={styles["makeup-for-who__sidebar"]}>
          <Sectionheader
            subtitle="for what?"
            title="ДЛЯ КОГО"
            titleSub="ПІДІЙДЕ КУРС?"
            isStiky={true}
          />
        </div>

        <div className={styles["makeup-for-who__list"]}>
          {cardsData.map((card, index) => (
            <article
              key={card.id}
              className={styles["makeup-for-who__card"]}
              style={{ "--index": index } as React.CSSProperties}
            >
              <span className={styles["makeup-for-who__card-number"]}>
                {card.id}
              </span>
              <div className={styles["makeup-for-who__card-content"]}>
                <h3 className={styles["makeup-for-who__card-title"]}>
                  {card.title}
                </h3>
                <p className={styles["makeup-for-who__card-description"]}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles["makeup-for-who__cta"]}>
          <Button variant="action">
            хочу на курс
          </Button>
        </div>
      </div>
    </section>
  );
}