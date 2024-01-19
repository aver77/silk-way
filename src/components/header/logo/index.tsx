import React from "react";
import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link href={"/"} className={styles.logoContainer}>
            <p>SILK 絲綢</p>
            <p>WAY 之路</p>
        </Link>
    );
};

export default Logo;
