'use client';
import { SidebarItem } from "./SidebarItem";
import { SidebarMenu } from "./SidebarMenu";
import { CollapseItems } from "../CollapseItem/CollapseItem";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import styles from './Sidebar.module.css';


const Sidebar = () => {

    const router = useRouter();

    return (

        <aside className={styles.sidebar}>
            <img className={styles.logo} src="/Story_Hub_White.png" alt="Logo" />
            <SidebarItem title={"Home"} icon={<i className="fa-solid fa-house"></i>} isActive={router.pathname === '/'} href="/admin/home" />
            <SidebarMenu title={"Main menu"}>
                <SidebarItem title={"Users"} href="/admin/users"></SidebarItem>
                <SidebarItem title={"Authors"} href="/admin/authors"></SidebarItem>
                <SidebarItem title={"Commics"} href="/admin/commics"></SidebarItem>
            </SidebarMenu>
            <SidebarMenu title={"Tasks && Tools"}>
                <SidebarItem title={"Reports"}></SidebarItem>
                <SidebarItem title={"Pending Submissions"}></SidebarItem>
                <SidebarItem title={"Export"}></SidebarItem>
            </SidebarMenu>
        </aside>        

    )

}

export default Sidebar;