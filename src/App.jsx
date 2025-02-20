import { useEffect, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import './index.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full top-0 left-0 z-50 transition-colors
        ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-yellow-400 text-xl font-bold">WaifePorts</div>
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            <a href="#hero" className="hover:text-yellow-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-yellow-400 transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  // Jika ingin efek parallax, silakan aktifkan logika di bawah.
  // Di sini kita perpendek agar fokus pada layout.
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = useSpring({
    transform: `translateY(${offsetY * 0.2}px)`
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background Parallax */}
      <animated.div
        style={parallaxBg}
        className="absolute inset-0 bg-gray-900"
      >
        <div className="h-full w-full opacity-80 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
      </animated.div>

      {/* Konten Hero */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* Bagian Kiri: Teks */}
        <div className="text-center md:text-left text-white">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            I&apos;m <span className="text-yellow-400">James Adams</span>
          </h1>
          <p className="mb-6 text-gray-300 max-w-md">
            I build quality products in programming and design. Let&apos;s collaborate and create something amazing!
          </p>

          {/* Ikon Sosial / Link Sosial */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            {/* Ganti href dengan tautan yang diinginkan */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://slack.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <i className="fab fa-slack text-2xl"></i>
            </a>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
            >
              My Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bagian Kanan: Foto/Ilustrasi */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-yellow-400 flex-shrink-0">
          {/* Ganti src dengan path foto Anda */}
          <img
            src=""
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

// Bagian ringkasan singkat (Stats) sebelum Services
const StatsSection = () => {
  return (
    <section className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
          <p className="text-gray-300">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-yellow-400">30+</h3>
          <p className="text-gray-300">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">What Can I Do For Your Needs</h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          I offer various services that can help you build and grow your digital presence.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">UI/UX Design</h3>
            <p className="text-gray-300">
              Create modern and intuitive user interfaces for better user experience.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Front End Dev</h3>
            <p className="text-gray-300">
              Build fast, responsive, and reliable websites with modern tech stacks.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Mobile App Dev</h3>
            <p className="text-gray-300">
              Develop high-performance mobile applications for various platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Best Selected Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Contoh Portfolio Cards dengan efek hover */}
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Travel Mobile App</h3>
            <p className="text-gray-300">
              A sleek mobile application for booking trips and tours.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Real Estate Landing Page</h3>
            <p className="text-gray-300">
              A modern landing page for showcasing real estate listings.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Coffee Shop Website</h3>
            <p className="text-gray-300">
              A stylish website for a local coffee shop with online ordering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <form className="bg-gray-700 p-6 rounded-xl space-y-4">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                type="email"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
                id="message"
                rows="4"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded hover:bg-yellow-300 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 text-center text-gray-400">
      <p>&copy; 2025 James Adams. All rights reserved.</p>
    </footer>
  );
};

export default function PortfolioPage() {
  return (
    <div className="relative font-sans">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
