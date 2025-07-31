import React from 'react';
import styles from './RenderCell.module.css';

export const RenderCell = ({ user, columnKey }) => {
    const { avatar = '/Story_Hub_White.png' } = user;
    const cellValue = user[columnKey];

    switch (columnKey) {
        case 'name':
            return (
                <div className={styles.cellContainer}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{cellValue}</div>
                        <div className={styles.userEmail}>{user.email}</div>
                    </div>
                </div>
            );

        case 'role':
            return (
                <div>
                    <div className={styles.role}>{cellValue}</div>
                </div>
            );

        case 'status':
            return (
                <span className={`${styles.badge} ${styles[`status_${user.status}`]}`}>
                    {cellValue}
                </span>
            );

        case 'actions':
            return (
                <div className={styles.actions}>
                    <button className={styles.actionBtn} onClick={() => console.log('View user', user.id)}>View</button>
                    <button className={styles.actionBtn} onClick={() => console.log('Edit user', user.id)}>Edit</button>
                    <button className={styles.actionBtn} onClick={() => console.log('Delete user', user.id)}>Delete</button>
                </div>
            );

        default:
            return <span>{cellValue}</span>;
    }
};
