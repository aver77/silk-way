import React, { FC } from "react";
import { FaStar } from "react-icons/fa";

import cx from "classnames";

import styles from "./Stars.module.scss";

interface IStars {
    count?: number;
    className?: string;
}

const Stars: FC<IStars> = ({ count = 5, className }) => {
    return new Array(5)
        .fill(undefined)
        .map((_, index) => (
            <FaStar
                className={cx(index < count ? styles.gold : styles.gray, className)}
                key={index}
            />
        ));
};

export default Stars;
