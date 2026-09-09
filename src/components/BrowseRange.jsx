import { categories } from "../data/products";

export default function BrowseRange() {
  return (
    <section className="py-16 px-6 text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse The Range</h2>
      <p className="text-gray-500 text-sm mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards Grid */}
      <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center cursor-pointer group">

            {/* Image */}
            <div className="overflow-hidden rounded-lg w-64 h-72">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Label */}
            <p className="mt-4 text-lg font-semibold text-gray-800">
              {cat.label}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}