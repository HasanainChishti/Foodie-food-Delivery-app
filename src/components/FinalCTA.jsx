import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-[#111111] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#262626] bg-[#181818] px-6 py-16 text-center md:px-12 md:py-20"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#F59E0B]/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
              YOUR TABLE AWAITS
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Ready for something
              <br />
              <span className="text-[#F59E0B]">delicious?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
              Authentic flavours, fresh ingredients and dishes
              made with passion. Come taste what makes us special.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Primary */}
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400">
                Explore Menu

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary */}
              <button className="rounded-full border border-neutral-700 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#111111]">
                Order Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    
  );
};

export default FinalCTA;
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const FinalCTA = () => {
//   return (
//     <section className="bg-[#111111] px-6 py-24">
//       <div className="mx-auto max-w-5xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-[2rem] border border-[#262626] bg-[#181818] px-6 py-16 text-center md:px-12 md:py-20"
//         >
//           {/* Decorative glow */}
//           <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F59E0B]/10 blur-3xl" />

//           {/* Content */}
//           <div className="relative z-10">
//             <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
//               READY TO TASTE?
//             </p>

//             <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
//               Good Food.
//               <br />
//               Good Mood.
//             </h2>

//             <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
//               Your next favourite meal is waiting. Explore our menu
//               and discover flavours made with passion.
//             </p>

//             <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400">
//               Explore Menu

//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FinalCTA;