import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import styles from './layout.module.css'
import { Footer } from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("https://portfolio-next-three-omega.vercel.app/"),
  title: "Jorge Altamirano | Fullstack Web Developer",
  description:
    "Portfolio de Jorge Altamirano, Fullstack Web Developer. Desarrollo aplicaciones web completas con React, Next.js, Node.js, Express y MySQL.",

  openGraph: {
    title: "Jorge Altamirano | Fullstack Web Developer",
    description:
      "Portfolio de Jorge Altamirano, Fullstack Web Developer. Desarrollo aplicaciones web completas con React, Next.js, Node.js, Express y MySQL.",
    siteName: "Jorge Altamirano",
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jorge Altamirano | Fullstack Web Developer",
    description:
      "Portfolio de Jorge Altamirano, Fullstack Web Developer.",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>

      <body>
        <Navbar />
        <div className= {styles.container} >
            {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
