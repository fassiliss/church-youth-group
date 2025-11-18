'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="text-2xl md:text-3xl font-bold">
    <span className="relative inline-block text-gray-400">
        un
        <span className="absolute inset-0 flex items-center justify-center text-red-500 font-black" style={{ fontSize: '1.4em' }}>
            ×
        </span>
    </span>
                            <span className="text-yellow-500">satisfied</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition text-sm lg:text-base">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition text-sm lg:text-base">
                            About
                        </Link>
                        <Link href="/events" className="text-gray-700 hover:text-blue-600 font-semibold transition text-sm lg:text-base">
                            Events
                        </Link>
                        <Link href="/sermons" className="text-gray-700 hover:text-blue-600 font-semibold transition text-sm lg:text-base">
                            Sermons
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition text-sm lg:text-base">
                            Contact
                        </Link>
                        <Link href="/contact" className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm lg:text-base">
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
                        <Link
                            href="/"
                            className="block text-gray-700 hover:text-blue-600 font-semibold transition py-2 px-2 rounded hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block text-gray-700 hover:text-blue-600 font-semibold transition py-2 px-2 rounded hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/events"
                            className="block text-gray-700 hover:text-blue-600 font-semibold transition py-2 px-2 rounded hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Events
                        </Link>
                        <Link
                            href="/sermons"
                            className="block text-gray-700 hover:text-blue-600 font-semibold transition py-2 px-2 rounded hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sermons
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-700 hover:text-blue-600 font-semibold transition py-2 px-2 rounded hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-center mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Join Us
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}