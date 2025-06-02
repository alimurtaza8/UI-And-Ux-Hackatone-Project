


"use client";

import React from 'react';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-[#14171f] text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top section with logo and company info */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Company info column */}
          <div className="flex-shrink-0 lg:w-1/4">
            <h2 className="text-3xl font-bold mb-6">
              Journey<span className="font-normal">Health.</span>
            </h2>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">Superintendent Pharmacist:</span> Mohammed Uddin 2087187</p>
              <p><span className="font-semibold">Customer liaison Lead:</span> Tam Ambia</p>
              <p><span className="font-semibold">Company Number:</span> 16051129</p>
              <p><span className="font-semibold">GPHC Number:</span> 9012689</p>
              
              <div className="mt-6">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:info@journeyhealth.uk" className="text-[#b9d765] hover:underline">
                    info@journeyhealth.uk
                  </a>
                </p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold">Address:</p>
                <p>Office 26, 321-323 High Road Chadwell Heath</p>
                <p>Romford RM6 6AX</p>
              </div>
            </div>
          </div>
          
          {/* Nav columns container */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 - Weight Loss */}
            <div>
              <h3 className="text-[#b9d765] font-semibold text-lg mb-4">Weight Loss</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/mounjaro-2.5mg" className="hover:text-lime-400 transition duration-200">
                    Mounjaro
                  </Link>
                </li>
                <li>
                  <Link href="/products/wegovy-0.25mg" className="hover:text-lime-400 transition duration-200">
                    Wegovy
                  </Link>
                </li>
              </ul>
              
              <h3 className="text-[#b9d765] font-semibold text-lg mt-12 mb-4">Popular</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/treatments/hayfever" className="hover:text-lime-400 transition duration-200">
                    Hayfever
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/eczema" className="hover:text-lime-400 transition duration-200">
                    Eczema
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/sleep-aid" className="hover:text-lime-400 transition duration-200">
                    Sleep
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/migraine-relief" className="hover:text-lime-400 transition duration-200">
                    Migraine Relief
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Column 2 - Women's Health */}
            <div>
              <h3 className="text-[#b9d765] font-semibold text-lg mb-4">Women&apos;s Health</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/treatments/contraception" className="hover:text-lime-400 transition duration-200">
                    Contraception
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/period-delay" className="hover:text-lime-400 transition duration-200">
                    Period Delay
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/uti-women-only" className="hover:text-lime-400 transition duration-200">
                    UTI
                  </Link>
                </li>
              </ul>
              
              <h3 className="text-[#b9d765] font-semibold text-lg mt-12 mb-4">Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="hover:text-lime-400 transition duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-lime-400 transition duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Men's Health */}
            <div>
              <h3 className="text-[#b9d765] font-semibold text-lg mb-4">Men&apos;s Health</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/treatments/erectile-dysfunction" className="hover:text-lime-400 transition duration-200">
                    Erectile Dysfunction
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/premature-ejaculation" className="hover:text-lime-400 transition duration-200">
                    Premature Ejaculation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="border-t border-gray-700 mt-16 pt-6"></div>
        
        {/* Copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-gray-400 text-sm">©2025 Journey Health.</p>
          
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link href="/policies/privacy-policy" className="text-gray-400 text-sm hover:text-lime-400">
              Privacy Policy
            </Link>
            <Link href="/policies/terms-and-conditions" className="text-gray-400 text-sm hover:text-lime-400">
              Terms & Conditions
            </Link>
            <Link href="/policies/cookie-policy" className="text-gray-400 text-sm hover:text-lime-400">
              Cookie Policy
            </Link>
            <Link href="/policies/complaints-policy" className="text-gray-400 text-sm hover:text-lime-400">
              Complaints Policy
            </Link>
            <Link href="/policies/refunds-and-returns" className="text-gray-400 text-sm hover:text-lime-400">
              Refunds & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;