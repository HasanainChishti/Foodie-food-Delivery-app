import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Stored/CartSlice";
import MenuCard from "./MenuCard";
import BiryaniImage from "../utils/Images/BiryaniImage.png"
import dishImages from "../utils/Images/disheshImages";

const OurMenu = () => {
 const categories = [
  "All",
  "Biryani",
  "Starters",
  "Gujarati",
  "Main Course",
  "Drinks",
  "Desserts",
];
   const menuItems = [
  // Biryani
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 249,
    description:
      "Fragrant basmati rice layered with tender chicken and aromatic spices.",
    image:BiryaniImage,
    isVeg: false,
    isPopular: true,
  },
  {
    id: 2,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 249,
    description:
      "Slow-cooked mutton with fragrant basmati rice and rich traditional spices.",
    image: dishImages.MuttonBiryani,
    isVeg: false,
    isPopular: true,
  },
  {
    id: 3,
    name: "Veg Biryani",
    category: "Biryani",
    price: 199,
    description:
      "Aromatic basmati rice cooked with fresh vegetables and flavorful spices.",
    image:dishImages.vegBiryani,
    isVeg: true,
    isPopular: false,
  },
  {
id: 4,
    name: "paneer Biryani",
    category: "Biryani",
    price: 299,
    description:
      "Aromatic basmati rice with tender paneer and herbs.",
    image: dishImages.paneerbiryani,
    isVeg: false,
    isPopular: true,    
  },

  // Starters
  {
    id: 5,
    name: "Chicken Tikka",
    category: "Starters",
    price: 279,
    description:
      "Juicy chicken pieces marinated in spices and grilled to perfection.",
    image: "/images/chicken-tikka.jpg",
    isVeg: false,
    isPopular: true,
  },
  {
    id: 6,
    name: "Paneer Tikka",
    category: "Starters",
    price: 249,
    description:
      "Soft paneer marinated with Indian spices and chargrilled for a smoky flavour.",
    image: "/images/paneer-tikka.jpg",
    isVeg: true,
    isPopular: false,
  },
  {
    id: 7,
    name: "Masala Papad",
    category: "Starters",
    price: 99,
    description:
      "Crispy papad topped with fresh onion, tomato, coriander and spices.",
    image: "/images/masala-papad.jpg",
    isVeg: true,
    isPopular: false,
  },

  // Gujarati
  {
    id: 8,
    name: "Gujarati Thali",
    category: "Gujarati",
    price: 299,
    description:
      "A complete Gujarati meal with dal, kadhi, sabzi, roti, rice and accompaniments.",
    image: "/images/gujarati-thali.jpg",
    isVeg: true,
    isPopular: true,
  },
  {
    id: 9,
    name: "Khaman",
    category: "Gujarati",
    price: 89,
    description:
      "Soft and fluffy steamed Gujarati snack topped with mustard and coriander.",
    image: "/images/khaman.jpg",
    isVeg: true,
    isPopular: false,
  },
  {
    id: 10,
    name: "Dhokla",
    category: "Gujarati",
    price: 99,
    description:
      "Light and fluffy steamed dhokla served with green chutney.",
    image: "/images/dhokla.jpg",
    isVeg: true,
    isPopular: false,
  },

  // Main Course
  {
    id: 11,
    name: "Butter Chicken",
    category: "Main Course",
    price: 329,
    description:
      "Tender chicken simmered in a rich, creamy tomato-based gravy.",
    image: "/images/butter-chicken.jpg",
    isVeg: false,
    isPopular: true,
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 279,
    description:
      "Soft paneer cooked in a creamy tomato gravy with aromatic spices.",
    image: "/images/paneer-butter-masala.jpg",
    isVeg: true,
    isPopular: false,
  },

  // Desserts
  {
    id: 13,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 99,
    description:
      "Soft milk-solid dumplings soaked in warm sugar syrup.",
    image: "/images/gulab-jamun.jpg",
    isVeg: true,
    isPopular: true,
  },
  {
    id: 14,
    name: "Shrikhand",
    category: "Desserts",
    price: 129,
    description:
      "Creamy strained yogurt dessert flavoured with saffron and cardamom.",
    image: "/images/shrikhand.jpg",
    isVeg: true,
    isPopular: false,
  },

  // Drinks
  {
    id: 15,
    name: "Masala Chaas",
    category: "Drinks",
    price: 79,
    description:
      "Refreshing spiced buttermilk with roasted cumin and fresh coriander.",
    image: "/images/chaas.jpg",
    isVeg: true,
    isPopular: true,
  },
  {
    id: 16,
    name: "Sweet Lassi",
    category: "Drinks",
    price: 99,
    description:
      "Thick creamy yogurt drink blended with a touch of sweetness.",
    image: "/images/lassi.jpg",
    isVeg: true,
    isPopular: false,
  },
];
const dispatch = useDispatch()
  const [selectedCat, setSelectedCat] = useState("Biryani");
    let selectedMenuItems = [];
    selectedMenuItems = menuItems.filter((items) => items.category === selectedCat)
    // const cnt = useSelector((state)=> state.items.qu)
  return (
    <section className="bg-[#111111] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#F59E0B]">
            OUR MENU
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Something for Every Craving
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Explore our selection of freshly prepared dishes, crafted with
            authentic flavours.
          </p>
        </div>
        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            // <div>
            <button
              className={`rounded-full px-5 py-2.5 text-sm 
             ${selectedCat == cat ? "bg-[#F59E0B] text-slate-900 font-semibold" : "border border-[#262626] text-neutral-400 font-medium transition-colors hover:border-neutral-600 hover:text-white"}  `}
              onClick={() => setSelectedCat(cat)}
            >{cat}</button>
            // </div>
          ))}
        </div>
        {/* <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#111111]">
            Biryani
          </button>

          <button className="rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white">
            Starters
          </button>

          <button className="rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white">
            Main Course
          </button>

          <button className="rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white">
            Drinks
          </button>

          <button className="rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white">
            Desserts
          </button>
        </div> */}
        {/* Menu items */}
        <div className="mt-12 space-y-4">
          {
           selectedMenuItems.map((item)=>(
//  <article className="flex items-center gap-4 rounded-2xl border border-[#262626] bg-[#181818] p-4 transition-all duration-300 hover:border-neutral-700">
//             <img
//               src={item.image}
//               alt="Chicken Biryani"
//               className="h-20 w-20 shrink-0 rounded-xl object-cover"
//             />

//             <div className="min-w-0 flex-1">
//               <h3 className="font-semibold text-white">{item.name}</h3>

//               <p className="mt-1 text-sm text-neutral-400">
//                {item.description}
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col items-end gap-3">
//               <span className="font-semibold text-white pr-4">₹{item.price}</span>

//               <button className="rounded-full bg-[#F59E0B] px-4 py-1.5 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:scale-105">
//                 + Add
//               </button>
//             </div>
        

//           </article>

      <MenuCard item={item}></MenuCard>
           
           ))
         
}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
