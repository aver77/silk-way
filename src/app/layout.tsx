import type { Metadata, Viewport } from "next";
import { Pangolin } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { sharedOpenGraph } from "./metaUtil";
import "./globalStyles.scss";

const montserrat = Pangolin({ weight: "400", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Silk Way - доставка кальнов и китайского чая в Воронеже",
    description:
        "Silk Way - лучшее пространство в Воронеже. У нас можно попробовать лучший чай, заказать кальян с доставкой на дом, поиграть в Playstation 5, заказать мероприятие и празднование",
    openGraph: {
        ...sharedOpenGraph,
        url: "https://silk-way.shop",
        description:
            "Silk Way - лучшее пространство в Воронеже. У нас можно попробовать лучший чай, заказать кальян с доставкой на дом, поиграть в Playstation 5, заказать мероприятие и празднование",
        images: ["../shared/assets/img/lanternsFooter.png"]
    }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <link rel="shortcut icon" href="/favicon.svg" />
            <body className={montserrat.className}>
                <div className={"main-content"}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
