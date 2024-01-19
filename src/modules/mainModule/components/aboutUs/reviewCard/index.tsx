import React, { FC } from "react";
import Image from "next/image";

import { IReview } from "../defaultData";
import Stars from "@/shared/ui/stars";

import cx from "classnames";
import styles from "./ReviewCard.module.scss";

type TReviewCard = IReview & { withStars: boolean };

const ReviewCard: FC<TReviewCard> = ({ name, src, withStars, date, reviewText }) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoSection}>
                <Image className={styles.image} src={src} alt={"card image"} />
                <span className={cx(styles.text, styles.name)}>{name}</span>
            </div>
            <div className={styles.extraInfoSection}>
                {withStars && (
                    <div className={styles.starsContainer}>
                        <Stars />
                    </div>
                )}
                <span className={styles.text}>{date}</span>
            </div>
            <p className={cx(styles.text, styles.reviewText)}>{reviewText}</p>
        </div>
    );
};
export default ReviewCard;
