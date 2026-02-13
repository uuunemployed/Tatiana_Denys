import styles from "./SectionHeader.module.scss";

export const Sectionheader = ({
  subtitle,
  title,
  titleSub,
  isTextWhite = false,
  isStiky = false,
}: {
  subtitle?: string;
  title: string;
  titleSub?: string | null;
  isTextWhite?: boolean;
  isStiky?: boolean;
}) => {
  const textColor = isTextWhite ? "#ffffff" : "#0A0A0A";
  return (
    <header
      style={{ position: isStiky ? "sticky" : "relative" }}
      className={styles["section-header"]}
    >
      {subtitle && (
        <div
          style={{ color: textColor }}
          className={styles["section-header__subtitle"]}
        >
          {subtitle}
        </div>
      )}
      <h2
        style={{ color: textColor }}
        className={styles["section-header__title"]}
      >
        {title}
        {titleSub && (
          <span className={styles["section-header__title--sub"]}>
            {titleSub}
          </span>
        )}
      </h2>
    </header>
  );
};
