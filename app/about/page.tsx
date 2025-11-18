import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center pt-20 px-4">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/about-hero.png)" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">About <span className="line-through decoration-2 md:decoration-4">Un</span>satisfied</h1>
                    <p className="text-lg sm:text-xl md:text-2xl">Building a community of faith, friendship, and purpose</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
                        <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
                            <div className="text-blue-600 text-4xl md:text-5xl mb-3 md:mb-4">🎯</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-blue-900">Our Mission</h2>
                            <p className="text-base md:text-lg text-gray-700">To empower young people to grow in their faith, discover their purpose, and make a lasting impact in their communities through Christ-centered fellowship and service.</p>
                        </div>
                        <div className="bg-purple-50 p-6 md:p-8 rounded-lg">
                            <div className="text-purple-600 text-4xl md:text-5xl mb-3 md:mb-4">👁️</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-purple-900">Our Vision</h2>
                            <p className="text-base md:text-lg text-gray-700">To see a generation of young believers who are deeply rooted in God's Word, passionate about worship, and actively engaged in transforming their world for Christ.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Believe / Values */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">Our Core Values</h2>
                    <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto px-4">These values guide everything we do as a community</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">📖</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Biblical Foundation</h3>
                            <p className="text-sm md:text-base text-gray-600">We center our lives and teachings on the Word of God, helping young people develop a strong biblical worldview.</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">🤝</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Authentic Community</h3>
                            <p className="text-sm md:text-base text-gray-600">We create a safe space where young people can be real, build genuine friendships, and support one another.</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">🙏</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Passionate Worship</h3>
                            <p className="text-sm md:text-base text-gray-600">We encounter God through vibrant worship, prayer, and seeking His presence together as a community.</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">💪</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Servant Leadership</h3>
                            <p className="text-sm md:text-base text-gray-600">We develop young leaders who serve with humility, following Christ's example of sacrificial love.</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">🌍</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Missional Living</h3>
                            <p className="text-sm md:text-base text-gray-600">We actively share God's love through service projects, outreach, and living out our faith in daily life.</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎉</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Joyful Fellowship</h3>
                            <p className="text-sm md:text-base text-gray-600">We celebrate life together through fun activities, laughter, and building memories that last a lifetime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-4">What We Do</h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Our <span className="line-through">Un</span>satisfied community offers a variety of activities and programs designed to help you grow spiritually, socially, and personally</p>

                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-4 text-blue-900">Weekly Gatherings</h3>
                                <p className="text-lg text-gray-700 mb-4">Every Friday night, we come together for worship, biblical teaching, small group discussions, and fellowship. It's a time to encounter God, ask questions, and build friendships.</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Energetic worship and praise</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Relevant biblical teaching</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Interactive small groups</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Games and community time</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-blue-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🎸</div>
                                <p className="text-2xl font-bold text-blue-900">Friday Nights</p>
                                <p className="text-xl text-gray-700">7:00 PM - 9:00 PM</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-4 text-purple-900">Small Groups</h3>
                                <p className="text-lg text-gray-700 mb-4">Mid-week small groups provide a more intimate setting for deeper conversations, accountability, and spiritual growth. Led by trained leaders, these groups meet in homes and focus on biblical topics relevant to young people.</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Age-appropriate groups</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Safe space for questions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Accountability partnerships</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Prayer and support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-purple-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">👥</div>
                                <p className="text-2xl font-bold text-purple-900">Wednesday Evenings</p>
                                <p className="text-xl text-gray-700">Various Locations</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-4 text-green-900">Service & Outreach</h3>
                                <p className="text-lg text-gray-700 mb-4">We believe faith without action is incomplete. Our youth regularly participate in service projects, community outreach, and missions to put God's love into action and make a real difference.</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Local community service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Food bank volunteering</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Neighborhood outreach events</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Mission trips and projects</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-green-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">❤️</div>
                                <p className="text-2xl font-bold text-green-900">Monthly Projects</p>
                                <p className="text-xl text-gray-700">Making a Difference</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-4 text-orange-900">Special Events</h3>
                                <p className="text-lg text-gray-700 mb-4">Throughout the year, we host special events including retreats, conferences, summer camps, game nights, movie nights, and social activities that create unforgettable experiences and strengthen our community.</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Annual youth retreats</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Summer camp adventures</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Game and movie nights</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Conference attendance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-orange-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🎊</div>
                                <p className="text-2xl font-bold text-orange-900">Year-Round Fun</p>
                                <p className="text-xl text-gray-700">Adventures Await</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-4">Our Leadership Team</h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Dedicated leaders passionate about guiding and mentoring the <span className="line-through">Un</span>satisfied generation</p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Leader 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                <div className="text-white text-7xl">👤</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Pastor Name</h3>
                                <p className="text-blue-600 font-semibold mb-3"><span className="line-through">Un</span>satisfied Pastor</p>
                                <p className="text-gray-600">Leading our <span className="line-through">Un</span>satisfied ministry with passion and dedication, helping young people discover their faith and purpose.</p>
                            </div>
                        </div>

                        {/* Leader 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-7xl">👤</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Leader Name</h3>
                                <p className="text-purple-600 font-semibold mb-3">Worship Leader</p>
                                <p className="text-gray-600">Guiding <span className="line-through">Un</span>satisfied in passionate worship and helping them encounter God through music and praise.</p>
                            </div>
                        </div>

                        {/* Leader 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <div className="text-white text-7xl">👤</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Leader Name</h3>
                                <p className="text-green-600 font-semibold mb-3">Small Group Coordinator</p>
                                <p className="text-gray-600">Organizing and supporting our small groups to create meaningful connections and spiritual growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting Information */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-4">Join Us</h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Come be part of our community! Here's where and when we meet</p>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900">📍 Location</h3>
                            <p className="text-lg text-gray-700 mb-2">Tsega Church</p>
                            <p className="text-gray-600 mb-4">La Vergne, TN</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 hover:text-blue-800 font-semibold">Get Directions →</a>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-purple-900">🕐 Meeting Times</h3>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Friday Nights:</strong> 7:00 PM - 9:00 PM</p>
                                <p><strong>Small Groups:</strong> Wednesday Evenings</p>
                                <p className="text-sm text-gray-600 mt-4">Ages 12-18 welcome!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold mb-6">Ready to Get Involved?</h2>
                    <p className="text-2xl mb-8 max-w-3xl mx-auto">Whether you're new to faith or have been walking with Jesus for years, you have a place here!</p>
                    <div className="space-x-4">
                        <a href="/events" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg">View Upcoming Events</a>
                        <a href="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition text-lg">Contact Us</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}