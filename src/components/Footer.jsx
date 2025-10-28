import React from 'react'

const Footer = () => {
  return (
      <footer className="w-auto md:w-[90%]  mx-auto rounded-xl md:flex flex-col h-240 sm:240 sm:flex-col md:h-100 mb-10 mt-15 bg-gray-200">
      <div className="w-auto flex flex-col gap-2 md:flex-row justify-evenly p-2 mt-5 items-center">
                   <div className=" w-auto flex flex-col gap-4 p-2">
                    <h1 className="text-orange-600 text-4xl font-semibold">🍴Foodie</h1>
                    <p className="text-gray-700 text-2xl font-semibold">Delicious food  delivered to your doorstep.</p>
                    <div>
                       <label htmlFor="offer" className='text-xl font-semibold text-gray-800'>Get Excluseve Offer</label>
                     <input type="email" id='offer' placeholder='Enter your Email' className=' p-3 bg-white shadow-md rounded-2xl w-full' />
                    </div>
                     
                   </div>
                   <div className=" w-auto flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>ContactUs</li>
                        <li>Cart</li>
                   </div>
                      <div className=" w-auto flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
                        <li>WatsApp</li>
                        <li>FaceBook</li>
                        <li>Instagram</li>
                        <li>Github</li>
                   </div>
                   {/* <div className="w-auto flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Popular Cities</h2>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Hedrabad</li>
                    <li>Ahmedabad</li>
                   </div> */}
                       {/* <div className="w-auto flex flex-col text-xl text-gray-900 gap-2">
          <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-900">📧 support@foodieexpress.com</p>
          <p className="text-gray-900">📍 Mumbai, India</p>
          <div className="flex flex-col space-x-4 mt-3">
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>WatsApp</p>
          </div>            
        </div> */}
      </div> 
          <div className="border-t border-gray-900 mt-8 pt-5 text-center text-gray-900">
        © {new Date().getFullYear()} FoodieExpress. All Rights Reserved.
      </div>
      </footer>
  )
}

export default Footer
