'use client';
import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./font";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import { ToastProvider } from "@/component/sneakbar";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (

<html lang="en" className={nunito.className}>
        <body>
          <Header />
          <main className="">
            <div>
            <ToastProvider>
          {children}
        </ToastProvider>
            </div>
          </main>
          <Footer />

        </body>
      </html>
 
 
  );
}