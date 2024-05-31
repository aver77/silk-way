import React from "react";
import Image from "next/image";

import { defaultReviews, aboutText } from "./defaultData";
import ReviewCard from "./reviewCard";

import { ABOUT_US } from "@/shared/constants/anchors";

import _2gisLogo from "@/shared/assets/svg/2gisLogo.svg";
import yandexLogo from "@/shared/assets/svg/yandexLogo.svg";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    return (
        <div id={ABOUT_US} className={styles.container}>
            <h2 className={styles.title}>О нас</h2>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutText}>
                    {aboutText.split("\n").map((el) => (
                        <span key={el}>{el}</span>
                    ))}
                </p>
                <div className={styles.aboutReviews}>
                    <p className={styles.reviewsTitle}>Больше отзывов о нас:</p>
                    <a
                        href="https://2gis.ru/voronezh/firm/70000001074756792/tab/reviews?m=39.24072%2C51.686711%2F15.54"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Image
                            className={styles.image}
                            src={_2gisLogo}
                            alt={"2gis"}
                            loading={"lazy"}
                            fetchPriority={"low"}
                        />
                    </a>
                    <a
                        href="https://yandex.ru/maps/org/silk_way_tea_lounge/19904677575/?ll=39.218487%2C51.686830&z=17"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Image
                            className={styles.image}
                            src={yandexLogo}
                            alt={"yandex"}
                            loading={"lazy"}
                            fetchPriority={"low"}
                        />
                    </a>
                </div>
            </div>
            <div className={styles.reviewsContainer}>
                {defaultReviews.map(({ name, date, src, reviewText }) => (
                    <ReviewCard
                        key={"_" + name + date}
                        name={name}
                        date={date}
                        src={src}
                        reviewText={reviewText}
                        withStars={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
