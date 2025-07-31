import styles from './Chat.module.css';
import Link from 'next/link';

export default function Chat() {
  return (
    <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
            <i className="fa-solid fa-comment"></i>
            <h1>Bình luận</h1>
        </div>
        <div className={styles.chatBox}>
            <input className={styles.chatInput} type="text" placeholder="Nhập bình luận của bạn..." />
            <button className={styles.sendButton}type="submit">Gửi</button>
        </div>


    </div>
  );
}