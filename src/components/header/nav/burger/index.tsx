import React, { FC, useRef } from "react";
import Image from "next/image";

import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import Logo from "@/components/header/logo";

import closeImg from "@/shared/assets/svg/close.svg";
import styles from "./Burger.module.scss";

interface IBurger {
    closeBurger: () => void;
    navigation: JSX.Element;
}

const Burger: FC<IBurger> = ({ closeBurger, navigation }) => {
    const burgerRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(burgerRef, closeBurger);

    return (
        <div ref={burgerRef} className={styles.container}>
            <div className={styles.header}>
                <Logo />
                <Image
                    className={styles.closeImg}
                    onClick={closeBurger}
                    src={closeImg}
                    alt={"close img"}
                />
            </div>
            <div className={styles.navigationWrapper}>{navigation}</div>
        </div>
    );
};

export default Burger;
