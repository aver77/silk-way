import type { Metadata } from "next";
import Head from "next/head";
import { Pangolin } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globalStyles.scss";

const montserrat = Pangolin({ weight: "400", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Silk Way",
    description: "Главная страница Silk Way - заведения с доставкой кальянов и китайского чая."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <link rel="shortcut icon" href="/favicon.svg" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
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
