import React from 'react'

const WhyUs = () => {
  return (
   <section className="bg-orange-400 py-16 px-6 w-[80%] mx-auto hover:scale-105 transition-transform duration-300">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">
    Why Choose Foodify?
  </h2>

  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
        alt="Fast Delivery"
        className="w-16 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">Superfast Delivery</h3>
      <p className="text-gray-600 text-sm">
        Hot meals delivered fresh to your doorstep within minutes.
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
        alt="Fresh Ingredients"
        className="w-16 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">Fresh & Hygienic</h3>
      <p className="text-gray-600 text-sm">
        Every dish prepared with top-quality, fresh ingredients.
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3523/3523063.png"
        alt="Best Offers"
        className="w-16 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">Unbeatable Offers</h3>
      <p className="text-gray-600 text-sm">
        Save more with daily deals and exciting discounts.
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4359/4359963.png"
        alt="Trusted by Thousands"
        className="w-16 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">Trusted by Thousands</h3>
      <p className="text-gray-600 text-sm">
        Loved by over 10,000 happy customers across India.
      </p>
    </div>
  </div>
</section>
  )
}

export default WhyUs
