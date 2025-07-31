'use client';

import styles from './LogInButton.module.css';
import { useRouter } from 'next/navigation';

const LogInButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
    router.refresh();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      Log in
    </button>
  );
};

export default LogInButton;
