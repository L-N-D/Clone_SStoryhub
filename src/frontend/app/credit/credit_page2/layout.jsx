import styles from "./credit_page2.module.css";

export default function CreditPage2Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles["credit-page"]}>
        {children}
      </div>
    </div>
  );
}
