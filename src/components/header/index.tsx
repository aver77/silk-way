"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Cart from "@/components/header/cart";
import Nav from "@/components/header/nav";
import Logo from "@/components/header/logo";
import extractAllDigitsFromString from "@/shared/lib/utils/extractAllDigitsFromString";

import cx from "classnames";
import cssVars from "@/shared/styles/vars/dimensions.module.scss";
import styles from "./Header.module.scss";

const Header = () => {
    const [headerStyle, setHeaderStyle] = useState("");

    const headerStyleRef = useRef(headerStyle);
    headerStyleRef.current = headerStyle;

    const pathname = usePathname();
    const isMainPage = pathname === "/";

    useEffect(() => {
        if (isMainPage) {
            const scrollHandler = () => {
                const scrollY = window.scrollY;

                if (scrollY > +extractAllDigitsFromString(cssVars.mainInfoSectionHeight)) {
                    setHeaderStyle(styles.headerFullBg);
                } else if (scrollY > 0) {
                    setHeaderStyle(styles.headerAlphaBg);
                } else if (headerStyleRef.current !== styles.headerTransparent) {
                    setHeaderStyle(styles.headerTransparent);
                }
            };

            document.addEventListener("scroll", scrollHandler);

            return () => {
                document.removeEventListener("scroll", scrollHandler);
            };
        }
    }, [isMainPage]);

    return (
        <header
            className={cx(
                styles.container,
                isMainPage
                    ? [styles.fixedContainer, headerStyle].join(" ")
                    : [styles.stickyContainer, styles.headerFullBg].join(" ")
            )}
        >
            <Logo />
            <Nav />
            <Cart />
        </header>
    );
};
export default Header;
