'use client';
import styles from './ChapterList.module.css';
import { useState } from 'react';

const ChapterList = ({ chapters }) => {

    const [isOpen, setOpen] = useState(false);
    const handleClick = () => { setOpen(!isOpen) }

    return (

        <div className={styles.chapter}>
            <div className={styles.subTitle} onClick={handleClick}>
                <span>Danh sách chương </span>
            </div>
            {isOpen && (
                <ul className={styles.list}>
                    {chapters.map((chap, index) => (
                        <li className={styles.chap} key={index}>
                            <span> Chương {chap.chapterId}:</span>
                            <span>{chap.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ChapterList;