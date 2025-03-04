import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import MouseTrail from '@/components/ui/mouse-trail';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Shashank Neupane",
    description: 'Shashank Neupane | Portfolio',
    icons: {
        icon: '/logo.png'
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased custom-container font-Audiowide dark:bg-black dark:text-white`}
            >
                <div className=''>{children}</div>
                <MouseTrail />
                <SpeedInsights />
                <Analytics />
                <ToastContainer />
            </body>
        </html>
    );
}
