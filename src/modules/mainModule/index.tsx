import MainInfo from "./components/mainInfo";
import Product from "./components/product";
import AboutUs from "./components/aboutUs";
import Contacts from "./components/contacts";
import Delivery from "./components/delivery";

import { PRODUCTS } from "@/shared/constants/anchors";
import { ProductTypes } from "@/shared/data/enums";

const MainModule = () => {
    return (
        <>
            <MainInfo />
            <div id={PRODUCTS}>
                <Product title={"Кальяны"} type={ProductTypes.HOOKAH} />
                <Product title={"Чаи"} type={ProductTypes.TEA} />
            </div>
            <AboutUs />
            <Contacts />
            <Delivery />
        </>
    );
};
export default MainModule;
