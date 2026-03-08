import styles from "./Menu.module.scss";
import CloseIcon from "../../../../shared/icons/close.svg?react";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const menuItems = [
  { title: "Головна", href: "#home" },
  { title: "Для кого курс", href: "#for-whom" },
  { title: "Програма навчання", href: "#program" },
  { title: "Про мене", href: "#about" },
  { title: "Бонуси", href: "#bonuses" },
  { title: "Ціна", href: "#price" },
  { title: "Питання - відповідь", href: "#faq" },
];

export default function BurgerMenu({
  isMenuOpen,
  setIsMenuOpen,
}: BurgerMenuProps) {
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <aside
        className={`${styles.menu} ${isMenuOpen ? styles["menu-open"] : ""}`}
      >
        <CloseIcon
          onClick={toggleMenu}
          className={`${styles.toggleIcon} ${isMenuOpen ? styles.iconActive : ""}`}
          height={20}
          width={20}
        />

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.itemContent} ${isEven ? styles.even : styles.odd}`}
                    onClick={closeMenu}
                  >
                    <span className={styles.itemIndex}>
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span className={styles.itemTitle}>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
