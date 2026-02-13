import { useState } from 'react';
import styles from './MakeupFAQ.module.scss';
import { Sectionheader } from '../../../../components/SectionHeader';
import PlusIcon from "../../../../shared/icons/plus.svg?react";
import MinusIcon from "../../../../shared/icons/minus.svg?react";

const faqs = [
  {
    question: 'Чи потрібен досвід у макіяжі?',
    answer: 'Ні, курс розрахований на повних новачків. Ми починаємо з самих основ і поступово переходимо до складніших технік.',
  },
  {
    question: 'Скільки часу займає курс?',
    answer: 'Курс складається з 10 уроків, які можна проходити у вільному темпі. У середньому студенти завершують курс за 9-14 днів, але доступ до матеріалів — довічний.',
  },
  {
    question: 'Чи потрібно купувати дорогу косметику?',
    answer: 'Абсолютно ні! У бонусних чек-листах я зібрала 300 бюджетних засобів, які реально працюють. Можна почати з того, що у вас вже є.',
  },
  {
    question: 'Яка форма навчання?',
    answer: 'Це відеокурс з практичними уроками. Ви отримуєте доступ до платформи з усіма матеріалами, можете переглядати уроки скільки завгодно разів у зручний для вас час.',
  },
  {
    question: 'Чи можна повернути гроші?',
    answer: 'Так, у вас є 14 днів з моменту покупки, щоб запросити повернення коштів, якщо курс вам не підійшов.',
  },
  {
    question: 'Чи отримаю я сертифікат?',
    answer: 'Так, після завершення курсу ви отримаєте сертифікат про проходження навчання, який можна додати до свого портфоліо.',
  },
  {
    question: 'Чи є зворотній зв\'язок від викладача?',
    answer: 'Так, ви отримаєте доступ до спільного чату, де я відповідаю на запитання учасників та даю зворотній зв\'язок по роботах.',
  },
  {
    question: 'Як довго діє доступ до курсу?',
    answer: 'Доступ до курсу — довічний. Ви зможете повертатися до матеріалів у будь-який час, навіть через роки.',
  },
];

export function MakeupFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>

        <Sectionheader subtitle='asked questiony' title='Найпоширеніші' titleSub='запитання'/>

        <div className={styles.faq__list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faq__item}>
              <button
                onClick={() => toggleQuestion(index)}
                className={styles.faq__button}
              >
                <span className={styles.faq__questionText}>{faq.question}</span>
                <div className={styles.faq__icon}>
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </div>
              </button>

              <div
                className={`${styles.faq__content} ${
                  openIndex === index ? styles['faq__content--open'] : ''
                }`}
              >
                <div className={styles.faq__answerInner}>
                  <p className={styles.faq__answerText}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.faq__contact}>
          <h3 className={styles.faq__contactTitle}>Не знайшли відповідь?</h3>
          <p className={styles.faq__contactText}>
            Напишіть мені в Instagram, я з радістю відповім на всі ваші запитання
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.faq__instaBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
            Написати в Instagram
          </a>
        </div>
      </div>
    </section>
  );
}