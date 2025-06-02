import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className=" py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-10 text-6xl font-bold text-[#b9d765] mb-4 tracking-tight">
            COOKIE
          </h1>
          <h1 className="text-6xl font-bold text-[#b9d765] tracking-tight">
            POLICY
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Introduction</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Welcome to Journey Health&apos;s website. By accessing or using our website, you agree to these terms of use and our cookie policy. Please read them carefully. If you do not agree with these terms, please do not use our website.
            </p>
            
            <p>
              This document explains how we use cookies and collect information about your device and usage when you visit our website.
            </p>
          </div>
        </div>

        {/* What are cookies? */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">What are cookies?</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site recognize your device and store certain information about your preferences or past actions.
            </p>
            
            <p>
              Cookies are essential for improving your browsing experience and ensuring that the website functions effectively.
            </p>
          </div>
        </div>

        {/* How we use cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">How we use cookies</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Journey Health, we use cookies to provide a seamless user experience, analyze website traffic, and enable specific site functionalities. Cookies help us understand how visitors interact with our website so we can improve its performance and usability.
            </p>
            
            <p>
              Some cookies are necessary for the site to operate, while others are used for analytics and personalization to enhance your browsing experience.
            </p>
          </div>
        </div>

        {/* What cookies do we use? */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">What cookies do we use?</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We use the following types of cookies on our website:
            </p>
            
            <div className="ml-4 space-y-3">
              <p>
                <span className="font-semibold">Essential cookies:</span> These are required for the website to function properly and cannot be disabled.
              </p>
              <p>
                <span className="font-semibold">Performance cookies:</span> These help us measure how users interact with the site, allowing us to improve its performance.
              </p>
              <p>
                <span className="font-semibold">Functionality cookies:</span> These remember your preferences and enable enhanced features, such as saved settings.
              </p>
              <p>
                <span className="font-semibold">Analytical cookies:</span> These provide insights into user behavior and website usage to optimize content and services.
              </p>
            </div>
          </div>
        </div>

        {/* What technical information do we collect about your device? */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">What technical information do we collect about your device?</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              When you visit Journey Health&apos;s website, we may collect technical information about your device, such as your IP address, browser type, operating system, and screen resolution. This information helps us ensure compatibility and improve the overall user experience.
            </p>
          </div>
        </div>

        {/* Usage data */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Usage data</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We collect usage data to understand how visitors interact with our website. This includes information about the pages you visit, how long you spend on each page, and any errors encountered. This data is collected anonymously and is used to enhance the functionality and content of our site.
            </p>
          </div>
        </div>

        {/* How can you control cookies? */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">How can you control cookies?</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You can manage your cookie preferences through your browser settings. Most browsers allow you to accept, block, or delete cookies. Please note that disabling certain cookies may affect the functionality of our website.
            </p>
            
            <p>
              To learn more about managing cookies, consult your browser&apos;s help section or visit external resources, such as All About Cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;