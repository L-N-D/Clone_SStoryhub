import Link from "next/link";
import styles from "./credit_page3.module.css";

export default function CreditPage3() {
  // Example user data, replace with real data fetching logic if needed
  const user = {
    name: "Việt Nguyễn Nam",
    id: "#23127517",
    avatar: "/NamViet.png"
  };

  return (
    <>
      <header className={styles.navbar}>
        <nav className={styles["breadcrumb-nav"]} aria-label="breadcrumb">
          <Link href="/home" className={styles["home-link"]}>
            <i className="fas fa-home"></i> Trang chủ
          </Link>{" "}
          /{" "}
          <Link href="/credit/credit_page1" className={styles["breadcrumb-link"]}>
            Nạp Token
          </Link>
        </nav>
        <div className={styles["user-account"]}>
          <img src={user.avatar} alt="avatar" className={styles["user-avatar"]} />
          <Link href="/profile" className={styles["user-name"]}>
            {user.name}
          </Link>
          <span className={styles["user-id"]}>{user.id}</span>
        </div>
      </header>

      <main className={styles.main} role="main">
        <div className={styles["error-box"]}>
          <div className={styles["error-icon"]} role="img" aria-label="Thất bại">
            <i className="fas fa-times-circle"></i>
          </div>
          <p className={styles["error-text"]}>Giao dịch thất bại</p>
          <p className={styles["error-desc"]}>
            Rất tiếc, giao dịch của bạn không thể hoàn thành.<br />
            Vui lòng kiểm tra lại thông tin thanh toán và thử lại.
          </p>
          <div className={styles["error-actions"]}>
            <Link href="/credit/credit_page1" className={`${styles.btn} ${styles["btn-primary"]}`}>
              Thử lại
            </Link>
            <Link href="/home" className={`${styles.btn} ${styles["btn-outline"]}`}>
              Quay lại Trang chủ
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}