'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Bandage</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-gray-600 font-medium">
          <Link href="/product-list" className="hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/contact-us" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Login Link */}
          <Link
            href="/login"
            className="text-blue-600 hover:text-gray-900 font-medium"
          >
            Login
          </Link>

          {/* Become a Member Button */}
          <Link
            href="/register"
            className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium flex items-center space-x-2"
          >
            <span>Become a member</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-100 px-4 py-2 space-y-2">
          <Link
            href="/product-list"
            className="block text-gray-600 hover:text-gray-900"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="block text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="/contact-us"
            className="block text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
          <div className="mt-4">
            <Link
              href="/#"
              className="block text-blue-600 hover:text-gray-900 mb-2"
            >
              Login
            </Link>
            <Link
              href="/#"
            //   className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium"
            className="block bg-blue-500 hover:bg-blue-600 text-white  rounded-md font-medium"
            >
             Become a member
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};



const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase mb-3">Contact Us</h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Get in touch today!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We know how large objects will act, but things on a small scale.
          </p>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 font-medium">
              <span className="font-bold text-gray-900">Phone: +451 215 215</span> 
            </p>
            <p className="text-gray-700 font-medium">
              <span className="font-bold text-gray-900">Fax: +451 215 215</span> 
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          {/* Main Image */}
          <img
            src="/images/contactHero.png"
            alt="Contact Us Family"
            className="w-full max-w-md mx-auto lg:max-w-full relative z-10"
          />

          {/* Decorative Circle Shapes */}
          <div className="absolute top-10 right-0 w-32 h-32 bg-pink-100 rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-200 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};






const BusinessSection = () => {
    return (
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600">
            Visit Our Office
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We help small businesses
            <br /> with big ideas
          </h2>
        </div>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/d-1.png" 
                alt="Phone Icon"
                width={48}
                height={48}
              />
            </div>
            <p className="text-sm text-gray-700">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-6">
              Get Support
            </h3>
            <button className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
              Submit Request
            </button>
          </div>
  
          {/* Card 2 */}
          <div className="bg-custom-blue shadow-md p-6 rounded-lg text-center text-white">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/d-3.png" 
                alt="Location Icon"
                width={48}
                height={48}
              />
            </div>
            <p className="text-sm">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-6">Get Support</h3>
            <button className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full bg-white hover:bg-blue-600 hover:text-white transition">
              Submit Request
            </button>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/d-2.png" 
                alt="Email Icon"
                width={48}
                height={48}
              />
            </div>
            <p className="text-sm text-gray-700">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-6">
              Get Support
            </h3>
            <button className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </section>
    );
  };
  

  const LetsTalkSection = () => {
    return (
      <section className="py-16 px-4 bg-white">
        {/* Section Content */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Subtitle */}
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            WE CAN’T WAIT TO MEET YOU
          </p>
  
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Let’s Talk
          </h2>
  
          {/* Button */}
          <button className="mt-8 px-8 py-3 text-white bg-blue-600 text-lg font-medium rounded-md shadow-lg hover:bg-blue-700 transition">
            Try it free now
          </button>
        </div>
      </section>
    );
  };
  


export default function ContactUs() {
    return (
        <div>
            <Header />
            {/* <HeroSection /> */}
            <HeroSection />
             <BusinessSection />
            <LetsTalkSection />
            <Footer />
  

        </div>
    );
}
