import React from 'react';
import Link from 'next/link';
import styles from './SidebarItem.module.css';

export const SidebarItem = ({ icon, title, isActive = false, href = '', setCollapsed }) => {
  return (
    <Link href={href} className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <span>{title}</span>
    </Link>
  );
};
