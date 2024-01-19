import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ABOUT_US, CONTACTS, DELIVERY, PRODUCTS } from "@/shared/constants/anchors";
import Burger from "@/components/header/nav/burger";

import burgerImage from "@/shared/assets/svg/burger.svg";
import styles from "./Nav.module.scss";

const menuItems = [
    {
        title: "Продукция",
        anchor: PRODUCTS
    },
    {
        title: "О нас",
        anchor: ABOUT_US
    },
    {
        title: "Контакты",
        anchor: CONTACTS
    },
    {
        title: "Доставка",
        anchor: DELIVERY
    }
];

const Nav = () => {
    const [burgerOpened, setBurgerOpened] = useState(false);

    const nav = (
        <nav className={styles.nav}>
            <ul className={styles.menuUl}>
                {menuItems.map(({ title, anchor }) => (
                    <li className={styles.menuLi} key={title}>
                        <Link href={"#" + anchor}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

    return (
        <>
            {nav}
            <Image
                onClick={() => setBurgerOpened(true)}
                className={styles.burgerImg}
                src={burgerImage}
                alt={"burger menu"}
            />
            {burgerOpened && <Burger closeBurger={() => setBurgerOpened(false)} navigation={nav} />}
        </>
    );
};

export default Nav;
