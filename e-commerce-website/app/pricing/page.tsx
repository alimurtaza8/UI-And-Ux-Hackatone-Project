"use client";


import React, {useState} from "react";
import { FaInstagram, FaYoutube, FaTwitter,FaFacebookF } from "react-icons/fa";
import Link from "next/link";
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
            className="bg-cyan-600 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium flex items-center space-x-2"
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



  const HeroSection = () => {
    return (
      <div
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center"
        // style={{
        //   backgroundImage: "url('/images/image-5.jpg')", 
        // }}
      >
        <div className="p-4 flex flex-col items-center ">
        
          <p className="text-sm text-gray-500 font-bold mt-4">PRICING</p>
          <h1 className="text-5xl font-bold text-black mt-4">Simple Pricing</h1>
  
          
          <nav className=" text-sm text-grey-500  mt-4">
            <a href="/" className="hover:underline text-black font-bold">
              Home
            </a>{" "}
            &gt;{" "}
            <a href="/pricing" className="hover:underline">
              Pricing
            </a>
          </nav>
        </div>
      </div>
    );
  };


 

  // const PricingSection = () => {
  //   return (
  //     <section className="bg-gray-100 py-20">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Pricing</h2>
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
  //           <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
  //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Free</h3>
  //             <p className="text-gray-500 mb-8">Organize across all apps by hand</p>
  //             <div className="flex items-end mb-8">
  //               <span className="text-4xl font-bold text-gray-800">$0</span>
  //               <span className="text-gray-500 ml-2">Per Month</span>
  //             </div>
  //             <ul className="space-y-4 mb-8">
  //               <li className="flex items-center">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
  //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                 </svg>
  //                 Unlimited product updates
  //               </li>
  //             </ul>
  //             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-auto">
  //               Get Started
  //             </button>
  //           </div>
  //           <div className="bg-blue-300 rounded-lg shadow-md p-8 flex flex-col">
  //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard</h3>
  //             <p className="text-gray-500 mb-8">Organize across all apps by hand</p>
  //             <div className="flex items-end mb-8">
  //               <span className="text-4xl font-bold text-gray-800">$9.99</span>
  //               <span className="text-gray-500 ml-2">Per Month</span>
  //             </div>
  //             <ul className="space-y-4 mb-8">
  //               <li className="flex items-center">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
  //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                 </svg>
  //                 Unlimited product updates
  //               </li>
  //             </ul>
  //             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-auto">
  //               Get Started
  //             </button>
  //           </div>
  //           <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
  //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
  //             <p className="text-gray-500 mb-8">Organize across all apps by hand</p>
  //             <div className="flex items-end mb-8">
  //               <span className="text-4xl font-bold text-gray-800">$19.99</span>
  //               <span className="text-gray-500 ml-2">Per Month</span>
  //             </div>
  //             <ul className="space-y-4 mb-8">
  //               <li className="flex items-center">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
  //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                 </svg>
  //                 Unlimited product updates
  //               </li>
  //             </ul>
  //             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-auto">
  //               Get Started
  //             </button>
  //           </div>
  //         </div>
  //         <div className="mt-12 text-center">
  //           <p className="text-gray-500">
  //             <span className="font-medium">Monthly</span> / <span className="font-medium">Yearly</span>{' '}
  //             <span className="text-blue-500 font-medium">Save 25%</span>
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  const PricingSection = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Pricing</h2>
            <p className="text-gray-500">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
  
          {/* Toggle Switch */}
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 font-medium">Monthly</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
              <span className="text-gray-800 font-medium">Yearly</span>
              <span className="bg-blue-100 text-blue-500 font-semibold px-3 py-1 rounded-lg">Save 25%</span>
            </div>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">FREE</h3>
              <p className="text-gray-500 mb-8">Organize across all apps by hand</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">0$</div>
              <p className="text-gray-500 mb-8">Per Month</p>
              <ul className="mb-8">
                <li className="text-gray-800 flex items-center justify-center">
                  ✅ Unlimited product updates
                </li>
              </ul>
            </div>
  
            {/* Standard Plan */}
            <div className="bg-custom-blue text-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold mb-4">STANDARD</h3>
              <p className="mb-8">Organize across all apps by hand</p>
              <div className="text-4xl font-bold mb-4">9.99$</div>
              <p className="text-gray-300 mb-8">Per Month</p>
              <ul className="mb-8">
                <li className="flex items-center justify-center">
                  ✅ Unlimited product updates
                </li>
              </ul>
            </div>
  
            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">PREMIUM</h3>
              <p className="text-gray-500 mb-8">Organize across all apps by hand</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">19.99$</div>
              <p className="text-gray-500 mb-8">Per Month</p>
              <ul className="mb-8">
                <li className="text-gray-800 flex items-center justify-center">
                  ✅ Unlimited product updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  const BigCompaniesSection: React.FC = () => {
      const companies = [
        '/images/companies-logo/Logo-1.png',
        '/images/companies-logo/Logo-2.png',
       '/images/companies-logo/Logo-3.png',
        '/images/companies-logo/Logo-4.png',
        '/images/companies-logo/Logo-5.png',
        '/images/companies-logo/Logo-6.png',
      ];
    
      return (
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl  text-gray-800 mb-8 text-center">
            Trusted By Over 4000 Big Companies
            </h2>
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


  const FAQSection  = () => {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Pricing FAQs</h2>
          <p className="flex text-gray-500 justify-center ">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The quick fox jumps over the lazy dog</h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit clicquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Haven&apos;t got your answer? <span className="text-blue-500 font-medium">Contact our support</span>
            </p>
          </div>
        </div>
      </section>
    );
  };


  const StartFreeTrial = () => {
    return (
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Start your 14 days free trial
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
              Met minim Mollie non desert Alamo est sit cliquy dolor do met sent. BELIT official consequunt.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 mb-6">
              Try it free now
            </button>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  



export default function Pricing() {
    return (
        <div>
            <Header />
            <HeroSection />
            <PricingSection />
            <BigCompaniesSection />
            <FAQSection />
            <StartFreeTrial />
            <Footer />
        
        </div>
    );
}