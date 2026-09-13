import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Phone,
  Navigation,
} from "lucide-react";

const openingHours = [
  { day: "Monday", time: "11:00 AM – 11:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 11:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 11:00 PM" },
  { day: "Thursday", time: "11:00 AM – 11:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:30 PM" },
  { day: "Saturday", time: "11:00 AM – 11:30 PM" },
  { day: "Sunday", time: "11:00 AM – 11:00 PM" },
];

const Location = () => {
  return (
    <section className="bg-[#F7F5F2] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
            FIND US
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
            Come Dine With Us
          </h2>

          <p className="mt-4 text-base leading-7 text-[#737373]">
            Visit us for authentic flavours, warm hospitality and
            a dining experience worth remembering.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[450px] overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-200"
          >
            {/* Temporary map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#e8e4dd]">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] text-[#F59E0B]">
                  <MapPin size={26} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#171717]">
                  Our Location
                </h3>

                <p className="mt-2 text-sm text-[#737373]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Map label */}
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#171717] shadow-sm backdrop-blur-sm">
              Restaurant Location
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10"
          >

            {/* Address */}
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">
                    Visit Us
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#737373]">
                    123 Food Street, Ahmedabad,
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 border-t border-neutral-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                  <Clock3 size={21} />
                </div>

                <div className="w-full">
                  <h3 className="text-lg font-semibold text-[#171717]">
                    Opening Hours
                  </h3>

                  <div className="mt-4 space-y-3">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-[#525252]">
                          {item.day}
                        </span>

                        <span className="font-medium text-[#171717]">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 border-t border-neutral-200 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#737373]">
                    Call us
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block font-semibold text-[#171717] transition-colors hover:text-[#F59E0B]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F59E0B] hover:text-[#171717]"
            >
              <Navigation
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Get Directions
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;