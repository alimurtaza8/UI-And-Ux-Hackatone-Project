
"use client";
// import Image from "next/image";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChevronRight } from 'lucide-react';

// import React { useState }  from "react";
import React, { useState } from 'react';

import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter ,FaBars, FaTimes} from "react-icons/fa";
import Footer from '@/components/Footer';
import BestsellerProducts from '@/components/BestsellerProducts';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-custom-blue text-white text-sm py-3 px-4 
        flex flex-col md:flex-row justify-between items-center 
        space-y-2 md:space-y-0">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
          <span className="flex items-center gap-2">📞 (225) 555-0118</span>
          <span className="flex items-center gap-2">✉️ michelle.rivera@example.com</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className=" hidden md:block">Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap justify-between items-center py-4 px-4 md:px-6 border-b relative">
        {/* Logo */}
        <div className="text-xl font-bold w-1/2 md:w-auto flex justify-start items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-black">Bandage</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={toggleMenu} 
            className="text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-auto 
          absolute md:relative 
          top-full left-0 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          z-50 md:z-auto
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg p-4 md:p-0">
            {[
              { href: "./", label: "Home" },
              { href: "./product-list", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "./contact-us", label: "Contact" },
              { href: "/team", label: "Team" }
            ].map((link) => (
              <li key={link.label} className="w-full md:w-auto text-center">
                <Link 
                  href={link.href} 
                  className="text-black hover:text-blue-600 transition block md:inline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-auto 
          absolute md:relative 
          top-full left-0 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          z-50 md:z-auto 
          p-4 md:p-0
        `}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg">
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-600 transition text-center w-full md:w-auto"
            >
              Login / Register
            </Link>
            <div className="flex items-center justify-center gap-4">
              <Link href="#" aria-label="Search" className="text-gray-700 hover:text-blue-600 transition">🔍</Link>
              <Link href="#" aria-label="Cart" className="text-gray-700 hover:text-blue-600 transition">🛒</Link>
              <Link href="#" aria-label="Wishlist" className="text-gray-700 hover:text-blue-600 transition">❤️</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HomeHeroSection = () => {
  return (
    <section className="bg-cyan-500 h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
          
          {/* Left Text Section */}
          <div className="flex flex-col justify-center">
            <div className="font-bold text-white text-lg mb-2">
              SUMMER 2020
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
              NEW COLLECTION
            </h1>
            <p className="text-lg md:text-xl text-white mt-4 leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>
            <div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md mt-6 inline-block">
              SHOP NOW
            </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="h-full w-full flex justify-end">
            <img
              src="/images/HomePageHero.png"
              alt="Model"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};





const EditorsPick = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-gray-500 mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* MEN */}
          <div className="relative group col-span-2">
            <img
              src="/images/Man.jpeg"
              alt="Men's Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white px-4 py-2 shadow-md">
              <span className="text-gray-800 font-semibold">MEN</span>
            </div>
          </div>

          {/* WOMEN */}
          <div className="relative group">
            <img
              src="/images/women.jpeg"
              alt="Women's Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white px-4 py-2 shadow-md">
              <span className="text-gray-800 font-semibold">WOMEN</span>
            </div>
          </div>

          {/* ACCESSORIES */}
          <div className="relative group">
            <img
              src="/images/women-2.jpeg"
              alt="Accessories Collection"
              className="w-full h-min object-cover"
            />
            <div className="absolute top-72 left-8 bg-white px-4 py-2 shadow-md">
              <span className="text-gray-800 font-semibold">ACCESSORIES</span>
            </div>

            <img
              src="/images/kids.jpeg"
              alt="Kids Collection"
              className="w-full h-min object-cover mt-4"
            />
            <div className="absolute bottom-8 left-8 bg-white px-4 py-2 shadow-md">
              <span className="text-gray-800 font-semibold">KIDS</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};




// const productImages = [
//   "/images/sellers/B-1.jpeg", 
//   "/images/sellers/B-2.jpeg", 
//   "/images/sellers/B-3.jpeg", 
//   "/images/sellers/B-4.jpeg",
//   "/images/sellers/B-5.jpeg", 
//   "/images/sellers/B-6.jpeg", 
//   "/images/sellers/B-7.jpeg", 
//   "/images/sellers/B-8.jpeg",   
// ];

// const BestsellerProducts = () => {
//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl text-gray-400 ">Featured Products</h2>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             BESTSELLER PRODUCTS
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Problems trying to resolve the conflict between
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {productImages.map((imageSrc, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               {/* Product Image */}
//               <div className="w-full overflow-hidden">
//                 <img
//                   src={imageSrc}
//                   alt={`Graphic Design ${index + 1}`}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>

//               {/* Product Content */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Graphic Design
//                 </h3>
//                 <p className="text-sm text-gray-500">English Department</p>
//                 <div className="flex items-center justify-center gap-2 mt-2">
//                   <span className="text-gray-400 line-through">$16.48</span>
//                   <span className="text-green-500 font-semibold">$6.48</span>
//                 </div>

//                 {/* Color Dots */}
//                 <div className="flex justify-center gap-2 mt-3">
//                   <span className="w-3 h-3 rounded-full bg-blue-500"></span>
//                   <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
//                   <span className="w-3 h-3 rounded-full bg-orange-500"></span>
//                   <span className="w-3 h-3 rounded-full bg-black"></span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


const SummerCollectionSection = () => {
  return (
    <section className="bg-[#2E8B71] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-sm text-[#ffffffb3] uppercase tracking-widest mb-2">
              Summer 2020
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Vita Classic Product
            </h1>
            <p className="text-base md:text-lg text-white mt-4 leading-relaxed">
              We know how large objects will act. We know how are objects will act. 
              We know.
            </p>
            <div className="mt-6">
              <button className="bg-[#27AE60] hover:bg-[#219150] text-white font-medium py-3 px-8 rounded-md text-lg transition-all duration-300">
                ADD TO CART
              </button>
            </div>
            <p className="text-2xl font-bold text-white mt-4">$16.48</p>
          </div>

          {/* Model Image */}
          <div className="justify-self-end">
            <img
              src="/images/summar-section-image.png"
              alt="Model"
              className="w-full max-w-md h-auto object-contain md:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};



const NeuralUniverseSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
          
          <div className="justify-self-start max-h-screen">
            <img
              src="/images/natural-section.png" 
              alt="Happy Couple"
              className="w-[725px] h-[774px] top-[-211px] left-[-137px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
              Summer 2020
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Part of the Neural Universe
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="mt-6 flex items-center space-x-4">
              <button className="bg-[#27AE60] hover:bg-[#219150] text-white font-medium py-3 px-8 rounded-md text-lg transition-all duration-300">
                BUY NOW
              </button>
              <button className="border-2 border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60] hover:text-white font-medium py-3 px-8 rounded-md text-lg transition-all duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const FeaturedPosts = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Section Title */}
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-blue-500 font-medium uppercase text-sm mb-2">
          Practice Advice
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Posts
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Card 1 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="/images/features/Feature-1.jpeg"
              alt="Featured Post 1"
              className="w-full h-56 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-1">Google Trending New</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Loudest à la Madison #1 (L&apos;Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
            </p>
            <div className="flex items-center text-blue-500 font-medium hover:underline">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="/images/features/Feature-2.jpeg"
              alt="Featured Post 2"
              className="w-full h-56 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-1">Google Trending New</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Loudest à la Madison #1 (L&apos;Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
            </p>
            <div className="flex items-center text-blue-500 font-medium hover:underline">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="/images/features/Feature-3.jpeg"
              alt="Featured Post 3"
              className="w-full h-56 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-1">Google Trending New</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Loudest à la Madison #1 (L&apos;Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
            </p>
            <div className="flex items-center text-blue-500 font-medium hover:underline">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default function Home() {
  return (
    <div>
      <Header />
      <HomeHeroSection />
      <EditorsPick />
      <BestsellerProducts />
      <SummerCollectionSection />
      <NeuralUniverseSection />

      <FeaturedPosts />

      <Footer />

    </div>
  )
}
