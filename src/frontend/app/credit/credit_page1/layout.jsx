import Link from "next/link";
import styles from "./credit_page1.module.css";

export default function CreditPage1Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles["credit-page"]}>
        {children}
      </div>
    </div>
  );
}
