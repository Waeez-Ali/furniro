import { Hero } from "../assets/images";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Hero Image — full width */}
      <img
        src={Hero}
        alt="Furniro living room"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Right side cream card */}
      <div className="absolute inset-0 flex items-center justify-end pr-16">
        <div
          className="bg-[#FFF3E3] px-12 py-14 max-w-sm w-full"
          style={{ borderRadius: "2px" }}
        >
          {/* Eyebrow label */}
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
            New Arrival
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#B88E2F] leading-tight mb-4">
            Discover Our <br /> New Collection
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          {/* CTA Button */}
          <button className="bg-[#B88E2F] text-white text-sm font-semibold px-10 py-4 hover:bg-[#9a7526] transition-colors duration-200 tracking-wide cursor-pointer">
            BUY NOW
          </button>
        </div>
      </div>

    </section>
  );
}