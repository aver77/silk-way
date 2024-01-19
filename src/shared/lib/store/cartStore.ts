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
            products: localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart") as string)
                : [],
            getProductsCount: () => get().products.length,
            isProductInCart: (productTitle: string) =>
                get().products.filter(({ title }) => title === productTitle).length > 0,
            addProduct: (product: IProduct) => {
                const allProducts = [...get().products, product];
                localStorage.setItem("cart", JSON.stringify(allProducts));

                set({
                    products: allProducts
                });
            },
            removeProduct: (productTitle: string) => {
                const filteredProducts = get().products.filter(
                    ({ title }) => title !== productTitle
                );
                localStorage.setItem("cart", JSON.stringify(filteredProducts));

                set({
                    products: filteredProducts
                });
            }
        }))
    )
);

export default useCartStore;
