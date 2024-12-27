
"use client";


import React, {useState} from "react";
import { FaInstagram, FaYoutube, FaTwitter,FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";



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
            <Link href="./" className="hover:text-gray-900">Home</Link>
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
            className="bg-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium flex items-center space-x-2"
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
        
          <p className="text-sm text-gray-500 font-bold mt-4">WHAT WE DO</p>
          <h1 className="text-xl md:text-5xl font-bold text-black mt-4">Innovation tailored for you</h1>
  
          
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

 



  const SectionImage = () => {
    const products = [
      {
        id: 1,
        image: "/images/team/s-1.jpeg",
        className: "col-span-2 row-span-2",
      },
      {
        id: 2,
        image: "/images/team/s-2.jpeg",
        className: "col-span-1",
      },
      {
        id: 3,
        image: "/images/team/s-3.jpeg",
        className: "col-span-1",
      },
      {
        id: 4,
        image: "/images/team/s-4.jpeg",
        className: "col-span-1",
      },
      {
        id: 5,
        image: "/images/team/s-5.jpeg",
        className: "col-span-1",
      },
    ];
  
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative overflow-hidden ${product.className}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={product.image}
                  alt="Fashion product"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={product.id === 1}
                />
              </div>
            </div>
          ))}
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
    
    const TeamMembers = () => {
      const teamMembers: TeamMember[] = [
        {
          image: '/images/team/i-1.jpeg',
          name: 'Username',
          profession: 'Profession',
          facebookUrl: '#',
          instagramUrl: '#',
          twitterUrl: '#',
        },
        {
          image: '/images/team/i-2.jpeg',
          name: 'Username',
          profession: 'Profession',
          facebookUrl: '#',
          instagramUrl: '#',
          twitterUrl: '#',
        },
        {
          image: '/images/team/i-3.jpeg',
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
          {
            image: '/images/team/i-4.jpeg',
            name: 'Username',
            profession: 'Profession',
            facebookUrl: '#',
            instagramUrl: '#',
            twitterUrl: '#',
          },
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
            image: '/images/team/i-5.jpeg',
            name: 'Username',
            profession: 'Profession',
            facebookUrl: '#',
            instagramUrl: '#',
            twitterUrl: '#',
          },
          {
            image: '/images/team/i-6.jpeg',
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
            {/* <p className="text-gray-500 text-center mb-12 w-1/2 mx-auto">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p> */}
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
  



export default function TeamSection(){
    return  (
        <div>
            <Header />
            <HeroSection />
            <SectionImage />
            <TeamMembers />
            <StartFreeTrial />
            <Footer />

        </div>
    )
}