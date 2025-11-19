import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: 'Unsatisfied - Find True Satisfaction in Christ',
        template: '%s | Unsatisfied Youth Group'
    },
    description: 'Unsatisfied without Jesus? Join our youth community at Tsega Church where young people ages 12-18 find purpose, build faith, and discover true satisfaction in Christ. La Vergne, TN.',
    keywords: [
        'unsatisfied',
        'youth group',
        'church',
        'La Vergne TN',
        'Tsega Church',
        'Christian youth',
        'teen ministry',
        'faith community',
        'Nashville area youth',
        'middle school ministry',
        'high school ministry',
        'satisfied in Christ',
        'purpose in Christ'
    ],
    authors: [{ name: 'Unsatisfied Youth Group', url: 'https://unsatisfiedlife.com' }],
    creator: 'Tsega Church',
    publisher: 'Tsega Church',
    metadataBase: new URL('https://unsatisfiedlife.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Unsatisfied - Find True Satisfaction in Christ',
        description: 'Join our youth community where young people ages 12-18 find purpose, build faith, and discover true satisfaction in Christ',
        url: 'https://unsatisfiedlife.com',
        siteName: 'Unsatisfied Youth Group',
        images: [
            {
                url: '/images/patterns/satisfied.png',
                width: 1200,
                height: 630,
                alt: 'Unsatisfied Youth Group - Tsega Church',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Unsatisfied - Find True Satisfaction in Christ',
        description: 'Youth community at Tsega Church in La Vergne, TN. Ages 12-18 welcome!',
        images: ['/images/patterns/satisfied.png'],
        creator: '@unsatisfied_youth', // Update with your actual Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
        // Add these when you set up Google Search Console
        // google: 'your-google-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="theme-color" content="#EAB308" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}