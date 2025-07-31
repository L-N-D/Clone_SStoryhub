'use client';
import styles from "./RegisterButton.module.css";
import { useRouter } from "next/navigation";

const RegisterButton = () => {

    const router = useRouter();
    const handleClick = () => {

        router.push('./register');
        router.refresh();

    }

    return (

        <button className = {styles.btn} onClick={handleClick}>
            Register
        </button>

    )

}

export default RegisterButton;