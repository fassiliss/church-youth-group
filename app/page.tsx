import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />

            <section className="relative h-screen flex items-center justify-center pt-130">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/patterns/satisfied.png)" }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">Youth Group</h1>
                    <p className="text-2xl mb-8">Building Faith Creating Community Making a Difference</p>
                    <div className="space-x-4">
                        <a href="/events" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">View Events</a>
                        <a href="/about" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">Learn More</a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold mb-6">Who We Are</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">We are a community of young believers committed to growing in faith, serving others, and making a positive impact in our community.</p>
                </div>
            </section>

            <Footer />
        </>
    );
}