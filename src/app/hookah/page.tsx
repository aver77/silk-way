import React, { Suspense } from "react";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";

const ProductModule = React.lazy(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Страница с товарами - кальяны, табаки"
};

export default function Hookah() {
    return (
        <Suspense>
            <ProductModule key={ProductTypes.HOOKAH} type={ProductTypes.HOOKAH} />
        </Suspense>
    );
}
