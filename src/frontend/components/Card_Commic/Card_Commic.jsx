'use client';
import styles from './Card_Commic.module.css';
import { useRouter } from 'next/navigation';

const Commic = ({ infor }) => {
    const { id = '-1', title = 'waiting for update', cover = '/Story_Hub_White.png', detail = 'waiting for update', ref = '#' } = infor;

    const route = useRouter();

    const handleClick = () => {
        document.cookie = `comic=${encodeURIComponent(JSON.stringify({
            comicId: infor.id,
            comicName: infor.title,
            cover: infor.cover,
            updated: infor.update
        }))}; path=/; max-age=3000`;

        route.push(infor.ref);
    };

    return (
        <div className={styles.commic}>
            <img className={styles.cover} src={cover} onClick={handleClick}></img>
            <p className={styles.title} onClick={handleClick}> {title} </p>
            <p className={styles.detail}> Số chương: {detail} </p>
        </div>
    )
}

export default Commic;