export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Church Youth Group</h3>
                        <p className="text-gray-400">
                            Building faith, creating community, and making a difference together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/events" className="text-gray-400 hover:text-white transition">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>📍 123 Church Street</li>
                            <li>📞 (123) 456-7890</li>
                            <li>✉️ youth@church.com</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Church Youth Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}