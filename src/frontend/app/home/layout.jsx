import styles from "./home.module.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import { cookies } from "next/headers";
// import dotenv from 'dotenv';

const HomeLayout = async ({ children }) => {
  const cookieStore = await cookies();
  const isLogined = cookieStore.has('auth_token');

  return (
    <div className={styles.home}>
      <Navbar islogined={isLogined} />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
