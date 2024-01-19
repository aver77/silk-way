import Image from "next/image";
import Stars from "@/shared/ui/stars";

import yandexLogo from "@/shared/assets/svg/yandexLogo.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <span className={styles.policyText}>
                Privacy Policy @Silk Way - copyright {new Date().getFullYear()}
            </span>
            <div className={styles.rateContainer}>
                <Image className={styles.rateImage} src={yandexLogo} alt={"yandex logo"} />
                <div className={styles.starsWrapper}>
                    <Stars className={styles.stars} />
                </div>
                <div className={styles.mask} />
            </div>
        </footer>
    );
};
export default Footer;
