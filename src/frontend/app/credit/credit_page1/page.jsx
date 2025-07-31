import Link from "next/link";
import styles from "./credit_page1.module.css";

export default function CreditPage1() {
  // Example user data, replace with real data fetching logic
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

      <main className={styles.main}>
        <div className={styles["checkout-container"]}>
          <div className={styles["left-pane"]}>
            <div className={styles["payment-logo"]}>
              <img src="/Story_Hub_White.png" alt="StoryHub Logo" />
              <h1>StoryHub Payment</h1>
            </div>
          </div>
          <div className={styles["form-pane"]}>
            <form className={styles["checkout-form"]} autoComplete="on">
              <div className={styles["input-grid"]}>
                <div className={styles["input-group"]}>
                  <label htmlFor="user-id">ID của bạn</label>
                  <input id="user-id" name="user-id" type="text" placeholder="Hãy nhập ID của bạn" required />
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="user-email">Gmail của bạn</label>
                  <input id="user-email" name="user-email" type="email" placeholder="Hãy nhập gmail của bạn" required />
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="user-username">Tên đăng nhập</label>
                  <input id="user-username" name="user-username" type="text" placeholder="Hãy nhập tên đăng nhập của bạn" required />
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="user-phone">Số điện thoại</label>
                  <input id="user-phone" name="user-phone" type="tel" placeholder="Hãy nhập số điện thoại của bạn" required />
                </div>
              </div>

              <p className={styles["section-label"]}>Các phương pháp thanh toán:</p>
              <div className={styles["payment-methods"]}>
                <img src="/visa.png" alt="VISA" tabIndex={0} />
                <img src="/napas.png" alt="Napas" tabIndex={0} />
                <img src="/momo-logo.png" alt="Momo" tabIndex={0} />
              </div>

              <p className={styles["section-label"]}>Quy đổi karma coin:</p>
              <div className={styles["exchange-box"]}>
                <p>100 coin = 10.000 đ</p>
                <p>200 coin = 20.000 đ</p>
                <p>600 coin = 50.000 đ</p>
                <p>1350 coin = 100.000 đ</p>
                <p>3000 coin = 200.000 đ</p>
                <p>10000 coin = 500.000 đ</p>
              </div>

              <div className={styles["form-actions"]}>
                <button type="submit" className={styles["submit-btn"]}>Nạp Karma Coin</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}