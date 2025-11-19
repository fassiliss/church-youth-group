import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Sermons() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/unsatisfied6.jpeg)" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">Sermons & Messages</h1>
                    <p className="text-2xl max-w-2xl mx-auto">Biblical teaching that speaks to your life and helps you grow in faith</p>
                </div>
            </section>

            {/* Search and Filter Bar */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="w-full md:w-2/3">
                            <input
                                type="text"
                                placeholder="Search sermons by title, topic, or speaker..."
                                className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-lg"
                            />
                        </div>
                        <div className="flex gap-3">
                            <select className="px-6 py-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                                <option>All Series</option>
                                <option>Current Series</option>
                                <option>Past Series</option>
                            </select>
                            <select className="px-6 py-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                                <option>All Topics</option>
                                <option>Identity</option>
                                <option>Faith</option>
                                <option>Relationships</option>
                                <option>Purpose</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Series Highlight */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-semibold mb-4">Current Series</div>
                            <h2 className="text-5xl font-bold text-white mb-4">Finding Your Identity in Christ</h2>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto">A 6-week journey exploring who God says you are and discovering your true identity beyond what the world tells you</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
                                    <div className="text-white text-9xl">📖</div>
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold mb-2">Week 4: You Are Loved</h3>
                                        <p className="text-gray-600 mb-1">Speaker: Pastor John Smith</p>
                                        <p className="text-gray-500 text-sm">November 15, 2025</p>
                                    </div>
                                    <p className="text-gray-700 mb-6">Dive deep into understanding God's unconditional love for you and how it transforms everything about how you see yourself and others.</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-gray-600">
                                            <span className="text-xl mr-3">⏱️</span>
                                            <span>35 minutes</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="text-xl mr-3">📝</span>
                                            <span>Notes & Discussion Questions Available</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center">
                                            <span className="mr-2">▶️</span> Watch Now
                                        </button>
                                        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition flex items-center">
                                            <span className="mr-2">🎧</span> Listen
                                        </button>
                                        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition flex items-center">
                                            <span className="mr-2">📥</span> Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Series Progress */}
                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-white font-bold text-lg">Series Progress</h4>
                                <span className="text-white">Week 4 of 6</span>
                            </div>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="bg-white rounded-lg p-3 text-center">
                                    <div className="text-2xl mb-1">✅</div>
                                    <p className="text-xs font-semibold">Week 1</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 text-center">
                                    <div className="text-2xl mb-1">✅</div>
                                    <p className="text-xs font-semibold">Week 2</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 text-center">
                                    <div className="text-2xl mb-1">✅</div>
                                    <p className="text-xs font-semibold">Week 3</p>
                                </div>
                                <div className="bg-blue-600 text-white rounded-lg p-3 text-center border-2 border-white">
                                    <div className="text-2xl mb-1">▶️</div>
                                    <p className="text-xs font-semibold">Week 4</p>
                                </div>
                                <div className="bg-white/50 rounded-lg p-3 text-center">
                                    <div className="text-2xl mb-1">🔒</div>
                                    <p className="text-xs font-semibold">Week 5</p>
                                </div>
                                <div className="bg-white/50 rounded-lg p-3 text-center">
                                    <div className="text-2xl mb-1">🔒</div>
                                    <p className="text-xs font-semibold">Week 6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Sermons */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Recent Messages</h2>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Sermon Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
                                <div className="text-white text-6xl">🎤</div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">NEW</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Identity Series</span>
                                    <span className="text-gray-500 text-sm">Nov 15, 2025</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">You Are Loved</h3>
                                <p className="text-gray-600 mb-1">Pastor John Smith</p>
                                <p className="text-gray-500 text-sm mb-4">35 minutes</p>
                                <p className="text-gray-700 mb-6">Understanding the depth of God's unconditional love and how it shapes our identity.</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                                        ▶️ Watch
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        🎧 Listen
                                    </button>
                                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        📥
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sermon Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                                <div className="text-white text-6xl">✨</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Identity Series</span>
                                    <span className="text-gray-500 text-sm">Nov 8, 2025</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">You Are Chosen</h3>
                                <p className="text-gray-600 mb-1">Pastor Sarah Johnson</p>
                                <p className="text-gray-500 text-sm mb-4">42 minutes</p>
                                <p className="text-gray-700 mb-6">Discovering what it means to be chosen by God and living in that truth daily.</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition text-sm">
                                        ▶️ Watch
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        🎧 Listen
                                    </button>
                                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        📥
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sermon Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                                <div className="text-white text-6xl">🌟</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Identity Series</span>
                                    <span className="text-gray-500 text-sm">Nov 1, 2025</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">You Are Forgiven</h3>
                                <p className="text-gray-600 mb-1">Pastor Mike Davis</p>
                                <p className="text-gray-500 text-sm mb-4">38 minutes</p>
                                <p className="text-gray-700 mb-6">Breaking free from shame and guilt through the power of God's forgiveness.</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                                        ▶️ Watch
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        🎧 Listen
                                    </button>
                                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        📥
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sermon Card 4 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                            <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                                <div className="text-white text-6xl">🔥</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Identity Series</span>
                                    <span className="text-gray-500 text-sm">Oct 25, 2025</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">You Are Called</h3>
                                <p className="text-gray-600 mb-1">Pastor John Smith</p>
                                <p className="text-gray-500 text-sm mb-4">40 minutes</p>
                                <p className="text-gray-700 mb-6">Understanding your unique calling and how God wants to use you right now.</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition text-sm">
                                        ▶️ Watch
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        🎧 Listen
                                    </button>
                                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm">
                                        📥
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition">Load More Sermons</button>
                    </div>
                </div>
            </section>

            {/* Sermon Series Archive */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Past Series</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Browse our complete library of sermon series</p>

                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Series 1 */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl">🙏</div>
                                        <div>
                                            <h3 className="text-2xl font-bold">The Power of Prayer</h3>
                                            <p className="text-gray-600">5 weeks • October 2025</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 ml-16">Learn to develop a powerful prayer life that transforms your relationship with God and impacts those around you.</p>
                                </div>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition whitespace-nowrap ml-4">
                                    View Series
                                </button>
                            </div>
                        </div>

                        {/* Series 2 */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl">❤️</div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Love Your Neighbor</h3>
                                            <p className="text-gray-600">4 weeks • September 2025</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 ml-16">Practical ways to show God's love to those around you, from your family to your community and beyond.</p>
                                </div>
                                <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition whitespace-nowrap ml-4">
                                    View Series
                                </button>
                            </div>
                        </div>

                        {/* Series 3 */}
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl">📱</div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Faith in the Digital Age</h3>
                                            <p className="text-gray-600">6 weeks • August 2025</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 ml-16">Navigating social media, online relationships, and technology while maintaining a strong faith foundation.</p>
                                </div>
                                <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition whitespace-nowrap ml-4">
                                    View Series
                                </button>
                            </div>
                        </div>

                        {/* Series 4 */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl">💪</div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Stand Strong</h3>
                                            <p className="text-gray-600">5 weeks • July 2025</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 ml-16">Building spiritual resilience to stand firm in your faith when facing challenges and opposition.</p>
                                </div>
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition whitespace-nowrap ml-4">
                                    View Series
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics/Categories */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Browse by Topic</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Find messages on topics that matter to you</p>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-blue-600">
                            <div className="text-5xl mb-3">🎯</div>
                            <h3 className="font-bold text-lg mb-2">Purpose & Calling</h3>
                            <p className="text-sm text-gray-600">12 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-purple-600">
                            <div className="text-5xl mb-3">💑</div>
                            <h3 className="font-bold text-lg mb-2">Relationships</h3>
                            <p className="text-sm text-gray-600">18 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-green-600">
                            <div className="text-5xl mb-3">🌱</div>
                            <h3 className="font-bold text-lg mb-2">Spiritual Growth</h3>
                            <p className="text-sm text-gray-600">24 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-orange-600">
                            <div className="text-5xl mb-3">💰</div>
                            <h3 className="font-bold text-lg mb-2">Money & Finances</h3>
                            <p className="text-sm text-gray-600">8 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-red-600">
                            <div className="text-5xl mb-3">🎓</div>
                            <h3 className="font-bold text-lg mb-2">School & Career</h3>
                            <p className="text-sm text-gray-600">15 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-indigo-600">
                            <div className="text-5xl mb-3">😰</div>
                            <h3 className="font-bold text-lg mb-2">Anxiety & Stress</h3>
                            <p className="text-sm text-gray-600">10 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-pink-600">
                            <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                            <h3 className="font-bold text-lg mb-2">Family</h3>
                            <p className="text-sm text-gray-600">14 messages</p>
                        </button>

                        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-teal-600">
                            <div className="text-5xl mb-3">🙌</div>
                            <h3 className="font-bold text-lg mb-2">Worship & Prayer</h3>
                            <p className="text-sm text-gray-600">20 messages</p>
                        </button>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Sermon Resources</h2>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">📝</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Study Notes</h3>
                            <p className="text-gray-600">Download sermon notes and fill-in-the-blank guides for each message</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Discussion Questions</h3>
                            <p className="text-gray-600">Use these questions in your small group or personal reflection</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">📖</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Scripture References</h3>
                            <p className="text-gray-600">All Bible passages mentioned in the sermon for deeper study</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Never Miss a Message</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to get new sermons delivered directly to your inbox or favorite podcast app</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-8">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none"
                        />
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex justify-center gap-6">
                        <button className="bg-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition">
                            🎵 Apple Podcasts
                        </button>
                        <button className="bg-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition">
                            🎧 Spotify
                        </button>
                        <button className="bg-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition">
                            📺 YouTube
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}