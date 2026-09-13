// import { motion } from "framer-motion";

const About = () => {
  return (
    // [#F7F5F2]
    <section className="bg-[[#F7F5F2] px-6 py-20 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        {/* <motion.div
      
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        > */}
        <div>
{/* <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-[#F59E0B]/10" /> */}

          <img
            src="/images/restaurant.jpg"
            alt="Our restaurant"
            className="relative h-[420px] w-full rounded-[2rem] object-cover md:h-[500px]"
        /> 
       
</div>
        {/* Content */}
        {/* <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        > */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
            ABOUT OUR RESTAURANT
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#171717] md:text-5xl">
            More than just a meal.
            <br />
            It’s a taste of tradition.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#737373]">
            We bring together the rich flavours of Gujarati cuisine
            and the aromatic tradition of biryani. Every dish is
            prepared with fresh ingredients, authentic spices and
            a passion for serving food that feels truly special.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-3">
            <p className="text-sm font-medium text-[#525252]">
              <span className="mr-2 text-[#F59E0B]">✓</span>
              Fresh ingredients
            </p>

            <p className="text-sm font-medium text-[#525252]">
              <span className="mr-2 text-[#F59E0B]">✓</span>
              Authentic recipes
            </p>

            <p className="text-sm font-medium text-[#525252]">
              <span className="mr-2 text-[#F59E0B]">✓</span>
              Prepared with care
            </p>
          </div>

          {/* CTA */}
          <button className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#171717] px-6 py-3 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-[#171717] hover:text-white">
            Discover Our Story
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        {/* </motion.div> */}
     </div>
      </div>
    </section>
  );
};

export default About;
