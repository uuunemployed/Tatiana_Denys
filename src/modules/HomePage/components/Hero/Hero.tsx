import styles from "./Hero.module.scss";
import MenuIcon from "../../../../../public/icons/menu.svg?react";
import ButtonIron from "../../../../../public/icons/iron.svg?react";
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
        <div className={styles.hero__top}>
          <div className={styles.hero__title}>
            <span
              className={styles["hero__title-letter"]}
              style={{ marginBottom: "-4px" }}
            >
              S
            </span>
            <div>
              <span className={styles["hero__title--right"]}>
                <span className={styles["hero__title-letter"]}>M</span>AKEUP
              </span>
              <div className={styles["hero__title--bottom"]}>
                <span className={styles["hero__title--left"]}>ECRETS</span>
                <span
                  className={styles["hero__text"]}
                  style={{ fontStyle: "italic", lineHeight: "20px" }}
                >
                  від нуля до впевненості
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.hero__text} style={{ marginTop: "32px" }}>
          Навчися створювати ідеальний макіяж без складностей — підкреслюй свою
          риси, створюй гармонійний образ і виглядай впевнено у будь-якій
          ситуації
        </p>
        <button className={styles.hero__button} style={{ marginTop: "40px" }}>
          Почати навчання
          <ButtonIron />
        </button>
      </div>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};
