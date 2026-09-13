import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer_FoodDel = () => {
  return (
    <footer className="bg-[#111111] text-white ">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl  bg-gradient-to-r from-orange-400  to-white bg-clip-text text-transparent font-bold tracking-wide">
              Zayka
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
              Authentic flavours, fresh ingredients and dishes
              made with passion.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] text-neutral-400 transition-all duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] text-neutral-400 transition-all duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#menu"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Menu
              </a>

              <a
                href="#about"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#gallery"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Visit Us
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#F59E0B]"
                />

                <p className="text-sm leading-6 text-neutral-400">
                  Your Restaurant Address,
                  <br />
                  Ahmedabad, Gujarat
                </p>
              </div>

              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                <Phone size={18} className="text-[#F59E0B]" />
                +91 99999 99999
              </a>

              <a
                href="mailto:hello@restaurant.com"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                <Mail size={18} className="text-[#F59E0B]" />
                hello@restaurant.com
              </a>

            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm  font-semibold tracking-wide text-white">
              Opening Hours
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex justify-between gap-6">
                <span className="text-neutral-400">
                  Monday – Friday
                </span>

                <span className="text-white">
                  11 AM – 11 PM
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-neutral-400">
                  Saturday – Sunday
                </span>

                <span className="text-white">
                  11 AM – 12 AM
                </span>
              </div>

            </div>

            <button className="mt-7 rounded-full bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400">
              Order Now →
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12 md:text-left">

          <p>
            © 2026 Restaurant. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 md:justify-end">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer_FoodDel;