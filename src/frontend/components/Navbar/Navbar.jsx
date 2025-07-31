import styles from "./Navbar.module.css"
import Link from "next/link";
import { cookies } from "next/headers";

import DropdownList from "../Dropdown/DropdownList";
import LogOutButton from "../LogOutButton/LogOutButton";
import LogInButton from "../LogInButton/LogInButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import SearchBar from "../SearchBar/SearchBar";

const user = [

    {
        type: 'drop', title: 'Thể loại', content: [
            { title: 'Action', href: '' },
            { title: 'Detective', href: '' },
            { title: 'Education', hred: '' }
        ]
    },
    {
        type: 'drop', title: 'Xếp hạng', content: [
            { title: 'Top tuần', href: '../home' },
            { title: 'Top tháng', href: '' }
        ]
    },
    { type: 'nondrop', title: 'Nạp Token', href: '../credit/credit_page1' },
    { type: 'nondrop', title: 'Đăng truyện', href: '../upload' },
    { type: 'nondrop', title: 'Bộ lọc', href: '../filter '   }

]

const Navbar = async ({ islogined }) => {

    let listData = user;
    const cookie = await cookies();
    const logined = cookie.has('auth_token');

    return (

        <header className={styles.header}>

            <Link href="/home" prefetch={true} className={styles.logoLink}>
                <img className={styles.logo} src="/Story_Hub_Black.png" />
            </Link>
            <div className={styles.header_tools}>
                <div className={styles.feature}>
                    <DropdownList listData={listData} />
                </div>
                <SearchBar/>
                <div>
                    {islogined || logined ? <LogOutButton /> : <>
                        <LogInButton /> <RegisterButton />
                    </>}
                </div>
            </div>

        </header>

    )


}

export default Navbar