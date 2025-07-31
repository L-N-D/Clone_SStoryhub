'use client';

import styles from './LogOutButton.module.css'
import { useRouter } from "next/navigation.js";

const LogOutButton = () => {

    const router = useRouter();

    const handleClick = async (event) => {

        event.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logout`, {
            method: 'POST', headers: {'Content-type': 'application/json'}, credentials: 'include'
        });

        const result = await res.json();

        if (res.ok){
            router.push('/home');
            router.refresh();
        }

    }

    return (

        <button className={styles.btn} onClick={handleClick}>
            Log out
        </button>

    )

}

export default LogOutButton;