// import { motion } from "framer-motion";
import dishImages from "../utils/Images/disheshImages";
const galleryImages = [
  {
    id: 1,
    image: dishImages.BiryaniImage,
    alt: "Signature biryani",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image: dishImages.GujratiThali,
    alt: "Gujarati thali",
  },
  {
    id: 3,
    image: dishImages.RestaurantAmbience,
    alt: "Restaurant ambience",
  },
//   {
//     id: 4,
//     image: "/images/gallery-4.jpg",
//     alt: "Freshly prepared food",
//   },
//   {
//     id: 5,
//     image: dishImages.RestaurantImage,
//     alt: "Restaurant interior",
//   },
];

const Gallery = () => {
  return (
    <section className="bg-[#F7F5F2] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        > */}
        <div className=" flex flex-col mx-auto justify-center items-center ">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
            OUR GALLERY
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
            A Taste Before You Arrive
          </h2>

          <p className="mt-4 text-base leading-7 font-semibold text-[#737373]">
            From our kitchen to your table, discover the flavours,
            moments and atmosphere that make us special.
          </p>
        {/* </motion.div> */}
        </div>

        {/* Gallery */}
        <div className="grid auto-rows-[220px] mt-10 border-top grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            // <motion.div
            //   key={item.id}
            //   initial={{ opacity: 0, y: 25 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true, amount: 0.2 }}
            //   transition={{
            //     duration: 0.5,
            //     delay: index * 0.08,
            //   }}
             <div
              className={`group relative overflow-hidden rounded-3xl ${item.className || ""}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

              {/* View text */}
              <div className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#171717] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View
              </div>
            {/* </motion.div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;