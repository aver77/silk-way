import React from "react";

import Image from "next/image";
import { allContacts } from "./defaultData";

import { CONTACTS } from "@/shared/constants/anchors";

import lanternsFooter from "@/shared/assets/img/lanternsFooter.png";
import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div id={CONTACTS} className={styles.container}>
            <div className={styles.iframeSection}>
                <iframe
                    title={"yandex map"}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b630e30c8acc64cbdd322c2e3330e7da43b6ab5e0f65b7fdb5cf2e831b96dac&amp;source=constructor"
                    className={styles.iframe}
                ></iframe>
            </div>
            <div className={styles.contactsSection}>
                <div className={styles.contactsImgWrapper}>
                    <Image className={styles.contactsImg} src={lanternsFooter} alt={"lanterns"} />
                    <div className={styles.mask} />
                </div>
                <div className={styles.contactsInfo}>
                    <h2 className={styles.contactsTitle}>Контакты</h2>
                    <div className={styles.contactsWrapper}>
                        {allContacts.map(({ link, imgSrc, name }) => (
                            <a key={name} href={link} target="_blank" rel="noreferrer noopener">
                                <div className={styles.contactLinkContent}>
                                    <Image
                                        className={styles.contactImg}
                                        src={imgSrc}
                                        alt={"contact img"}
                                    />
                                    <span>{name}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
