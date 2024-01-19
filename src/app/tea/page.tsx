import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";

const ProductModule = dynamic(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Страница с товарами - китайский чай"
};

export default function Tea() {
    return <ProductModule key={ProductTypes.TEA} type={ProductTypes.TEA} />;
}
