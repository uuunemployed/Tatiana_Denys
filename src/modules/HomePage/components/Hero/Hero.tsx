import styles from "./Hero.module.scss";
// import MenuIcon from "../../../../shared/icons/menu.svg?react";
import { useState } from "react";
import { Button } from "../../../../components/MakeupButton/MakeupButton";
import BurgerMenu from "../Menu/Menu";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <header className={styles.hero__header}>
          {/* <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} /> */}
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
            <Button variant="hero" onClick={scrollToPricing}>
              Почати навчання
            </Button>
          </div>
        </div>
      </div>

      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};
