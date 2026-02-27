import styles from "./Hero.module.scss";
import MenuIcon from "../../../../shared/icons/menu.svg?react";
import { useState } from "react";
import { Menu } from "../Menu";
import { Button } from "../../../../components/MakeupButton/MakeupButton";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Додав клас замість inline-styles для чистоти */}
      <div className={styles.hero__inner}>
        <header className={styles.hero__header}>
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </header>

        <div className={styles.hero__content}>
          <div className={styles.hero__title}>
            <div className={styles["hero__title-content"]}>
              <div className={styles["hero__title--top"]}>
                <span className={styles["hero__title-letter"]}>M</span>
                AKEUP
              </div>
              <div className={styles["hero__title--bottom"]}>
                <span className={styles["hero__title-letter"]}>S</span>
                TART
              </div>
            </div>
            <span className={styles["hero__text-title"]}>
              від нуля до впевненості
            </span>
          </div>

          <div className={styles.hero__description}>
            <p className={styles["hero__description-top"]}>
              Доступ одразу після оплати
            </p>
            <p className={styles.hero__text}>
              За 5 днів ти навчишся робити легкий макіяж та стрілки для
              щоденного життя без перенавантаження косметикою, складних технік
              та дорогих продуктів.
            </p>
            <Button
              variant="hero"
              onClick={() => console.log("Відкрити форму реєстрації")}
            >
              Почати навчання
            </Button>
          </div>
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};
