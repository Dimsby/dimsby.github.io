import type { Metadata } from "next";
import { Jost } from 'next/font/google'
import "../styles/globals.scss";
import Sidebar from "@/components/Sidebar";

const fontCommon = Jost({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-common',
    display: 'swap',
})
const fontHeader = Jost({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-header',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Дмитрий Скрипка | Fullstack разработчик",
    description: "Fullstack разработчик: php, laravel, mysql, react, vue",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontCommon.variable} ${fontHeader.variable}`}>
                <main>
                    <div className='container'>
                        <div className="content-area">
                            <div className="content">
                                {children}
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
