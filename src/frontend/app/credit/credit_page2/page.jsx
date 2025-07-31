import Link from "next/link";
import styles from "./credit_page2.module.css";

export default function CreditPage2() {
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
          <Link href="/home" className={styles["home-link"]}><i className="fas fa-home"></i> Trang chủ</Link> / <Link href="/credit/credit_page1" className={styles["breadcrumb-link"]}>Nạp Token</Link>
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
        <div className={styles["success-box"]}>
          {/* SVG Confetti Background */}
          <svg className={styles["confetti-svg"]} width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="30" cy="30" r="4" fill="#7F8CAA"/>
            <circle cx="370" cy="60" r="3" fill="#b8c6e0"/>
            <circle cx="200" cy="20" r="5" fill="#B8CFCE"/>
            <circle cx="100" cy="80" r="3" fill="#EAEFEF"/>
            <circle cx="320" cy="120" r="4" fill="#7F8CAA"/>
            <circle cx="60" cy="160" r="2.5" fill="#b8c6e0"/>
            <circle cx="350" cy="180" r="3.5" fill="#B8CFCE"/>
          </svg>
          <div className={styles["check-icon"]} role="img" aria-label="Thành công">✔</div>
          <p className={styles["success-text"]}>Giao dịch thành công</p>
          <p className={styles["success-desc"]}>Bạn đã nạp Token thành công vào tài khoản của mình.<br/> Cảm ơn bạn đã sử dụng dịch vụ của StoryHub!</p>
          <div className={styles["success-actions"]}>
            <Link href="/home" className={styles.btn}>Quay lại Trang chủ</Link>
            <a href="#" className={`${styles.btn} ${styles["btn-outline"]}`}>Xem chi tiết giao dịch</a>
          </div>
        </div>
      </main>
    </>
  );
}