'use client';

import { useState } from "react";
import Link from "next/link";

import styles from "./Dropdown.module.css"

const DropdownItem = ({title, content}) => {

    const [isOpen, setOpen] = useState(false);

    return (

        <div className= {styles.dropdownItem}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className= {styles.button}> {title} </button>
            <div className={styles.dropMenu}>
                {isOpen && (
                    <div className={styles.item}>

                        {content.map((item) => (
                            <div key = {item.title}>
                                {
                                    (() =>{
                                        if (!item.href) {
                                                if (process.env.NODE_ENV === "development") {
                                                    console.warn ("Miss href in item of Dropdown");
                                                }
                                                return  (
                                                    <span style={{ color: "gray", fontStyle: "italic" }}>
                                                        {item.title}
                                                    </span>
                                                );
                                        }
                                        return <Link href={item.href}>{item.title}</Link>;
                                    })()}
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>

    )

}

export default DropdownItem