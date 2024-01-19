import React, { FC } from "react";

import { Button, SizesEnum } from "@/shared/ui";
import { IProduct } from "@/shared/constants/products";
import useCartStore from "@/shared/lib/store/cartStore";

import cx from "classnames";
import styles from "./BuyProduct.module.scss";

interface IBuyProduct {
    product: IProduct;
    buyBtnSize?: SizesEnum;
    className?: string;
}

const BuyProduct: FC<IBuyProduct> = ({ product, className, buyBtnSize }) => {
    const { price, title } = product || {};

    const { isProductInCart, addProduct } = useCartStore((state) => state);

    if (!price) return null;

    return (
        <div className={cx(styles.buyContainer, className)}>
            <span>{price}</span>
            <Button
                disabled={isProductInCart(title)}
                onClick={() => addProduct(product)}
                size={buyBtnSize ?? SizesEnum.SMALL}
            >
                В корзину
            </Button>
        </div>
    );
};

export default BuyProduct;
