import styles from "./Hero.module.scss";
import MenuIcon from "../../../../shared/icons/menu.svg?react";
import ButtonIron from "../../../../shared/icons/iron.svg?react";
import { useState } from "react";
import { Menu } from "../Menu";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <header className={styles.hero__header}>
        {/* <h1 className={styles["hero__header-title"]}>Tatiana</h1> */}
        <MenuIcon
          onClick={() => {
            setIsMenuOpen((p) => (p = !p));
          }}
        />
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
              ECRETS
            </div>
          </div>
          <span className={styles["hero__text-title"]}>
            від нуля до впевненості
          </span>
        </div>
        <div className={styles.hero__description}>
          <p className={styles.hero__text}>
            Навчися створювати ідеальний макіяж без складностей — підкреслюй
            свою риси, створюй гармонійний образ і виглядай впевнено у будь-якій
            ситуації
          </p>
          <button className={styles.hero__button}>
            Почати навчання
            <ButtonIron />
          </button>
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};
