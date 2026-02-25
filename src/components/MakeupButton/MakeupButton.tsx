import styles from "./MakeupButton.module.scss";
import ButtonIron from "../../shared/icons/iron.svg?react";

export const MakeupButton = ({ title }: { title: string }) => {
  return (
    <button className={styles.makeup__button}>
      {title}
      <ButtonIron
        height={20}
        width={20}
        className={styles["makeup__button-icon"]}
      />
    </button>
  );
};
