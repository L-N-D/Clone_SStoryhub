'use client';

import DropdownItem from "./DropdownItem";
import styles from "./Dropdown.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

// const Router = userRouter();

const DropdownList = ({ listData }) => {
  const router = useRouter();
  return (
    <div className={styles.dropdownlist}>
      {listData.map((item) => {

        switch (item.type) {

          case "drop":
            return (
              <DropdownItem
                key={item.title}
                title={item.title}
                content={item.content}
              />
            );

          case "nondrop":
            return (
              <div key={item.title} className={styles.non_drop_item}>
{typeof item.title === 'string' ? (
  <Link href={item.href}>{item.title}</Link>
) : (
  item.title
)}

              </div>
            )

          case "redirect-button":
            return (
              <Button key={item.title} label = {item.title} onClick={() => router.push(item.href)} className={item.className}></Button>
            )
          default:
            return null;
        }

      })}
    </div>
  );
};

export default DropdownList;
