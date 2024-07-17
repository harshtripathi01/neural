import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
    title: "Neural",
    description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <main className="">
                    <div>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}

