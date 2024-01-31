import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";
import { sharedOpenGraph } from "@/app/metaUtil";

const ProductModule = dynamic(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Весь ассортимент кальянов, табаков, углей, плиток в аренду",
    openGraph: {
        ...sharedOpenGraph,
        url: "https://silk-way.shop/hookah",
        description: "Весь ассортимент кальянов, табаков, углей, плиток в аренду",
        images: ["../../shared/assets/img/hookahImg.png"]
    }
};

export default function Hookah() {
    return <ProductModule key={ProductTypes.HOOKAH} type={ProductTypes.HOOKAH} />;
}
