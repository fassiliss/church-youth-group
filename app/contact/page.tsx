import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[40vh] md:h-[50vh] flex items-center justify-center pt-20 px-4">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/contact-hero.png)" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">Get in Touch</h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">We'd love to hear from you! Reach out with questions, prayer requests, or just to say hello</p>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">Ways to Connect</h2>

                    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Visit Us */}
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <span className="text-3xl md:text-4xl">📍</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2">Visit Us</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-2">Tsega Church</p>
                            <p className="text-xs md:text-sm text-gray-600">123 Church Street<br/>La Vergne, TN 37086</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold text-xs md:text-sm mt-2 inline-block">Get Directions →</a>
                        </div>

                        {/* Call Us */}
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <span className="text-3xl md:text-4xl">📞</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-2">Office</p>
                            <a href="tel:+16155551234" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">(615) 555-1234</a>
                            <p className="text-gray-500 text-xs md:text-sm mt-2">Mon-Fri: 9AM-5PM</p>
                        </div>

                        {/* Email Us */}
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <span className="text-3xl md:text-4xl">✉️</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-2">General Inquiries</p>
                            <a href="mailto:unsatisfied@tsegachurch.org" className="text-blue-600 hover:text-blue-800 font-semibold text-xs md:text-sm break-all">unsatisfied@tsegachurch.org</a>
                        </div>

                        {/* Follow Us */}
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <span className="text-3xl md:text-4xl">📱</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2">Follow Us</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-3">Social Media</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:scale-110 transition">📷</a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:scale-110 transition">👍</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:scale-110 transition">🐦</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible</p>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="(615) 555-1234"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Age Group</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                                        <option value="">Select age group</option>
                                        <option value="12-14">12-14 years old</option>
                                        <option value="15-16">15-16 years old</option>
                                        <option value="17-18">17-18 years old</option>
                                        <option value="parent">Parent/Guardian</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" required>
                                        <option value="">Select a subject</option>
                                        <option value="general">General Question</option>
                                        <option value="join">I Want to Join</option>
                                        <option value="event">Event Information</option>
                                        <option value="volunteer">Volunteer Opportunity</option>
                                        <option value="prayer">Prayer Request</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-500 text-center">We typically respond within 24-48 hours</p>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div>
                            {/* Meeting Times */}
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 mb-8">
                                <h3 className="text-2xl font-bold mb-4">When We Meet</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-white/20 rounded-full p-3 mr-4">
                                            <span className="text-2xl">🎸</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Friday Night Live</h4>
                                            <p className="text-white/90">Every Friday, 7:00 PM - 9:00 PM</p>
                                            <p className="text-sm text-white/80">Main worship gathering with music, teaching, and fellowship</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-white/20 rounded-full p-3 mr-4">
                                            <span className="text-2xl">👥</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Small Groups</h4>
                                            <p className="text-white/90">Wednesdays, 6:30 PM - 8:00 PM</p>
                                            <p className="text-sm text-white/80">Age-specific groups meeting in various homes</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-white/20 rounded-full p-3 mr-4">
                                            <span className="text-2xl">🙏</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Prayer Meeting</h4>
                                            <p className="text-white/90">First Sunday of month, 5:00 PM</p>
                                            <p className="text-sm text-white/80">Join us for focused prayer and intercession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Leadership Contact */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Contact Leadership</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-600 pl-4">
                                        <h4 className="font-bold">Pastor John Smith</h4>
                                        <p className="text-sm text-gray-600"><span className="line-through">Un</span>satisfied Pastor</p>
                                        <a href="mailto:pastor.john@tsegachurch.org" className="text-blue-600 hover:text-blue-800 text-sm">pastor.john@tsegachurch.org</a>
                                    </div>

                                    <div className="border-l-4 border-purple-600 pl-4">
                                        <h4 className="font-bold">Sarah Johnson</h4>
                                        <p className="text-sm text-gray-600">Worship Leader</p>
                                        <a href="mailto:sarah@tsegachurch.org" className="text-blue-600 hover:text-blue-800 text-sm">sarah@tsegachurch.org</a>
                                    </div>

                                    <div className="border-l-4 border-green-600 pl-4">
                                        <h4 className="font-bold">Mike Davis</h4>
                                        <p className="text-sm text-gray-600">Small Group Coordinator</p>
                                        <a href="mailto:mike@tsegachurch.org" className="text-blue-600 hover:text-blue-800 text-sm">mike@tsegachurch.org</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Find Us</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Come visit us at Tsega Church in La Vergne</p>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl" style={{ height: '450px' }}>
                            {/* Placeholder for Google Maps */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🗺️</div>
                                    <p className="text-2xl font-bold text-gray-700 mb-2">Google Maps Integration</p>
                                    <p className="text-gray-600 mb-4">123 Church Street, La Vergne, TN 37086</p>
                                    <a
                                        href="https://www.google.com/maps/search/Tsega+Church+La+Vergne+TN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                                    >
                                        Open in Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Directions Info */}
                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="font-bold text-lg mb-2">🚗 Parking</h4>
                                <p className="text-gray-700 text-sm">Free parking available in the church lot and street parking nearby</p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <h4 className="font-bold text-lg mb-2">♿ Accessibility</h4>
                                <p className="text-gray-700 text-sm">Wheelchair accessible entrance and facilities available</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h4 className="font-bold text-lg mb-2">🚌 Public Transit</h4>
                                <p className="text-gray-700 text-sm">Bus routes 34 and 56 stop within 2 blocks of the church</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Quick answers to common questions</p>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                What ages are welcome at <span className="line-through mx-1">Un</span>satisfied?
                            </h3>
                            <p className="text-gray-700 ml-9">We welcome students ages 12-18 (middle school and high school). We have age-appropriate small groups and activities for different grade levels.</p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                Do I need to be a member of Tsega Church to attend?
                            </h3>
                            <p className="text-gray-700 ml-9">No! Anyone is welcome to join us, whether you're a member of Tsega Church or just visiting. Bring your friends!</p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                What should I wear?
                            </h3>
                            <p className="text-gray-700 ml-9">Come as you are! We're a casual environment. Most students wear jeans and t-shirts, but wear whatever makes you comfortable.</p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                Is there a cost to attend?
                            </h3>
                            <p className="text-gray-700 ml-9">Regular weekly gatherings are completely free! Some special events (retreats, camps) may have a cost to cover food and lodging, but we never want cost to be a barrier.</p>
                        </div>

                        {/* FAQ Item 5 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                How can I get involved or volunteer?
                            </h3>
                            <p className="text-gray-700 ml-9">We'd love to have you serve! Contact our leadership team using the form above or email us directly. We have opportunities in worship, tech, hospitality, and small group leadership.</p>
                        </div>

                        {/* FAQ Item 6 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                What if I'm new to faith or have questions about Christianity?
                            </h3>
                            <p className="text-gray-700 ml-9">Perfect! We welcome people at every stage of their faith journey. Our leaders and small group facilitators love having real conversations about faith, doubt, and questions.</p>
                        </div>

                        {/* FAQ Item 7 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="text-blue-600 mr-3">❓</span>
                                Do parents need to stay during meetings?
                            </h3>
                            <p className="text-gray-700 ml-9">Parents are welcome to stay or drop off their students. We have background-checked leaders and a safe check-in/check-out system for all students.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Feed */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Stay Connected</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Follow us on social media for updates, photos, and more</p>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white hover:scale-105 transition text-center">
                                <div className="text-6xl mb-4">📷</div>
                                <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                                <p className="text-white/90 mb-4">@unsatisfied_youth</p>
                                <p className="text-sm text-white/80">Follow for event photos, stories, and weekly updates</p>
                            </a>

                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white hover:scale-105 transition text-center">
                                <div className="text-6xl mb-4">👍</div>
                                <h3 className="text-2xl font-bold mb-2">Facebook</h3>
                                <p className="text-white/90 mb-4">Unsatisfied Youth Group</p>
                                <p className="text-sm text-white/80">Like our page for event announcements and live streams</p>
                            </a>

                            {/* YouTube */}
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white hover:scale-105 transition text-center">
                                <div className="text-6xl mb-4">📺</div>
                                <h3 className="text-2xl font-bold mb-2">YouTube</h3>
                                <p className="text-white/90 mb-4">Unsatisfied Youth</p>
                                <p className="text-sm text-white/80">Subscribe for sermon videos and special content</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-12 bg-red-50 border-t-4 border-red-600">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-red-900 mb-2">Need Urgent Help?</h3>
                    <p className="text-gray-700 mb-4">If you're experiencing a crisis or emergency, please reach out immediately:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="tel:988" className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition">
                            📞 Crisis Hotline: 988
                        </a>
                        <a href="tel:+16155551234" className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition">
                            📞 Pastor Emergency: (615) 555-1234
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}