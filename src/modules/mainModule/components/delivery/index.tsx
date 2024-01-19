import React from "react";
import { DELIVERY } from "@/shared/constants/anchors";
import telAttrs from "@/shared/constants/telAttrs";

import styles from "./Delivery.module.scss";

const Delivery = () => {
    return (
        <div id={DELIVERY} className={styles.container}>
            <h2 className={styles.title}>Доставка</h2>
            <p className={styles.description}>
                Для оформления заказа, бронирования столика и по любым другим вопросам можно
                воспользоваться любой из наших социальных сетей в разделе {"Контакты"}. Не
                стесняйтесь и звоните нам по номеру телефона, мы всегда рады вашему звонку!
            </p>
            <a className={styles.mobileNumber} {...telAttrs}>
                +7 (900) 962-47-41
            </a>
        </div>
    );
};

export default Delivery;
