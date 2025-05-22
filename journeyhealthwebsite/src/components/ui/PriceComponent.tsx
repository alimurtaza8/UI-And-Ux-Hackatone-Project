



////


import React from 'react';
import Link from 'next/link';

const PriceComponent = () => {
  const products = [
    {
      name: "Mounjaro",
      image: "/images/price_1.webp",
      variants: [
        { quantity: "2.5mg", price: "£125.00", link: "/products/mounjaro-2.5mg" },
        { quantity: "5mg", price: "£140.00", link: "/products/mounjaro-5mg" },
        { quantity: "7.5mg", price: "£165.00", link: "/products/mounjaro-7.5mg" },
        { quantity: "10mg", price: "£180.00", link: "/products/mounjaro-10mg" },
        { quantity: "12.5mg", price: "£200.00", link: "/products/mounjaro-12.5mg" },
        { quantity: "15mg", price: "£210.00", link: "/products/mounjaro-15mg" },
      ],
    },
    {
      name: "Wegovy",
      image: "/images/price_2.webp",
      variants: [
        { quantity: "0.25mg", price: "£99.00", link: "/products/wegovy-0.25mg" },
        { quantity: "0.5mg", price: "£120.00", link: "/products/wegovy-0.5mg" },
        { quantity: "1mg", price: "£140.00", link: "/products/wegovy-1mg" },
        { quantity: "1.7mg", price: "£189.00", link: "/products/wegovy-1.7mg" },
        { quantity: "2.4mg", price: "£225.00", link: "/products/wegovy-2.4mg" },
      ],
    },
    {
      name: "Bundles",
      image: "/images/price_3.webp",
      variants: [
        { quantity: "Starter Bundle", price: "£365.50", link: "/products/starter-bundle" },
        { quantity: "Step Bundle", price: "£436.00", link: "/products/step-bundle" },
        { quantity: "Sustain Bundle", price: "£490.00", link: "/products/sustain-bundle" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 flex items-center justify-center bg-white border-b border-gray-200">
              <div className="h-38 w-38 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="min-h-full min-w-full object-contain"
                />
              </div>
            </div>

            {product.variants.map((variant, vIdx) => (
              <Link href={variant.link} key={vIdx}>
                <div className={`flex justify-between items-center px-6 py-4 hover:bg-gray-50 ${
                  vIdx !== product.variants.length - 1 ? 'border-b border-gray-200' : ''
                }`}>
                  <div className="text-gray-800">
                    {product.name} {variant.quantity}
                  </div>
                  <div className="font-medium text-green-700">
                    {variant.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceComponent;
