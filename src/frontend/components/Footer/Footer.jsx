import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer (){
    return(
        <div className={styles.Footer}>   
            <p>© 2025 MangaNest | A Web Application Project by Group 04</p>
            <p>Faculty of Information Technology, University of Science – VNU-HCM</p>
            <p>For educational purposes only. All manga content belongs to their respective owners</p>
        </div>
    );
} 