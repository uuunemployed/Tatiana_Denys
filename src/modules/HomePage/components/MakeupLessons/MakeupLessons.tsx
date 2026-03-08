import { useState } from "react";
import styles from "./MakeupLessons.module.scss";
import { Sectionheader } from "../../../../components/SectionHeader/SectionHeader";
import ButtonIron from "../../../../shared/icons/iron.svg?react";
import { Button } from "../../../../components/MakeupButton/MakeupButton";
interface Topic {
  text: string;
  bold?: string;
  rest?: string;
}

interface Lesson {
  id: string;
  title: string;
  topics: (string | Topic)[];
  result: string;
  image: string;
}

const lessonsData = [
  {
    id: "01",
    title: "Підготовка шкіри",
    topics: [
      { text: "Типи шкіри ", bold: "простою мовою" },
      { text: "Правильна підготовка до макіяжу кожного типу шкіри" },
      { text: "Перекриття ", bold: "кольорових недоліків ", rest: "шкіри" },
    ],
    result:
      "Визначите свій тип шкіри за 2 хвилини, оберете засоби під макіяж та навчитеся приховувати недоліки.",
    image: "images/lesson-photo-1.PNG",
  },
  {
    id: "02",
    title: "Тон та консилер",
    topics: [
      { text: "Як підібрати для себе ", bold: "ідеальний тон?" },
      { text: "Як і чим правильно його наносити?" },
      { text: "Консилер: як обрати і наносити ", bold: "без скочування?" },
    ],
    result:
      "Підберете ідеальний тон, зробите стійке перекриття та забезпечите тривалість макіяжу без скочування.",
    image: "images/lesson-photo-2.JPG",
  },
  {
    id: "03",
    title: "Кремова корекція",
    topics: [
      { text: "Проста схема ", bold: "кремової корекції" },
      { text: "Як обрати ", bold: "відтінки ", rest: "і як наносити?" },
      { text: "Для якої шкіри і потреб підійде?" },
    ],
    result:
      "Навчитеся натуральній корекції без плям. Зрозумієте різницю між бронзером та скульптором. Навчитеся робити легкий рельєф шкіри",
    image: "images/lesson-photo-3.PNG",
  },
  {
    id: "04",
    title: "Пудри",
    topics: [
      { text: "Які потреби ", bold: "закриває пудра?" },
      {
        text: "Види та як ",
        bold: "обрати для себе ",
        rest: "відповідно до типу шкіри?",
      },
      { text: "Техніки фіксації макіяжу" },
    ],
    result:
      "Навчитеся обирати пудру під конкретну потребу та правильно фіксувати макіяж без ефекту маски.",
    image: "images/lesson-photo-4.JPG",
  },
  {
    id: "05",
    title: "Суха корекція обличчя",
    topics: [
      { text: "Схема нанесення ", bold: "сухих текстур" },
      { text: "Секрет ", bold: "тушовки без плям" },
      { text: "Кому підійде дана корекція?" },
    ],
    result:
      "Оберете для себе вид корекції, яка буде триматися стійко протягом дня, без плям та рижини.",
    image: "images/lesson-photo-5.JPG",
  },
  {
    id: "06",
    title: "Макіяж брів",
    topics: [
      { text: "Як обрати ", bold: "правильну форму ", rest: "брів?" },
      { text: "Найпростіший спосіб оформлення ", bold: "двома продуктами" },
    ],
    result:
      "Навчитеся робити природні брови, які не додають віку, а підкреслюють обличчя.",
    image: "images/lesson-photo-6.JPG",
  },
  {
    id: "07",
    title: "Макіяж очей",
    topics: [
      { text: "Виразний погляд ", bold: "двома продуктами" },
      {
        text: "Секрет візуального ",
        bold: "зменшення нависання ",
        rest: "повіки",
      },
      { text: "Швидке підкреслення погляду без тіней" },
    ],
    result:
      "Навчитеся приховувати нависання та зможете створювати виразний погляд за 2 хвилини.",
    image: "images/lesson-photo-7.JPG",
  },
  {
    id: "08",
    title: "Макіяж губ",
    topics: [
      { text: "Як обрати ", bold: "ідеальний відтінок ", rest: "помади?" },
      { text: "Як правильно ", bold: "збільшувати губи ", rest: "натурально?" },
    ],
    result:
      "Навчитеся підбирати свій ідеальний відтінок та додавати легкого обʼєму непомітно.",
    image: "images/lesson-photo-8.JPG",
  },
  {
    id: "09",
    title: "Урок про кольоротипи",
    topics: [
      {
        text: "4 основні ",
        bold: "кольоротипи ",
        rest: "та їх характеристики",
      },
      { text: "Визначення свого кольотипу за 2хв" },
      { text: "Підбір кольорів, які ", bold: "вам пасують" },
    ],
    result:
      "Навчитеся правильно обирати відтінки в макіяжі та гардеробі, щоб підкреслювати свою зовнішність.",
    image: "images/lesson-photo-9.JPG",
  },
  {
    id: "10",
    title: "Стрілки",
    topics: [
      { text: "Проста схема стрілок для ", bold: "відкритої повіки" },
      { text: "Стрілки для повіки із ", bold: "легким нависанням" },
      { text: "Продукт та пензлик для ", bold: "швидких стрілок" },
      { text: "Як намалювати ", bold: "однакові стрілки?" },
    ],
    result:
      "Навчитеся легко і швидко малювати симетричні стрілки на кожен день та зрозумієте, який вид обрати для вашої форми повіки.",
    image: "images/lesson-photo-10.png",
  },
];

export function MakeupLessons() {
  const [showAll, setShowAll] = useState(false);
  const visibleLessons = lessonsData.slice(0, 3);
  const hiddenLessons = lessonsData.slice(3);

  return (
    <section className={styles.lessons}>
      <div className={styles.lessons__container}>
        <Sectionheader
          subtitle="course program"
          title="Програма курсу"
          isTextWhite
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
          <Button
            variant="lessons"
            showIcon={false}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "менше" : "більше"}
          </Button>
        </div>
      </div>
    </section>
  );
}

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
                    {topic.rest}
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
