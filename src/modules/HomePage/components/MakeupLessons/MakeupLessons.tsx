import { useState } from "react";
import styles from "./MakeupLessons.module.scss";
import { Sectionheader } from "../../../../components/SectionHeader/SectionHeader";
import ButtonIron from "../../../../shared/icons/iron.svg?react";

const lessonsData = [
  {
    id: "01",
    title: "ВСТУП У СВІТ МАКІЯЖУ",
    topics: [
      { text: "Основні ", bold: "помилки ", rest: "в макіяжі" },
      { text: "Колороптика у макіяжі: враховувати чи ні?" },
      {
        text: "Як правильно ",
        bold: "підібрати косметику ",
        rest: "під свій тип шкіри",
      },
      { text: "Аналіз косметики: ", bold: "що варто залишити, а що викинути?" },
      { text: "Чому макіяж відіграє важливу роль" },
      { text: "Базові інструменти: ", bold: "пензлі та спонжі" },
    ],
    result:
      "Навчитеся уникати поширених помилок у макіяжі, дізнаєтеся, які засоби необхідні для базового макіяжу, як правильно підібрати косметику під свій тип шкіри, як визначити свій колортип і використовувати це для створення гармонійного образу",
    image: "images/IMG_8245.PNG",
  },
  {
    id: "02",
    title: "ТОНАЛЬНА ОСНОВА: ПІДБІР ВІДТІНКУ ТА ФОРМУЛ",
    topics: [
      {
        text: "Як підібрати ",
        bold: "правильний відтінок ",
        rest: "тонального засобу?",
      },
      { text: "Які формули основ підходять для різних типів шкіри?" },
      { text: "Техніки нанесення тонального засобу" },
      { text: "Як зробити тон ", bold: "стійким протягом дня?" },
    ],
    result:
      "Навчитеся обирати ідеальний відтінок тонального засобу та формулу відповідно до типу шкіри",
    image: "images/IMG_8251.JPG",
  },
  {
    id: "03",
    title: "КОРЕКЦІЯ ОБЛИЧЧЯ: СКУЛЬПТУРУВАННЯ ТА ХАЙЛАЙТИНГ",
    topics: [
      { text: "Як правильно ", bold: "скульптурувати обличчя?" },
      { text: "Куди наносити хайлайтер для ідеального сяйва?" },
      { text: "Техніки контурування для різних форм обличчя" },
      { text: "Вибір відтінків для ", bold: "природного результату" },
    ],
    result:
      "Опануєте техніки корекції форми обличчя та створення природного сяйва",
    image: "images/IMG_8252.PNG",
  },
  {
    id: "04",
    title: "БРОВИ: ФОРМА ТА ЗАПОВНЕННЯ",
    topics: [
      { text: "Як визначити ", bold: "ідеальну форму брів?" },
      { text: "Якими засобами краще заповнювати брови?" },
      { text: "Техніки створення природного вигляду" },
    ],
    result:
      "Навчитеся створювати ідеальну форму брів та природно їх заповнювати",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "05",
    title: "МАКІЯЖ ОЧЕЙ: БАЗОВІ ТЕХНІКИ",
    topics: [
      { text: "Які ", bold: "базові техніки ", rest: "макіяжу очей існують?" },
      { text: "Як підібрати відтінки тіней відповідно до кольору очей?" },
      { text: "Створення глибини та виразності погляду" },
    ],
    result:
      "Освоїте основні техніки макіяжу очей та навчитеся підбирати кольори",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "06",
    title: "СТРІЛКИ ТА ПІДВОДКА",
    topics: [
      { text: "Як намалювати ", bold: "ідеальні стрілки?" },
      { text: "Які види стрілок підходять різним формам очей?" },
      { text: "Секрети стійкості підводки" },
    ],
    result: "Навчитеся малювати різні види стрілок відповідно до форми очей",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "07",
    title: "ГУБИ: КОНТУРУВАННЯ ТА НАНЕСЕННЯ ПОМАДИ",
    topics: [
      { text: "Як правильно ", bold: "контурувати губи?" },
      { text: "Як зробити так, щоб помада трималась довше?" },
      { text: "Техніки створення об'ємних губ" },
    ],
    result:
      "Опануєте техніки створення ідеальної форми губ та стійкого макіяжу",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "08",
    title: "ДЕННИЙ МАКІЯЖ",
    topics: [
      { text: "Які особливості ", bold: "денного макіяжу?" },
      { text: "Як створити природний образ?" },
      { text: "Мінімалістичний підхід до макіяжу" },
    ],
    result: "Навчитеся створювати легкий та природний денний макіяж",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "09",
    title: "ВЕЧІРНІЙ МАКІЯЖ",
    topics: [
      { text: "Як створити ", bold: "ефектний вечірній образ?" },
      { text: "Які техніки використовувати для яскравого макіяжу?" },
      { text: "Секрети стійкості вечірнього макіяжу" },
    ],
    result: "Освоїте створення ефектного вечірнього макіяжу",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "10",
    title: "ПОМИЛКИ В МАКІЯЖІ ТА ЯК ЇХ УНИКНУТИ",
    topics: [
      { text: "Які найпоширеніші ", bold: "помилки в макіяжі?" },
      { text: "Як їх виправити та запобігти?" },
      { text: "Лайфхаки для ідеального результату" },
    ],
    result: "Дізнаєтеся про типові помилки та навчитеся їх уникати",
    image:
      "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMHdvbWFuJTIwYmVhdXR5fGVufDF8fHx8MTc3MDI5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function MakeupLessons() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className={styles.lessons}>
      <div className={styles.lessons__container}>
        {/* <h2 className={styles.lessons__top_subtitle}>
          Програма курсу
        </h2>
        <p className={styles.lessons__top_title}>10 УРОКІВ ПО КОМПЛЕКСНОМУ МАКІЯЖУ</p> */}

        <Sectionheader
          subtitle="course program"
          title="Програма курсу"
          titleSub={null}
          isTextWhite={true}
        />

        <div className={styles.lessons__grid}>
          {lessonsData.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`${styles.lessons__card} ${index >= 3 && !showAll ? styles.hiddenCard : ""}`}
            >
              <div className={styles.lessons__card_header}>
                <div className={styles.lessons__card_info}>
                  <span className={styles.lessons__card_id}>{lesson.id}/</span>
                  <h3 className={styles.lessons__card_name}>{lesson.title}</h3>
                </div>

                <ul className={styles.lessons__topics}>
                  {lesson.topics.map((topic, idx) => (
                    <li key={idx} className={styles.lessons__topic_item}>
                      <ButtonIron style={{ transform: "rotate(45deg)", flexShrink: 0 }} />
                      <span className={styles.text_gray}>
                        {typeof topic === "string" ? (
                          topic
                        ) : (
                          <>
                            {topic.text}
                            {topic.bold && (
                              <span className={styles.bold}>{topic.bold}</span>
                            )}
                            {topic.rest && topic.rest}
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.lessons__image_container}>
                <img
                  src={lesson.image}
                  alt=""
                  className={styles.lessons__image}
                />
              </div>

              <div className={styles.lessons__result_section}>
                <h4 className={styles.lessons__result_label}>РЕЗУЛЬТАТ</h4>
                <p className={styles.lessons__result_text}>{lesson.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.lessons__footer}>
          <button
            onClick={() => setShowAll((p) => !p)}
            className={styles.lessons__btn}
          >
            {showAll ? "меньше" : "більше"}
          </button>
        </div>
      </div>
    </section>
  );
}
