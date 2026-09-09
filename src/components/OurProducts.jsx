import { Share2, ArrowLeftRight, Heart } from "lucide-react";
import { products } from "../data/products";

export default function OurProducts() {
  return (
    <section className="py-16 px-6 text-center bg-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-gray-50 rounded-sm overflow-hidden text-left">

            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              />

              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-4 right-4 ${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {product.badge.text}
                </span>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] font-semibold text-sm px-6 py-2 hover:bg-[#B88E2F] hover:text-white transition-colors duration-200 cursor-pointer">
                  Add to cart
                </button>

                {/* Share / Compare / Like */}
                <div className="flex items-center gap-4 text-white text-xs font-medium">
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 size={13} /> Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowLeftRight size={13} /> Compare
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart size={13} /> Like
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-gray-800">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button className="mt-12 border border-[#B88E2F] text-[#B88E2F] font-semibold px-16 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors duration-200 cursor-pointer">
        Show More
      </button>

    </section>
  );
}