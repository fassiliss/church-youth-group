export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* About Section */}
                    <div>
                        <h3>
    <span className="relative inline-block text-gray-400">
        un
        <span className="absolute inset-0 flex items-center justify-center text-red-500 font-black" style={{ fontSize: '1.4em' }}>
            ×
        </span>
    </span>
                            <span className="text-yellow-500">satisfied</span>
                        </h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Building faith, creating community, and making a difference together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-sm md:text-base text-gray-400 hover:text-white transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/events" className="text-sm md:text-base text-gray-400 hover:text-white transition">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="/sermons" className="text-sm md:text-base text-gray-400 hover:text-white transition">
                                    Sermons
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm md:text-base text-gray-400 hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm md:text-base text-gray-400">
                            <li>📍 5227 Murfreesboro Rd<br/>Lavergne, TN</li>
                            <li>
                                <a href="tel:+11234567890" className="hover:text-white transition">
                                    📞 (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:unsatisfied@church.com" className="hover:text-white transition break-all">
                                    ✉️ unsatisfied@church.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
                    <p className="text-sm md:text-base">
                        &copy; 2026 <span className="line-through">Un</span>satisfied. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}