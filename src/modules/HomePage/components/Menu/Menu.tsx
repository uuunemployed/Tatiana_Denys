import MenuIcon from "../../../../../public/icons/menu.svg?react";
import styles from "./Menu.module.scss";

export const Menu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => {
  return (
    <aside
      className={`${styles.menu} ${isMenuOpen ? styles["menu-open"] : ""}`}
    >
      <MenuIcon
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </aside>
  );
};
