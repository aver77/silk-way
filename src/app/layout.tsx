import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globalStyles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SilkWay",
    description: "Home page of Silk Way tea room and delivery"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <link rel="shortcut icon" href="/favicon.svg" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
