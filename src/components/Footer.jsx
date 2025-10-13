import React from 'react'

const Footer = () => {
  return (
      <footer className="w-auto md:w-[90%]  mx-auto rounded-xl md:flex flex-col h-240 sm:240 sm:flex-col md:h-100 mb-10 mt-15 bg-gray-200">
      <div className=" flex flex-col gap-2 md:flex-row justify-evenly p-2 mt-5 items-center">
                   <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-orange-600 text-4xl font-semibold">🍴Foodie</h1>
                    <p className="text-gray-700 text-2xl font-semibold">Delicious food & groceries delivered to your doorstep.</p>
                    <p className="text-gray-700 text-2xl font-semibold text-center">Download the App Now</p>
                    <div className="flex justify-evenly ">
                      <button className="text-gray-900 text-2xl font-semibold border-2 p-2">Play Store</button>
                      <button className="text-gray-900 text-2xl font-semibold border-2 p-2">Android Store</button>
                    </div>
                   </div>
                   <div className="flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>ContactUs</li>
                        <li>Cart</li>
                   </div>
                   <div className="flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Popular Cities</h2>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Hedrabad</li>
                    <li>Ahmedabad</li>
                   </div>
                       <div className="flex flex-col text-xl text-gray-900 gap-2">
          <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-900">📧 support@foodieexpress.com</p>
          <p className="text-gray-900">📍 Mumbai, India</p>
          <div className="flex flex-col space-x-4 mt-3">
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>WatsApp</p>
          </div>            
        </div>
      </div> 
          <div className="border-t border-gray-900 mt-8 pt-5 text-center text-gray-900">
        © {new Date().getFullYear()} FoodieExpress. All Rights Reserved.
      </div>
      </footer>
  )
}

export default Footer
