import React from 'react';
import styles from './SidebarMenu.module.css';

export const SidebarMenu = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  );
};
