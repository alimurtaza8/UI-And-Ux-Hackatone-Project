"use client";

import Image from "next/image"
import BigCompaniesSection from "@/components/BigCompaniesSection";
import Footer from '@/components/Footer';
import Link from 'next/link';
import React , {useState} from "react";
import { FaInstagram, FaYoutube, FaTwitter ,FaBars, FaTimes} from "react-icons/fa";


const HeroSection= () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/images/blog/blog-1.jpeg" 
              alt="Floating Phone"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="flex mt-4 space-x-4">
            <img
              src="/images/blog/blog-2.jpeg" 
              alt="Thumbnail 1"
              className="w-16 h-16 rounded-lg object-cover cursor-pointer border border-gray-300"
            />
            <img
              src="/images/blog/blog-1.jpeg" 
              alt="Thumbnail 2"
              className="w-16 h-16 rounded-lg object-cover cursor-pointer border border-gray-300"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-6 md:mt-0 md:ml-10 w-full md:w-1/2">
          <div className="flex items-center space-x-2 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.451L24 9.763l-6 5.847 1.418 8.263L12 18.897l-7.418 4.976L6 15.61 0 9.763l8.332-1.725L12 .587z" />
              </svg>
            ))}
            <span className="text-gray-600">10 Reviews</span>
          </div>
          <h1 className="text-2xl font-semibold mt-2">Floating Phone</h1>
          <p className="text-lg font-bold text-gray-800 mt-1">$1,139.33</p>
          <p className="text-green-600 mt-1">Availability: In Stock</p>
          <p className="text-gray-600 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            {/* Color Options */}
            {['#32a852', '#ff6b6b', '#ffa502', '#1e90ff'].map((color, index) => (
              <span
                key={index}
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Select Options
            </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">

              <Image
              src="/images/blog/heart.svg"
              alt="The image"
              height={24}
              width={24}
              />
             

            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            
              {/* <Image
            //   src="/images/blog/shoping-cart.svg"
            src="/images/blog/eye.svg"
              alt="The image"
              height={24}
              width={24}
              /> */}

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
             

            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">

              <Image
              src="/images/blog/eye.svg"
              alt="The image"
              height={24}
              width={24}
              />
             

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const InfoSection  = () => {
    return (
      <div className="container mx-auto p-6">
        <div className="border-b border-gray-200 mb-6">
          <ul className="flex justify-center space-x-6">
            <li className="text-gray-700 font-medium cursor-pointer">Description</li>
            <li className="text-gray-500 cursor-pointer">Additional Information</li>
            <li className="text-gray-500 cursor-pointer">Reviews (0)</li>
          </ul>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Image Section */}
          <div className="col-span-1">
            <img
              src="/images/blog/blog-3.jpeg" // Replace with actual image path
              alt="Art Wall"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
  
          {/* Middle Text Section */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">the quick fox jumps over</h2>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
  
          {/* Right Links Section */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">the quick fox jumps over</h2>
            <ul className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
  
            <h2 className="text-lg font-semibold mt-8 mb-4">the quick fox jumps over</h2>
            <ul className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
    

const productImages = [
    "/images/blog/bl-1.jpeg",
    "/images/blog/bl-2.jpeg",
    "/images/blog/bl-3.jpeg",
    "/images/blog/bl-4.jpeg",
    "/images/blog/bl-5.jpeg",
    "/images/blog/bl-6.jpeg",
    "/images/blog/bl-7.jpeg",
    "/images/blog/bl-8.jpeg",
  ];
  
  const BestsellerProducts = () => {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
        
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-400">Featured Products</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              BESTSELLER PRODUCTS
            </h2>
            <p className="text-gray-500 mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {productImages.map((imageSrc, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center border border-gray-200 rounded-lg overflow-hidden"
              >
               
                <div className="w-full h-80 flex items-center justify-center bg-gray-100">
                  <img
                    src={imageSrc}
                    alt={`Graphic Design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Product Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-800">Graphic Design</h3>
                  <p className="text-sm text-gray-500">English Department</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-gray-400 line-through">$16.48</span>
                    <span className="text-green-700 font-semibold">$6.48</span>
                  </div>
  
                  
                  {/* <div className="flex justify-center gap-2 mt-3">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                    <span className="w-3 h-3 rounded-full bg-black"></span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
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
                { href: "/team", label: "Team" },
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
              
                
              {/* </link> */}
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  


export default function Blog(){
    return (
        <div>
        <Header />       
        <HeroSection />
        <InfoSection />
        <BestsellerProducts />
        <BigCompaniesSection />
        <Footer />
        </div>

    )
}