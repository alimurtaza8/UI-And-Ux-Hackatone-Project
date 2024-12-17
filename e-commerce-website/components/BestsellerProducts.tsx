

const productImages = [
  "/images/sellers/B-1.jpeg", 
  "/images/sellers/B-2.jpeg", 
  "/images/sellers/B-3.jpeg", 
  "/images/sellers/B-4.jpeg",
  "/images/sellers/B-5.jpeg", 
  "/images/sellers/B-6.jpeg", 
  "/images/sellers/B-7.jpeg", 
  "/images/sellers/B-8.jpeg",   
];

const BestsellerProducts = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-gray-400 ">Featured Products</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-gray-500 mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productImages.map((imageSrc, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Product Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={imageSrc}
                  alt={`Graphic Design ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-gray-400 line-through">$16.48</span>
                  <span className="text-green-500 font-semibold">$6.48</span>
                </div>

                {/* Color Dots */}
                <div className="flex justify-center gap-2 mt-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;