
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronDown } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const treatmentCategories = [
//     {
//       name: "Weight Loss",
//       link: "/treatments/weight-loss",
//       subcategories: []
//     },
//     {
//       name: "Men's health",
//       link: "/#",
//       subcategories: [
//         { name: "Erectile Dysfunction", link: "/treatments/erectile-dysfunction" },
//         { name: "Premature Ejaculation", link: "/treatments/premature-ejaculation" }
//       ]
//     },
//     {
//       name: "Women's health",
//       link: "/#",
//       subcategories: [
//          { name: "Contraception", link: "/treatments/contraception" },
//         { name: "Period Delay", link: "/treatments/period-delay" }
//       ]
//     },
//     {
//       name: "Hair Loss",
//       link: "/treatments/hair-loss",
//       subcategories: []
//     },
//     {
//       name: "Eczema Treatment",
//       link: "/treatments/eczema",
//       subcategories: []
//     },
//     {
//       name: "Hayfever",
//       link: "/treatments/hayfever",
//       subcategories: []
//     },
//     {
//       name: "Sleep Better",
//       link: "/treatments/sleep-aid",
//       subcategories: []
//     }
//   ];

//   const toggleCategory = (name: string) => {
//     if (expandedCategory === name) {
//       setExpandedCategory(null);
//     } else {
//       setExpandedCategory(name);
//     }
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="font-bold text-xl md:text-2xl">
//               <span>Journey</span>
//               <span className="font-extrabold">Health.</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="relative">
//               <button 
//                 className="flex items-center focus:outline-none"
//                 onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
//               >
//                 <span className="mr-1">Browse treatments</span>
//                 <ChevronDown size={18} />
//               </button>
              
//               {/* Treatments dropdown menu */}
//               {isTreatmentsOpen && (
//                 <div className="absolute right-0 mt-2 p-0 bg-white shadow-lg w-96 divide-y divide-gray-100 border border-gray-200">
//                   <div className="py-1">
//                     {treatmentCategories.map((category) => (
//                       <div key={category.name} className="relative">
//                         <div className="w-full flex items-center justify-between">
//                           <Link 
//                             href={category.link}
//                             className="flex-grow px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700"
//                           >
//                             {category.name}
//                           </Link>
//                           {category.subcategories.length > 0 && (
//                             <button
//                               className="px-4 py-3 text-gray-700 hover:bg-gray-50" 
//                               onClick={() => toggleCategory(category.name)}
//                             >
//                               <ChevronDown size={18} className={`transform transition-transform ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
//                             </button>
//                           )}
//                         </div>
                        
//                         {/* Subcategories if any */}
//                         {expandedCategory === category.name && category.subcategories.length > 0 && (
//                           <div className="pl-8 py-2 bg-gray-50">
//                             {category.subcategories.map((sub) => (
//                               <Link
//                                 href={sub.link}
//                                 key={sub.name}
//                                 className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-600"
//                               >
//                                 {sub.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <Link href="/contact" className="text-gray-800 hover:text-gray-600">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <div>
//               <button
//                 className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-800"
//                 onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
//               >
//                 <span>Browse treatments</span>
//                 <ChevronDown size={18} className={`transform transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {isTreatmentsOpen && (
//                 <div className="pl-4 py-2">
//                   {treatmentCategories.map((category) => (
//                     <div key={category.name} className="mb-2">
//                       <div className="w-full flex items-center justify-between">
//                         <Link
//                           href={category.link}
//                           className="flex-grow px-3 py-2 text-left text-gray-700 hover:bg-gray-50"
//                         >
//                           {category.name}
//                         </Link>
//                         {category.subcategories.length > 0 && (
//                           <button
//                             className="px-3 py-2 text-gray-700 hover:bg-gray-50"
//                             onClick={() => toggleCategory(category.name)}
//                           >
//                             <ChevronDown size={16} className={`transform transition-transform ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
//                           </button>
//                         )}
//                       </div>
                      
//                       {expandedCategory === category.name && category.subcategories.length > 0 && (
//                         <div className="pl-4 py-1">
//                           {category.subcategories.map((sub) => (
//                             <Link
//                               href={sub.link}
//                               key={sub.name}
//                               className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
//                             >
//                               {sub.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <Link
//               href="/contact"
//               className="block px-3 py-2 text-gray-800 hover:bg-gray-50"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;





// ///////




"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const treatmentCategories = [
    {
      name: "Weight Loss",
      link: "/treatments/weight-loss",
      subcategories: []
    },
    {
      name: "Men's Health",
      link: "/#",
      subcategories: [
        { name: "Erectile Dysfunction", link: "/treatments/erectile-dysfunction" },
        { name: "Premature Ejaculation", link: "/treatments/premature-ejaculation" }
      ]
    },
    {
      name: "Women's Health",
      link: "/#",
      subcategories: [
         { name: "Contraception", link: "/treatments/contraception" },
        { name: "Period Delay", link: "/treatments/period-delay" }
      ]
    },
    {
      name: "Hair Loss",
      link: "/treatments/hair-loss",
      subcategories: []
    },
    {
      name: "Eczema Treatment",
      link: "/treatments/eczema",
      subcategories: []
    },
    {
      name: "Hayfever",
      link: "/treatments/hayfever",
      subcategories: []
    },
    {
      name: "Sleep Better",
      link: "/treatments/sleep-aid",
      subcategories: []
    }
  ];

  const toggleCategory = (name: string) => {
    if (expandedCategory === name) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(name);
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsTreatmentsOpen(false);
    setExpandedCategory(null);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl md:text-2xl" onClick={closeAllMenus}>
              <span>Journey</span>
              <span className="font-extrabold">Health.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center focus:outline-none hover:text-blue-600 transition-colors"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              >
                <span className="mr-1">Browse Treatments</span>
                <ChevronDown size={18} className={`transform transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Treatments dropdown menu */}
              {isTreatmentsOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-80 border border-gray-100 overflow-hidden">
                  <div className="py-2">
                    {treatmentCategories.map((category) => (
                      <div key={category.name} className="relative">
                        <div className="flex items-center">
                          <Link 
                            href={category.link}
                            className="flex-grow px-4 py-3 text-left hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                            onClick={closeAllMenus}
                          >
                            {category.name}
                          </Link>
                          {category.subcategories.length > 0 && (
                            <button
                              className="px-3 py-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" 
                              onClick={() => toggleCategory(category.name)}
                            >
                              <ChevronDown size={16} className={`transform transition-transform ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        
                        {/* Desktop Subcategories */}
                        {expandedCategory === category.name && category.subcategories.length > 0 && (
                          <div className="bg-gray-50 border-t border-gray-100">
                            {category.subcategories.map((sub) => (
                              <Link
                                href={sub.link}
                                key={sub.name}
                                className="block px-8 py-3 text-sm hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={closeAllMenus}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop Quick Actions */}
                  {/* <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                    <Link 
                      href="/contact" 
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      onClick={closeAllMenus}
                    >
                      Need help choosing? Contact us →
                    </Link>
                  </div> */}
                </div>
              )}
            </div>
            
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="max-h-screen overflow-y-auto">
            {/* Mobile Treatments Section */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between px-4 py-4 text-left text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              >
                <span className="font-medium">Browse Treatments</span>
                <ChevronDown size={20} className={`transform transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Treatment Categories */}
              {isTreatmentsOpen && (
                <div className="bg-gray-50">
                  {treatmentCategories.map((category, index) => (
                    <div key={category.name} className={`${index !== treatmentCategories.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <div className="flex items-center">
                        <Link
                          href={category.link}
                          className="flex-grow px-6 py-4 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors"
                          onClick={closeAllMenus}
                        >
                          <span className="font-medium">{category.name}</span>
                        </Link>
                        {category.subcategories.length > 0 && (
                          <button
                            className="px-4 py-4 text-gray-500 hover:text-blue-600 hover:bg-white transition-colors"
                            onClick={() => toggleCategory(category.name)}
                          >
                            <ChevronRight size={18} className={`transform transition-transform ${expandedCategory === category.name ? 'rotate-90' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Subcategories */}
                      {expandedCategory === category.name && category.subcategories.length > 0 && (
                        <div className="bg-white border-t border-gray-200">
                          {category.subcategories.map((sub, subIndex) => (
                            <Link
                              href={sub.link}
                              key={sub.name}
                              className={`block px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors ${subIndex !== category.subcategories.length - 1 ? 'border-b border-gray-100' : ''}`}
                              onClick={closeAllMenus}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Contact Link */}
            <Link
              href="/contact"
              className="block px-4 py-4 text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Contact Us
            </Link>
            
            {/* Mobile Help Section */}
            {/* <div className="bg-blue-50 px-4 py-4 border-t border-gray-100">
              <p className="text-sm text-blue-800 mb-2">Need help choosing the right treatment?</p>
              <Link 
                href="/contact" 
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                onClick={closeAllMenus}
              >
                Get personalized recommendations →
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;