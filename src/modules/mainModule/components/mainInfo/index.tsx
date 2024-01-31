import React from "react";
import Image from "next/image";

import telAttrs from "@/shared/constants/telAttrs";
import { Button } from "@/shared/ui";

import lanterns from "@/shared/assets/img/lanterns.png";
import styles from "./MainInfo.module.scss";

const MainInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image className={styles.lanternsImg} src={lanterns} alt={"lanterns"} />
                <div className={styles.mask} />
            </div>
            <div className={styles.infoSection}>
                <h1 className={styles.deliveryInfo}>Доставка кальянов и китайского чая</h1>
                <p className={styles.aboutInfo}>
                    Silk way & lounge Воронеж - место где время останавливается ,<br /> а самый
                    напряженный день становится размеренным.
                </p>
                <Button className={styles.orderBtn}>
                    ЗАКАЗАТЬ
                    <a {...telAttrs} />
                </Button>
            </div>
        </div>
    );
};

export default MainInfo;
