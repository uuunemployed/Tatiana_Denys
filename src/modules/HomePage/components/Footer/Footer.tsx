import styles from "./Footer.module.scss";
import InstagramIcon from "../../../../shared/icons/instagram.svg?react";
import TelegramIcon from "../../../../shared/icons/telegram.svg?react";

export function MakeupFooter() {
  const navLinks = [
    { name: "Головна", href: "#hero" },
    { name: "Для кого курс", href: "#for-who" },
    { name: "Програма навчання", href: "#lessons" },
    { name: "Бонуси", href: "#bonuses" },
    { name: "Ціна", href: "#pricing" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__bg}>
        {/* <img src={gradientBg} alt="" /> */}
        <div className={styles.footer__overlay} />
      </div>

      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <div className={styles["footer__brand-content"]}>
              <div className={styles["footer__brand--top"]}>
                <span className={styles["footer__brand-letter"]}>M</span>
                AKEUP
              </div>
              <div className={styles["footer__brand--bottom"]}>
                <span className={styles["footer__brand-letter"]}>S</span>
                TART
              </div>
            </div>
            <p>
              Онлайн курс для тих, хто хоче навчитися робити ідеальний макіяж
              від професіонала
            </p>
          </div>

          <div className={styles.footer__nav}>
            <h4 className={styles.footer__sectionTitle}>Навігація</h4>
            <ul className={styles.footer__list}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.footer__link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__contacts}>
            <h4 className={styles.footer__sectionTitle}>Контакти</h4>
            <div className={styles.footer__list}>
              <a href="" target="_blank" rel="noopener noreferrer" className={styles.footer__contactItem}>
                <div className={styles.footer__iconWrapper}><InstagramIcon /></div>
                Instagram
              </a>
              <a href="" className={styles.footer__contactItem}>
                <div className={styles.footer__iconWrapper}><TelegramIcon /></div>
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer__divider}>
          <div className={styles.footer__bottom}>
            <p className={styles.footer__copyright}>
              © 2026 Makeup Secrets. Всі права захищені.
            </p>
            <div className={styles.footer__legal}>
              <a href="#">Політика конфіденційності</a>
              <a href="#">Умови використання</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
