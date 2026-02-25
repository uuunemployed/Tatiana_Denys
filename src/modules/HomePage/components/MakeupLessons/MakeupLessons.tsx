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
      "Визначите свій тип шкіри за 2 хвилини. Оберете для себе засоби під макіяж. Навчитеся перекривати кольорові недоліки на обличчі",
    image: "images/lesson-photo-1.PNG",
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
    image: "images/lesson-photo-2.JPG",
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
    image: "images/lesson-photo-3.PNG",
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
      "images/lesson-photo-4.JPG",
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
      "images/lesson-photo-5.JPG",
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
      "images/lesson-photo-6.JPG",
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
      "images/lesson-photo-7.JPG",
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
      "images/lesson-photo-8.JPG",
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
      "images/lesson-photo-9.JPG",
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
      "images/lesson-photo-10.JPG",
  },
];

interface Topic {
  text: string;
  bold?: string;
  rest?: string;
}

interface Lesson {
  id: string;
  title: string;
  topics: (string | Topic)[]; // Тема може бути або рядком, або об'єктом
  result: string;
  image: string;
}

export function MakeupLessons() {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Явно вказуємо тип масиву для slice
  const visibleLessons: Lesson[] = (lessonsData as Lesson[]).slice(0, 3);
  const hiddenLessons: Lesson[] = (lessonsData as Lesson[]).slice(3);

  return (
    <section className={styles.lessons}>
      <div className={styles.lessons__container}>
        <Sectionheader
          subtitle="course program"
          title="Програма курсу"
          titleSub={null}
          isTextWhite={true}
        />

        <div className={styles.lessons__grid}>
          {visibleLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}

          <div
            className={`${styles.lessons__expandable} ${showAll ? styles.expanded : ""}`}
          >
            <div className={styles.lessons__expandable_inner}>
              <div className={styles.lessons__hidden_list}>
                {hiddenLessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.lessons__footer}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.lessons__btn}
          >
            {showAll ? "менше" : "більше"}
          </button>
        </div>
      </div>
    </section>
  );
}

// Типізуємо пропси для LessonCard
function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className={styles.lessons__card}>
      <div className={styles.lessons__card_header}>
        <div className={styles.lessons__card_info}>
          <span className={styles.lessons__card_id}>{lesson.id}/</span>
          <h3 className={styles.lessons__card_name}>{lesson.title}</h3>
        </div>

        <ul className={styles.lessons__topics}>
          {lesson.topics.map((topic, idx) => (
            <li key={idx} className={styles.lessons__topic_item}>
              <ButtonIron
                style={{ transform: "rotate(45deg)", flexShrink: 0 }}
              />
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
          alt={lesson.title}
          className={styles.lessons__image}
        />
      </div>

      <div className={styles.lessons__result_section}>
        <h4 className={styles.lessons__result_label}>РЕЗУЛЬТАТ</h4>
        <p className={styles.lessons__result_text}>{lesson.result}</p>
      </div>
    </div>
  );
}
