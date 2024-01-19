"use client";

import React, { FC } from "react";
import Link from "next/link";

import { ProductTypes } from "@/shared/data/enums";
import Card from "@/components/productCard";
import { getProducts } from "@/shared/constants/products";

import styles from "./Product.module.scss";

interface IProductComponent {
    title: string;
    type: ProductTypes;
}

const Product: FC<IProductComponent> = ({ title, type }) => {
    const products = getProducts(type);

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <Link href={type} className={styles.link}>
                    Смотреть все
                </Link>
            </div>
            <div className={styles.productsWrapper}>
                {products.map((product) => {
                    return <Card key={product.title} {...product} />;
                })}
            </div>
        </div>
    );
};

export default Product;
