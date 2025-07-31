import styles from "./credit_page3.module.css";

export default function CreditPage3Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles["credit-page"]}>
        {children}
      </div>
    </div>
  );
}
