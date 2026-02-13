import styles from "./MakeupForWho.module.scss";
import ButtonIron from "../../../../shared/icons/iron.svg?react";
import { Sectionheader } from "../../../../components/SectionHeader/SectionHeader";

const cardsData = [
  {
    id: "01",
    title: "ХТО РОБИТЬ МАКІЯЖ ДЛЯ СЕБЕ:",
    description:
      "вам важко зрозуміти як підібрати правильний тон, навчитися контурингу, робити стійкий макіяж. Ви навчитеся всім базовим і просунутим технікам",
  },

  {
    id: "02",
    title: "ХТО НЕ ЗНАЄ, ЯКУ КОСМЕТИКУ ОБРАТИ:",
    description:
      "ви дізнаєтеся які продукти найкраще підходять для вашого типу шкіри, як їх правильно підбирати і комбінувати для досягнення бажаного результату",
  },

  {
    id: "03",
    title: "ХТО ХОЧЕ НАВЧИТИСЬ РОБИТИ МАКІЯЖ ШВИДКО І ЯКІСНО:",
    description:
      "ви отримаєте перевірені алгоритми і техніки, які допоможуть створювати ідеальний макіяж за мінімальний час без шкоди для якості",
  },

  {
    id: "04",
    title: "ХТО ХОЧЕ ВИГЛЯДАТИ ВПЕВНЕНО:",
    description:
      "навчитеся підкреслювати свої переваги і приховувати недоліки, створювати образи які підходять саме вам і відчувати себе комфортно",
  },

  {
    id: "05",
    title: "ХТО ХО'ЧЕ ПОЧАТИ КАР'ЄРУ ВІЗАЖИСТА:",
    description:
      "ви отримаєте базові знання, навчитеся технікам макіяжу, дізнаєтеся про секрети і тонкощі та побудуєте власне портфоліо",
  },
];

export function MakeupForWho() {
  return (
    <section className={styles["makeup-for-who"]}>
      <div className={styles["makeup-for-who__container"]}>
        <div className={styles["makeup-for-who__list"]}>
          <Sectionheader subtitle='for what?' title='ДЛЯ КОГО' titleSub='ПІДІЙДЕ КУРС?' isStiky={true} />
          {cardsData.map((card, index) => (
            <article
              key={card.id}
              className={styles["makeup-for-who__card"]}
              style={{ top: `${160 + index * 40}px` }}
            >
              <div className={styles["makeup-for-who__card-content"]}>
                <div className={styles["makeup-for-who__card-header"]}>
                  <span className={styles["makeup-for-who__card-number"]}>
                    {card.id}
                  </span>
                  <h3 className={styles["makeup-for-who__card-title"]}>
                    {card.title}
                  </h3>
                </div>
                <p className={styles["makeup-for-who__card-description"]}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles["makeup-for-who__cta"]}>
          <button className={styles["makeup-for-who__button"]}>
            Хочу на курс
            <ButtonIron
              height={20}
              width={20}
              className={styles["makeup-for-who__button-icon"]}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
