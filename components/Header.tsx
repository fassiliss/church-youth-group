import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative inline-flex items-center justify-center w-24 h-24 border-4 border-white rounded-full bg-black">
                            <div className="relative">
                                <span className="text-3xl font-bold text-yellow-500">un</span>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <line x1="20" y1="20" x2="80" y2="80" stroke="white" strokeWidth="6"/>
                                        <line x1="80" y1="20" x2="20" y2="80" stroke="white" strokeWidth="6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span className="text-5xl font-bold text-yellow-500">satisfied</span>
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-8 text-lg">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-700 hover:text-blue-600 transition">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/sermons" className="text-gray-700 hover:text-blue-600 transition">
                                    Sermons
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}