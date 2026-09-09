import { User, Search, Heart, ShoppingCart } from "lucide-react";
import { Furniro } from "../assets/images";


const navLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Furniro} alt="Furniro" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Furniro
          </span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-poppins text-[16px] font-medium leading-[100%] tracking-[0%] hover:text-[#B88E2F] transition-colors duration-200 "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* User Icon — add onClick for profile/auth */}
          <button aria-label="Account" className="text-gray-700 hover:text-[#B88E2F] transition-colors duration-200">
            <User size={22} />
          </button>

          {/* Search Icon — add onClick for search modal */}
          <button aria-label="Search" className="text-gray-700 hover:text-[#B88E2F] transition-colors duration-200">
            <Search size={22} />
          </button>

          {/* Wishlist Icon — add onClick for wishlist */}
          <button aria-label="Wishlist" className="text-gray-700 hover:text-[#B88E2F] transition-colors duration-200">
            <Heart size={22} />
          </button>

          {/* Cart Icon — add onClick for cart */}
          <button aria-label="Cart" className="text-gray-700 hover:text-[#B88E2F] transition-colors duration-200">
            <ShoppingCart size={22} />
          </button>
        </div>

      </div>
    </header>
  );
}