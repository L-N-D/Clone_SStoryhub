import styles from "./weekly.module.css"
import Navbar from "../../../components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function HomeLayout ({children}) {

    return (
        <div className= {styles.home}>
            <Navbar />
            <div className={styles.main}>
                {children}
            </div>
            <Footer />

        </div>

    )

}