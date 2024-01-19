"use client";

import React, { FC, useState } from "react";
import Card from "@/components/productCard";
import { ProductTypes } from "@/shared/data/enums";
import { getProducts, teaFilters } from "@/shared/constants/products";
import Input from "@/shared/ui/input";
import Select from "@/shared/ui/select";
import { ALL_PRODUCTS, checkIfStrIncludesStr } from "@/modules/productModule/defaultData";

import styles from "./Product.module.scss";

interface IProductModule {
    type: ProductTypes;
}

const ProductModule: FC<IProductModule> = ({ type }) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectValue, setSelectValue] = useState(ALL_PRODUCTS);

    const isTea = type === ProductTypes.TEA;

    const foundProducts = getProducts(type).filter(
        ({ title, description }) =>
            checkIfStrIncludesStr(title, searchValue) ||
            checkIfStrIncludesStr(description, searchValue)
    );

    const filteredProducts =
        selectValue === ALL_PRODUCTS
            ? foundProducts
            : foundProducts.filter((product) => product.filter === selectValue);

    return (
        <div className={styles.container}>
            <div className={styles.searchersWrap}>
                <Input
                    placeholder={`Поиск по ${isTea ? "чаям" : "кальянам"}...`}
                    className={styles.input}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Select
                    value={selectValue}
                    onChange={(e) => {
                        console.log(e);
                        setSelectValue(e.target.value);
                    }}
                    options={isTea ? [ALL_PRODUCTS, ...teaFilters] : [ALL_PRODUCTS]}
                />
            </div>
            <div className={styles.productsWrapper}>
                {filteredProducts.map((product) => (
                    <Card key={product.title} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductModule;
