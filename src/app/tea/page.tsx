import React, { Suspense } from "react";
import { Metadata } from "next";

import { ProductTypes } from "@/shared/data/enums";

const ProductModule = React.lazy(() => import("@/modules/productModule"));

export const metadata: Metadata = {
    description: "Страница с товарами - китайский чай"
};

export default function Tea() {
    return (
        <Suspense>
            <ProductModule key={ProductTypes.TEA} type={ProductTypes.TEA} />
        </Suspense>
    );
}
