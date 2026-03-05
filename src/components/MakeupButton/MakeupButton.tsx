import React from "react";
import styles from "./MakeupButton.module.scss";
import ButtonIron from "../../shared/icons/iron.svg?react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "hero" | "action" | "lessons";
  children: React.ReactNode;
  showIcon?: boolean;
}

export const Button = ({
  children,
  variant = "action",
  showIcon = true,
  className = "",
  ...props 
}: ButtonProps) => {
  const buttonClass = `${styles.btn} ${styles[`btn--${variant}`]} ${className}`;

  return (
    <button 
      className={buttonClass} 
      {...props} 
    >
      <span className={styles.btn__text}>{children}</span>
      {showIcon && <ButtonIron className={styles.btn__icon} />}
    </button>
  );
};