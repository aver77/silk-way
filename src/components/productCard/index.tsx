"use client";

import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { IProduct } from "@/shared/constants/products";
import BuyProduct from "@/components/productCard/buyProduct";
import { Button, TypesEnum } from "@/shared/ui";

import styles from "./Card.module.scss";

const Modal = dynamic(() => import("./modal"));

type TCard = IProduct;
const Card: FC<TCard> = (product) => {
    const { title, src, description } = product || {};
    const [modal, setModal] = useState<JSX.Element | null>(null);

    const ModalComponent = <Modal product={product} closeModal={() => setModal(null)} />;

    return (
        <div className={styles.container}>
            <Image
                onClick={() => setModal(ModalComponent)}
                className={styles.image}
                src={src}
                alt={"card image"}
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{description}</p>
            <Button
                onClick={() => setModal(ModalComponent)}
                className={styles.btn}
                variant={TypesEnum.SECONDARY}
            >
                Узнать подробнее ➤
            </Button>
            <BuyProduct product={product} />
            {modal}
        </div>
    );
};
export default Card;
