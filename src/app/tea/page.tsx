import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";
import { sharedOpenGraph } from "@/app/metaUtil";

const ProductModule = dynamic(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Весь ассортимент китайских белых, зелёных, красных, улунов, черных, габа чаёв",
    openGraph: {
        ...sharedOpenGraph,
        url: "https://silk-way.shop/tea",
        description:
            "Весь ассортимент китайских белых, зелёных, красных, улунов, черных, габа чаёв",
        images: ["../../shared/assets/img/teas/alishan.png"]
    }
};

export default function Tea() {
    return <ProductModule key={ProductTypes.TEA} type={ProductTypes.TEA} />;
}
