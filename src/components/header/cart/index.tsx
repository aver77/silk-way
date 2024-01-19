"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";

import Badge from "./badge";
import useBlockGlobalStroll from "@/shared/lib/hooks/useBlockGlobalScroll";

import basket from "@/shared/assets/svg/basket.svg";
import styles from "./Cart.module.scss";

const CartBody = React.lazy(() => import("./cartBody"));

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
            {cartOpened && (
                <Suspense>
                    <CartBody closeCart={() => setCartOpened(false)} />
                </Suspense>
            )}
        </div>
    );
};

export default Cart;
