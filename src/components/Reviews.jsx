// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Shah",
    rating: 5,
    review:
      "The biryani was absolutely delicious. The flavours were rich, the rice was perfectly cooked, and the portion was generous.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Priya Mehta",
    rating: 5,
    review:
      "Loved the Gujarati thali. Everything tasted fresh and authentic. The service was warm and the overall experience was excellent.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Arjun Patel",
    rating: 4,
    review:
      "Great food and a beautiful atmosphere. The chicken biryani and chaas were my favourites. Definitely coming back again.",
    date: "3 weeks ago",
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#111111] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center" */}

       <div >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
            WHAT OUR GUESTS SAY
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Loved by Our Guests
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-400">
            Good food brings people together. Here is what our guests
            have to say about their experience.
          </p>
        {/* </motion.div> */}
    </div>
        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            // <motion.article
            //   key={review.id}
            //   initial={{ opacity: 0, y: 30 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true, amount: 0.2 }}
            //   transition={{
            //     duration: 0.5,
            //     delay: index * 0.1,
            //   }}
            <article
              className="group relative rounded-3xl border border-[#262626] bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute right-6 top-6 text-[#F59E0B]/20">
                {/* <Quote size={38} fill="currentColor" /> */}
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {/* {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className={
                      starIndex < review.rating
                        ? "fill-[#F59E0B] text-[#F59E0B]"
                        : "text-neutral-700"
                    }
                  />
                ))} */}
              </div>

              {/* Review */}
              <p className="mt-6 min-h-[120px] text-sm leading-7 text-neutral-300">
                “{review.review}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-5">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500">
                    Verified Guest
                  </p>
                </div>

                <span className="text-xs text-neutral-500">
                  {review.date}
                </span>
              </div>
            {/* </motion.article> */}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;