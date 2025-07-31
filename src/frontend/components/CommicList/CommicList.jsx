import styles from './CommicList.module.css';
import Commic from '../Card_Commic/Card_Commic';

const ShowCommicList = ({list}) => {
    return (
        <div className={styles.panel}>
            {list.map((item, index) => (
                <div key={index}>
                    <Commic infor={item} />
                </div>
            ))}
        </div>
    )
}

export default ShowCommicList;