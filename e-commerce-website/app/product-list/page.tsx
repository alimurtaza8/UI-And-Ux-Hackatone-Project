"use client";
import Image from "next/image";

// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronRight } from 'lucide-react';

// import React { useState } from "react";
import React , {useState} from "react";
import { FaInstagram, FaYoutube, FaTwitter ,FaBars, FaTimes} from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import BestsellerProducts from "@/components/BestsellerProducts";



// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="w-full">
//       {/* Top Bar */}
//       <div className="bg-green-900 text-white text-sm py-2 px-4 
//         flex flex-col md:flex-row justify-between items-center 
//         space-y-2 md:space-y-0">
//         <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
//           <span className="flex items-center gap-2">📞 (225) 555-0118</span>
//           <span className="flex items-center gap-2">✉️ michelle.rivera@example.com</span>
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <span className="hidden md:block">Follow Us and get a chance to win 80% off</span>
//           <div className="flex items-center gap-2">
//             <span className="hidden md:block">Follow Us:</span>
//             <div className="flex items-center gap-2">
//               <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
//                 <FaInstagram />
//               </a>
//               <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
//                 <FaYoutube />
//               </a>
//               <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="flex flex-wrap justify-between items-center py-4 px-4 md:px-6 border-b relative">
//         {/* Logo */}
//         <div className="text-xl font-bold w-1/2 md:w-auto flex justify-start items-center">
//           <h1 className="text-2xl md:text-4xl font-extrabold text-black">Bandage</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
//           <button 
//             onClick={toggleMenu} 
//             className="text-2xl focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className={`
//           ${isMenuOpen ? 'block' : 'hidden'} 
//           md:block 
//           w-full md:w-auto 
//           absolute md:relative 
//           top-full left-0 
//           bg-white md:bg-transparent 
//           shadow-lg md:shadow-none 
//           z-50 md:z-auto
//         `}>
//           <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg p-4 md:p-0">
//             {[
//               { href: "./", label: "Home" },
//               { href: "./product-list", label: "Shop" },
//               { href: "/about", label: "About" },
//               { href: "#", label: "Blog" },
//               { href: "./contact-us", label: "Contact" },
//               { href: "#", label: "Pages" }
//             ].map((link) => (
//               <li key={link.label} className="w-full md:w-auto text-center">
//                 <Link 
//                   href={link.href} 
//                   className="text-black hover:text-blue-600 transition block md:inline"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Actions */}
//         <div className={`
//           ${isMenuOpen ? 'block' : 'hidden'} 
//           md:block 
//           w-full md:w-auto 
//           absolute md:relative 
//           top-full left-0 
//           bg-white md:bg-transparent 
//           shadow-lg md:shadow-none 
//           z-50 md:z-auto 
//           p-4 md:p-0
//         `}>
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg">
//             <Link 
//               href="#" 
//               className="text-blue-400 hover:text-blue-600 transition text-center w-full md:w-auto"
//             >
//               Login / Register
//             </Link>
//             <div className="flex items-center justify-center gap-4">
//               <Link href="#" aria-label="Search" className="text-gray-700 hover:text-blue-600 transition">🔍</Link>
//               <Link href="#" aria-label="Cart" className="text-gray-700 hover:text-blue-600 transition">🛒</Link>
//               <Link href="#" aria-label="Wishlist" className="text-gray-700 hover:text-blue-600 transition">❤️</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-custom-green text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center p-4">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            📞 <a href="tel:(225)555-0118">(225) 555-0118</a>
          </span>
          <span className="flex items-center gap-2">
            ✉️ <a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a>
          </span>
        </div>
        {/* Center: Promo Text */}
        <span className="hidden md:block text-center">
          Follow Us and get a chance to win 80% off
        </span>
        {/* Right: Social Links */}
        <div className="flex items-center gap-3">
          <span className="hidden md:block">Follow Us:</span>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-4 md:px-6 border-b relative">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-black">Bandage</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-50`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 text-lg">
            {[
              { href: "./", label: "Home" },
              { href: "./product-list", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "#", label: "Blog" },
              { href: "./contact-us", label: "Contact" },
              { href: "#", label: "Pages" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-black hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Login / Register
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Search"
              className="hover:text-blue-600 transition"
            >
              🔍
            </Link>
            <Link
              href="#"
              aria-label="Cart"
              className="hover:text-blue-600 transition"
            >
              🛒
            </Link>
            <Link
              href="#"
              aria-label="Wishlist"
              className="hover:text-blue-600 transition"
            >
              ❤️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};




const ProductHero = () => {
  const products = [
    { image: '/images/products/C-1.png'},
    { image: '/images/products/C-2.png'},
    { image: '/images/products/C-3.png'},
    { image: '/images/products/C-4.png'},
    { image: '/images/products/C-5.png'},
   
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md"
          >
            {/* Image */}
            <div className="w-full h-56 relative">
              <Image
                src={product.image}
                // alt={product.title}
                alt="Clotes"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg font-bold uppercase">
                {/* {product.title} */}
              </h2>
              {/* <p className="text-white text-sm">{product.count} Items</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-gray-500 text-sm">Showing all 12 results</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Grid View */}
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          {/* List View */}
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5"
              />
            </svg>
          </button>

          {/* Dropdown */}
          <select className="px-3 py-1 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          {/* Filter Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};


  const BigCompaniesSection: React.FC = () => {
    const companies = [
      '/images/companies-logo/Logo-1.png',
      '/images/companies-logo/Logo-2.png',
     '/images/companies-logo/Logo-3.png',
      '/images/companies-logo/Logo-4.png',
      '/images/companies-logo/Logo-5.png',
      '/images/companies-logo/Logo.png'
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Big Companies Are Here
          </h2> */}
          <div className="flex justify-center items-center space-x-8">
            {companies.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1} Logo`}
                  className="w-24 h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const ProductListPage = () => {
    return (
      <div>
        <Header />
        <ProductHero />
        {/* <Footer /> */}
        <BigCompaniesSection />
        <Footer />
        <BestsellerProducts />

      </div>
    );
  };
  
  export default ProductListPage;