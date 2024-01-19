"use client";

import React from "react";
import useCartStore from "@/shared/lib/store/cartStore";

import styles from "./Badge.module.scss";

const Badge = () => {
    const { getProductsCount } = useCartStore((state) => state);
    const productsCount = getProductsCount();

    if (productsCount <= 0) return null;

    return <div className={styles.badge}>{productsCount}</div>;
};

export default Badge;
