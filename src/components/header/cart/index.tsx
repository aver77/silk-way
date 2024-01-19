"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import useBlockGlobalStroll from "@/shared/lib/hooks/useBlockGlobalScroll";

import basket from "@/shared/assets/svg/basket.svg";
import styles from "./Cart.module.scss";

const Badge = dynamic(() => import("./badge"), { ssr: false });
const CartBody = dynamic(() => import("./cartBody"), { ssr: false });

const Cart = () => {
    const [cartOpened, setCartOpened] = useState(false);

    useBlockGlobalStroll(cartOpened);

    return (
        <div className={styles.basketContainer}>
            <Image
                onClick={() => setCartOpened((prevOpened) => !prevOpened)}
                className={styles.basketImg}
                src={basket}
                alt={"basket"}
            />
            <Badge />
            {cartOpened && <CartBody closeCart={() => setCartOpened(false)} />}
        </div>
    );
};

export default Cart;
