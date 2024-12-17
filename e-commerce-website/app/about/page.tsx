


"use client";
// import Image from "next/image";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChevronRight ,UserIcon, ShoppingCartIcon} from 'lucide-react';

import React , {useState}from "react";
import { FaInstagram ,FaFacebookF,FaTwitter} from "react-icons/fa";
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




  // const HomeHeroSection = () => {
  //   return (
  //     <section className="bg-white py-20 md:py-32">
  //       <div className="container mx-auto px-4 md:px-8">
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  //           <div>
  //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
  //               About US
  //             </h1>
  //             <p className="text-lg md:text-xl text-black mt-4">
  //               We know how large objects will act, but things on a small scale.
  //             </p>
  //             <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md mt-6 flex items-center">
  //               <span className="mr-2">SHOP NOW</span>
  //               {/* <Button size={18} /> */}
  //             </button>
  //           </div>
  //           <div className="justify-self-end">
  //             <img
  //               src="/images/image-00.png"
  //               alt="Model"
  //               className="max-w-full h-auto md:max-w-[450px]"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };


  const HomeHeroSection= () => {
    return (
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <div className="text-center md:text-left">
            <h4 className="text-gray-500 text-sm uppercase font-semibold mb-2">
              About Company
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ABOUT US
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We know how large objects will act, but things on a small scale
            </p>
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-transform transform hover:-translate-y-1"
            >
              Get Quote Now
            </a>
          </div>
  
          
          <div className="relative">
           
            <div className="absolute -z-10 top-0 -left-10 md:-top-16 md:left-12 w-72 h-72 bg-pink-100 rounded-full"></div>
            <img
              src="/images/About-Hero-Section-Image.png"
              alt="Woman with Shopping Bags"
              className="w-full h-auto max-w-md mx-auto md:mx-0"
            />
            {/* Small Dots */}
            <div className="absolute top-12 right-0 w-4 h-4 bg-purple-300 rounded-full"></div>
            <div className="absolute bottom-8 right-16 w-3 h-3 bg-purple-300 rounded-full"></div>
          </div>
        </div>
      </section>
    );
  };
  



  const Ratings = () => {
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-gray-800">15K</h3>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-gray-800">150K</h3>
              <p className="text-gray-500 mt-2">Monthly Visitors</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-gray-800">15</h3>
              <p className="text-gray-500 mt-2">Countries Worldwide</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-500 mt-2">Top Partners</p>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const ProblemSection = () => {
    return (
      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-red-500 text-sm font-semibold mb-2">Problems trying</p>
              <h2 className="text-xl md:text-2xl  font-bold text-gray-900 leading-snug">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
            </div>
  
            {/* Right Content */}
            <div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Problems trying to resolve the conflict between the two major realms of 
                Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };


  interface TeamMember {
    image: string;
    name: string;
    profession: string;
    facebookUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
  }
  
  const TeamSection = () => {
    const teamMembers: TeamMember[] = [
      {
        image: '/images/team/T-1.jpeg',
        name: 'Username',
        profession: 'Profession',
        facebookUrl: '#',
        instagramUrl: '#',
        twitterUrl: '#',
      },
      {
        image: '/images/team/T-2.jpeg',
        name: 'Username',
        profession: 'Profession',
        facebookUrl: '#',
        instagramUrl: '#',
        twitterUrl: '#',
      },
      {
        image: '/images/team/T-3.jpeg',
        name: 'Username',
        profession: 'Profession',
        facebookUrl: '#',
        instagramUrl: '#',
        twitterUrl: '#',
      },
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex justify-center text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <p className="text-gray-500 text-center mb-12 w-1/2 mx-auto">Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 flex justify-center">{member.name}</h3>
                  <p className="text-gray-500 font-medium flex justify-center" >{member.profession}</p>
                  <div className="flex space-x-4 mt-4 justify-center">
                    {member.facebookUrl && (
                      <a href={member.facebookUrl} className="text-blue-500 hover:text-blue-600">
                        <FaFacebookF size={20} />
                      </a>
                    )}
                    {member.instagramUrl && (
                      <a href={member.instagramUrl} className="text-blue-500 hover:text-blue-600">
                        <FaInstagram size={20} />
                      </a>
                    )}
                    {member.twitterUrl && (
                      <a href={member.twitterUrl} className="text-blue-400 hover:text-blue-500">
                        <FaTwitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Big Companies Are Here
            </h2>
            <p className="text-gray-500 text-center mb-12 w-1/2 mx-auto">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p> 


            <div className="flex justify-center items-center space-x-8 mt-5">
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



  // const WorkWithUsSection  = () => {
  //   return (
  //     <section className="bg-blue-500 py-20">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
  //         <div className="text-white">
  //           <h2 className="text-4xl font-bold mb-4">Work With Us</h2>
  //           <p className="text-lg mb-8">
  //             Now let&apos;s grow yours. The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
  //           </p>
  //           <button className="bg-white text-blue-500 font-medium py-3 px-6 rounded-md hover:bg-gray-200">
  //             Button
  //           </button>
  //         </div>
  //         <div className="flex justify-end">
  //           <img
  //             src="/images/image-1.jpg"
  //             alt="Work With Us Hero Image"
  //             className="w-full md:w-auto h-80 object-cover rounded-md shadow-lg"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  const WorkWithUsSection = () => {
    return (
      <section className="bg-white">
        <div className="bg-blue-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="text-white">
            <h3 className="text-sm font-medium uppercase mb-2">Work With Us</h3>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Now Let’s Grow Yours
            </h2>
            <p className="text-lg mb-8 leading-relaxed max-w-md">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
            </p>
            <button className="bg-white  text-blue-500  font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition">
              Button
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex justify-center md:justify-end  ">
            <img
              src="/images/workWithUs.jpeg"
              alt="Work With Us Hero Image"
              className="w-full max-w-xs md:max-w-sm object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    );
  };
  


export default function About() {
    return (
        <div>
            {/* <Header /> */}
            {/* <AboutUsHeader /> */}

            <Header />
            <HomeHeroSection />
            
            <ProblemSection />
            <Ratings />
            <TeamSection />
            <BigCompaniesSection />
            <WorkWithUsSection />
            <Footer />
            
        </div>
    );
}