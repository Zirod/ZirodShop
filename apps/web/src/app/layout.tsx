import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@style/main.scss";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZirodShop",
  description: "Manage your store and you client",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} data-theme= "light">
            <body>
              <Header />

                { children }
                
              <Footer/>
            </body>
        </html>
    );
}
