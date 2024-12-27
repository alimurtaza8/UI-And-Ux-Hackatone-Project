const BigCompaniesSection = () => {
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

export default BigCompaniesSection;