import React, { FC, RefObject } from "react";
import Image from "next/image";

import WithModal from "@/components/HOCs/withModal";
import BuyProduct from "@/components/productCard/buyProduct";
import { SizesEnum } from "@/shared/ui";
import { IProduct } from "@/shared/constants/products";

import cx from "classnames";
import styles from "./Modal.module.scss";

interface IModal {
    product: IProduct;
    closeModal: () => void;
    ref?: RefObject<HTMLDivElement>;
}
const Modal: FC<IModal> = ({ product, closeModal, ref }) => {
    const { title, description, src } = product || {};

    return (
        <WithModal closeModal={closeModal}>
            <div className={styles.container} ref={ref}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={src} alt={"product image"} />
                </div>
                <div className={styles.infoSection}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={cx(styles.description, styles.text)}>{description}</p>
                    <BuyProduct
                        product={product}
                        buyBtnSize={SizesEnum.MEDIUM}
                        className={styles.text}
                    />
                </div>
            </div>
        </WithModal>
    );
};

export default Modal;
