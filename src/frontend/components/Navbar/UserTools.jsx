'use client';
import styles from './Navbar.module.css';
import { useState } from 'react';
import DropdownList from '../Dropdown/DropdownList';

const UserTools = () => {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <div className={styles.user} onClick={handleClick}> 
            <i className="fa-solid fa-user"></i> 

        </div>
    );

}

export default UserTools;