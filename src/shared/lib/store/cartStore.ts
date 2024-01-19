import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import { IProduct } from "@/shared/constants/products";

export interface IUseCartStore {
    products: IProduct[];
    getProductsCount: () => number;
    isProductInCart: (productTitle: string) => boolean;
    addProduct: (product: IProduct) => void;
    removeProduct: (productTitle: string) => void;
}

const useCartStore = create<IUseCartStore>()(
    devtools(
        immer((set, get) => ({
            products: [],
            getProductsCount: () => get().products.length,
            isProductInCart: (productTitle: string) =>
                get().products.filter(({ title }) => title === productTitle).length > 0,
            addProduct: (product: IProduct) => {
                set({
                    products: [...get().products, product]
                });
            },
            removeProduct: (productTitle: string) => {
                set({
                    products: get().products.filter(({ title }) => title !== productTitle)
                });
            }
        }))
    )
);

export default useCartStore;
