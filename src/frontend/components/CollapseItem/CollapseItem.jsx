import React, { useState } from 'react';
import styles from './CollapseItem.module.css';

export const CollapseItems = ({ icon, title, items }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <div className={styles.wrapper}>
      <div className={styles.collapseHeader} onClick={handleToggle}>
        <div className={styles.titleContainer}>
          {icon}
          <span className={styles.title}>{title}</span>
        </div>
        <span
          className={styles.chevron}
          style={{ transform: open ? 'rotate(-180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </div>

      {open && (
        <div className={styles.collapse}>
          {items.map((item, index) => (
            <div key={index} className={styles.itemWrapper}>
              <span className={styles.itemText}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
