"use client";

import React, { FC, useRef } from "react";
import Image from "next/image";

import { Button, SizesEnum } from "@/shared/ui";
import useCartStore from "@/shared/lib/store/cartStore";
import extractAllDigitsFromString from "@/shared/lib/utils/extractAllDigitsFromString";
import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import { ROUBLE_SIGN as SEPARATOR } from "@/shared/constants/signs";
import telAttrs from "@/shared/constants/telAttrs";

import closeImg from "@/shared/assets/svg/close.svg";
import trashImg from "@/shared/assets/svg/trash.svg";
import truckImg from "@/shared/assets/svg/truck.svg";
import styles from "./CartBody.module.scss";

interface ICartBody {
    closeCart: () => void;
}

const CartBody: FC<ICartBody> = ({ closeCart }) => {
    const { products, removeProduct } = useCartStore((state) => state);

    const cartRef = useRef<HTMLDivElement | null>(null);
    const closeCartRef = useRef(closeCart);
    closeCartRef.current = closeCart;

    const isCartEmpty = products.length <= 0;

    const fullCartPrice = products.reduce((acc, currV) => {
        const price = currV.price;
        if (price) {
            return acc + +extractAllDigitsFromString(price.split(SEPARATOR)[0]);
        } else {
            return acc;
        }
    }, 0);

    useClickOutside(cartRef, closeCartRef.current);

    const cartBasis = (
        <>
            <div className={styles.cartItemsWrapper}>
                {products.map(({ title, src, price }) => {
                    return (
                        <div className={styles.cartItem} key={title}>
                            <div className={styles.cartItemSection}>
                                <Image
                                    className={styles.itemImage}
                                    src={src}
                                    alt={"item img"}
                                    fetchPriority={"low"}
                                    loading={"lazy"}
                                />
                                <span className={styles.itemTitle}>{title}</span>
                            </div>
                            <div className={styles.cartItemSection}>
                                <span>{price}</span>
                                <Image
                                    onClick={() => removeProduct(title)}
                                    className={styles.removeItemImg}
                                    src={trashImg}
                                    alt={"trash img"}
                                    fetchPriority={"low"}
                                    loading={"lazy"}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.orderWrapper}>
                <div className={styles.orderInfo}>
                    <span>Стоимость заказа:</span>
                    <span>от {fullCartPrice}₽</span>
                </div>
                <a className={styles.orderWrapperLink} {...telAttrs}>
                    <Button className={styles.orderBtn} size={SizesEnum.LARGE}>
                        ЗАКАЗАТЬ
                    </Button>
                </a>
            </div>
        </>
    );

    const cartEmpty = (
        <div className={styles.emptyCartWrapper}>
            <div className={styles.emptyCartSubWrapper}>
                <Image className={styles.truckImg} src={truckImg} alt={"delivery truck"} />
                <span className={styles.freeDelivery}>Бесплатная доставка!</span>
                <span className={styles.freeDeliveryFrom}>при заказе от 1000₽</span>
            </div>
        </div>
    );

    return (
        <div ref={cartRef} className={styles.cartContainer}>
            <div className={styles.cartSubContainer}>
                <div className={styles.infoSection}>
                    <span className={styles.amountOfGoods}>
                        {isCartEmpty ? "Товары не выбраны" : `Выбрано товаров: ${products.length}`}
                    </span>
                    <Image
                        className={styles.closeImg}
                        onClick={closeCart}
                        src={closeImg}
                        alt={"close icon"}
                    />
                </div>
                <div className={styles.extraSale}>Скидка 10% на первый заказ!</div>
                {!isCartEmpty ? cartBasis : cartEmpty}
            </div>
        </div>
    );
};

export default CartBody;
