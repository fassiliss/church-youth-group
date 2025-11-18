import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/satisfied.png)" }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 pb-80">
                        Welcome to <span className="line-through decoration-2 md:decoration-4 text-gray-300">un</span><span className="text-yellow-400">satisfied</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
                        A community where young people find purpose, build faith, and discover true satisfaction in Christ
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="/events" className="w-full sm:w-auto inline-block bg-yellow-500 text-gray-900 px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-400 transition">
                            View Events
                        </a>
                        <a href="/about" className="w-full sm:w-auto inline-block bg-transparent border-2 border-white text-white px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-gray-900 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Who We Are</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are a community of young believers committed to growing in faith, serving others, and making a positive impact in our community. Join us as we journey together towards finding true satisfaction in Christ.
                    </p>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* When We Meet */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition text-center">
                            <div className="text-5xl md:text-6xl mb-4">📅</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">When We Meet</h3>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">Friday Nights</p>
                            <p className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">7:00 PM</p>
                            <p className="text-gray-500 text-sm md:text-base">Weekly gatherings with worship, teaching, and fellowship</p>
                        </div>

                        {/* Where We Meet */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition text-center">
                            <div className="text-5xl md:text-6xl mb-4">📍</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">Where We Meet</h3>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">Tsega Church</p>
                            <p className="text-base md:text-lg font-semibold text-gray-700 mb-3">La Vergne, TN</p>
                            <a href="/contact" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm md:text-base">
                                Get Directions →
                            </a>
                        </div>

                        {/* Who Can Join */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition text-center sm:col-span-2 lg:col-span-1">
                            <div className="text-5xl md:text-6xl mb-4">👥</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">Who Can Join</h3>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">Ages 12-18</p>
                            <p className="text-base md:text-lg font-semibold text-gray-700 mb-3">All Are Welcome!</p>
                            <p className="text-gray-500 text-sm md:text-base">No membership required, bring your friends</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">What to Expect</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                        Here's what a typical Friday night looks like
                    </p>

                    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                        {/* Step 1 */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Welcome & Games</h3>
                                <p className="text-sm md:text-base text-gray-600">Arrive, hang out, and connect with friends. We start with fun icebreakers and activities to get everyone energized.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Worship</h3>
                                <p className="text-sm md:text-base text-gray-600">Experience powerful worship through contemporary music and praise. It's a time to encounter God together.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Teaching</h3>
                                <p className="text-sm md:text-base text-gray-600">Hear relevant biblical teaching that speaks to real issues you're facing. Messages are practical, engaging, and easy to understand.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Small Groups</h3>
                                <p className="text-sm md:text-base text-gray-600">Break into smaller groups for discussion, prayer, and deeper connections. Share your thoughts and ask questions in a safe space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Spotlight */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-4">
                            Next Event
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Winter Retreat 2025</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                            Join us for an unforgettable weekend in the mountains! January 17-19, 2025
                        </p>
                        <a href="/events" className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-400 transition">
                            Learn More & Register
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">What People Say</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                        Hear from our community members
                    </p>

                    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <div className="text-3xl md:text-4xl mb-4">💬</div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 italic">
                                "This group changed my life! I found real friends who support me and help me grow in my faith. I actually look forward to Fridays now!"
                            </p>
                            <p className="font-bold text-gray-800">- Sarah, 16</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <div className="text-3xl md:text-4xl mb-4">💬</div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 italic">
                                "I was skeptical at first, but the leaders are amazing and everyone is so welcoming. It's the highlight of my week!"
                            </p>
                            <p className="font-bold text-gray-800">- Marcus, 14</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sm:col-span-2 lg:col-span-1">
                            <div className="text-3xl md:text-4xl mb-4">💬</div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 italic">
                                "The worship is incredible and the messages always speak right to what I'm going through. I've grown so much spiritually!"
                            </p>
                            <p className="font-bold text-gray-800">- Emily, 17</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Join Us?</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
                            Come experience <span className="line-through text-gray-400">un</span><span className="text-yellow-500 font-bold">satisfied</span> for yourself this Friday!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-400 transition">
                                Get in Touch
                            </a>
                            <a href="/about" className="inline-block bg-gray-200 text-gray-900 px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-300 transition">
                                Learn More About Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}