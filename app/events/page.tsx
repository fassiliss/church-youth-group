import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Events() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[40vh] md:h-[50vh] flex items-center justify-center pt-20 px-4">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/satisfied5.jpeg)" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"><span className="line-through decoration-2 md:decoration-4">Un</span>satisfied Events</h1>
                    <p className="text-lg sm:text-xl md:text-2xl">Join us for exciting events, gatherings, and opportunities to grow together</p>
                </div>
            </section>

            {/* Upcoming Events Highlight */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Next Big Event</h2>
                        <p className="text-lg md:text-xl text-gray-600 px-4">Don't miss out on our upcoming highlight event!</p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 bg-blue-800 flex items-center justify-center p-8 md:p-12 min-h-[200px] md:min-h-0">
                                <div className="text-white text-7xl md:text-9xl">🎉</div>
                            </div>
                            <div className="md:w-1/2 p-6 md:p-8 lg:p-12 text-white">
                                <div className="inline-block bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">Featured Event</div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Winter Retreat 2025</h3>
                                <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 text-white/90">Join us for an unforgettable weekend in the mountains! Experience worship, teaching, outdoor activities, and deep fellowship as we grow closer to God and each other.</p>

                                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                                    <div className="flex items-center">
                                        <span className="text-xl md:text-2xl mr-2 md:mr-3">📅</span>
                                        <span>January 17-19, 2025</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xl md:text-2xl mr-2 md:mr-3">📍</span>
                                        <span>Mountain View Retreat Center</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xl md:text-2xl mr-2 md:mr-3">💰</span>
                                        <span>$150 per person</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xl md:text-2xl mr-2 md:mr-3">👥</span>
                                        <span>Ages 12-18</span>
                                    </div>
                                </div>

                                <a href="#register" className="inline-block bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition w-full md:w-auto text-center">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Categories */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Event Categories</h2>

                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center border-2 border-blue-600">
                            <div className="text-4xl mb-3">🎸</div>
                            <h3 className="font-bold text-lg">All Events</h3>
                        </button>
                        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-purple-600">
                            <div className="text-4xl mb-3">🙏</div>
                            <h3 className="font-bold text-lg">Weekly Gatherings</h3>
                        </button>
                        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-green-600">
                            <div className="text-4xl mb-3">🏕️</div>
                            <h3 className="font-bold text-lg">Retreats & Camps</h3>
                        </button>
                        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center border-2 border-transparent hover:border-orange-600">
                            <div className="text-4xl mb-3">❤️</div>
                            <h3 className="font-bold text-lg">Service Projects</h3>
                        </button>
                    </div>
                </div>
            </section>

            {/* Upcoming Events List */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>

                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Event Card 1 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold">22</div>
                                    <div className="text-xl">NOV</div>
                                    <div className="text-sm mt-2">Friday</div>
                                </div>
                                <div className="md:w-3/4 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">Weekly Gathering</div>
                                            <h3 className="text-2xl font-bold text-gray-800">Friday Night Live</h3>
                                        </div>
                                        <div className="text-right text-gray-600">
                                            <div className="font-semibold">7:00 PM</div>
                                            <div className="text-sm">2 hours</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">Join us for worship, games, and a powerful message about finding purpose in God's plan. Bring a friend!</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-4">📍 Tsega Church Main Hall</span>
                                            <span>👥 All Ages Welcome</span>
                                        </div>
                                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Card 2 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/4 bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold">27</div>
                                    <div className="text-xl">NOV</div>
                                    <div className="text-sm mt-2">Wednesday</div>
                                </div>
                                <div className="md:w-3/4 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">Small Groups</div>
                                            <h3 className="text-2xl font-bold text-gray-800">Mid-Week Connect</h3>
                                        </div>
                                        <div className="text-right text-gray-600">
                                            <div className="font-semibold">6:30 PM</div>
                                            <div className="text-sm">1.5 hours</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">Small group Bible study and discussion. This week's topic: "Living Out Your Faith in School"</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-4">📍 Various Homes</span>
                                            <span>👥 Age-Specific Groups</span>
                                        </div>
                                        <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Card 3 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/4 bg-gradient-to-br from-green-500 to-green-700 p-8 text-white flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold">30</div>
                                    <div className="text-xl">NOV</div>
                                    <div className="text-sm mt-2">Saturday</div>
                                </div>
                                <div className="md:w-3/4 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">Service Project</div>
                                            <h3 className="text-2xl font-bold text-gray-800">Community Food Drive</h3>
                                        </div>
                                        <div className="text-right text-gray-600">
                                            <div className="font-semibold">9:00 AM</div>
                                            <div className="text-sm">4 hours</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">Volunteer at the local food bank to sort and distribute food to families in need. Make a difference in our community!</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-4">📍 Community Food Bank</span>
                                            <span>👥 Ages 13+</span>
                                        </div>
                                        <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Card 4 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/4 bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold">06</div>
                                    <div className="text-xl">DEC</div>
                                    <div className="text-sm mt-2">Friday</div>
                                </div>
                                <div className="md:w-3/4 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">Social Event</div>
                                            <h3 className="text-2xl font-bold text-gray-800">Christmas Party & Game Night</h3>
                                        </div>
                                        <div className="text-right text-gray-600">
                                            <div className="font-semibold">7:00 PM</div>
                                            <div className="text-sm">3 hours</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">Celebrate the season with games, food, Secret Santa gift exchange, and Christmas worship. Wear your ugliest Christmas sweater!</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-4">📍 Tsega Church Gym</span>
                                            <span>👥 All Ages Welcome</span>
                                        </div>
                                        <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition">RSVP Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Card 5 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/4 bg-gradient-to-br from-red-500 to-red-700 p-8 text-white flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold">15</div>
                                    <div className="text-xl">DEC</div>
                                    <div className="text-sm mt-2">Sunday</div>
                                </div>
                                <div className="md:w-3/4 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">Worship Event</div>
                                            <h3 className="text-2xl font-bold text-gray-800"><span className="line-through">Un</span>satisfied-Led Christmas Service</h3>
                                        </div>
                                        <div className="text-right text-gray-600">
                                            <div className="font-semibold">6:00 PM</div>
                                            <div className="text-sm">2 hours</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4"><span className="line-through">Un</span>satisfied will lead a special Christmas service with worship, drama, and the story of Jesus' birth. Invite your family and friends!</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-4">📍 Tsega Church Sanctuary</span>
                                            <span>👥 All Welcome</span>
                                        </div>
                                        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Calendar Preview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">This Month at a Glance</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Quick overview of November events</p>

                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center justify-between mb-6">
                            <button className="text-gray-600 hover:text-gray-800 font-semibold">← Previous</button>
                            <h3 className="text-3xl font-bold">November 2025</h3>
                            <button className="text-gray-600 hover:text-gray-800 font-semibold">Next →</button>
                        </div>

                        <div className="grid grid-cols-7 gap-4 text-center">
                            <div className="font-bold text-gray-600">Sun</div>
                            <div className="font-bold text-gray-600">Mon</div>
                            <div className="font-bold text-gray-600">Tue</div>
                            <div className="font-bold text-gray-600">Wed</div>
                            <div className="font-bold text-gray-600">Thu</div>
                            <div className="font-bold text-gray-600">Fri</div>
                            <div className="font-bold text-gray-600">Sat</div>

                            <div className="text-gray-400">27</div>
                            <div className="text-gray-400">28</div>
                            <div className="text-gray-400">29</div>
                            <div className="text-gray-400">30</div>
                            <div className="text-gray-400">31</div>
                            <div className="p-2 bg-blue-100 rounded font-semibold">1 <span className="block text-xs text-blue-600">Friday Live</span></div>
                            <div className="p-2">2</div>

                            <div className="p-2">3</div>
                            <div className="p-2">4</div>
                            <div className="p-2">5</div>
                            <div className="p-2 bg-purple-100 rounded font-semibold">6 <span className="block text-xs text-purple-600">Small Group</span></div>
                            <div className="p-2">7</div>
                            <div className="p-2 bg-blue-100 rounded font-semibold">8 <span className="block text-xs text-blue-600">Friday Live</span></div>
                            <div className="p-2">9</div>

                            <div className="p-2">10</div>
                            <div className="p-2">11</div>
                            <div className="p-2">12</div>
                            <div className="p-2 bg-purple-100 rounded font-semibold">13 <span className="block text-xs text-purple-600">Small Group</span></div>
                            <div className="p-2">14</div>
                            <div className="p-2 bg-blue-100 rounded font-semibold">15 <span className="block text-xs text-blue-600">Friday Live</span></div>
                            <div className="p-2">16</div>

                            <div className="p-2">17</div>
                            <div className="p-2">18</div>
                            <div className="p-2">19</div>
                            <div className="p-2 bg-purple-100 rounded font-semibold">20 <span className="block text-xs text-purple-600">Small Group</span></div>
                            <div className="p-2">21</div>
                            <div className="p-2 bg-blue-100 rounded font-semibold border-2 border-blue-600">22 <span className="block text-xs text-blue-600">Friday Live</span></div>
                            <div className="p-2">23</div>

                            <div className="p-2">24</div>
                            <div className="p-2">25</div>
                            <div className="p-2">26</div>
                            <div className="p-2 bg-purple-100 rounded font-semibold">27 <span className="block text-xs text-purple-600">Small Group</span></div>
                            <div className="p-2">28</div>
                            <div className="p-2 bg-blue-100 rounded font-semibold">29 <span className="block text-xs text-blue-600">Friday Live</span></div>
                            <div className="p-2 bg-green-100 rounded font-semibold">30 <span className="block text-xs text-green-600">Food Drive</span></div>
                        </div>

                        <div className="mt-8 flex justify-center space-x-6">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                                <span className="text-sm">Weekly Gathering</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-purple-100 rounded mr-2"></div>
                                <span className="text-sm">Small Group</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                                <span className="text-sm">Service Project</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Events / Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Recent Highlights</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Check out what we've been up to!</p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                <div className="text-white text-6xl">🏕️</div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">October 2025</div>
                                <h3 className="text-xl font-bold mb-3">Fall Retreat Success!</h3>
                                <p className="text-gray-600">45 <span className="line-through">Un</span>satisfied members attended our fall retreat. Amazing worship, deep conversations, and unforgettable memories!</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <div className="text-white text-6xl">❤️</div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">September 2025</div>
                                <h3 className="text-xl font-bold mb-3">Community Outreach</h3>
                                <p className="text-gray-600"><span className="line-through">Un</span>satisfied served 200+ meals at the homeless shelter and spread God's love through action.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-6xl">🎉</div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">August 2025</div>
                                <h3 className="text-xl font-bold mb-3">Summer Camp 2025</h3>
                                <p className="text-gray-600">60 members experienced life-changing moments at summer camp. 12 gave their lives to Christ!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay Updated CTA */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Never miss an event! Subscribe to our calendar or follow us on social media for updates.</p>
                    <div className="space-x-4">
                        <a href="#subscribe" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">Subscribe to Calendar</a>
                        <a href="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">Contact Us</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}