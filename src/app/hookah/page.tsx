import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";

const ProductModule = dynamic(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Страница с товарами - кальяны, табаки"
};

export default function Hookah() {
    return <ProductModule key={ProductTypes.HOOKAH} type={ProductTypes.HOOKAH} />;
}
