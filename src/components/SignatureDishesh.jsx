import React from 'react'
import heroSectionImage from "../utils/Images/heroSectionImage.png"
import dishImages from '../utils/Images/disheshImages'

const SignatureDishesh = ({signatureDishes}) => {
  return (
    <section className="bg-[#F7F5F2]  px-6 py-20 md:py-24">
        <div className='flex flex-col mb-12 text-center'>
           <p className='text-sm font-bold tracking-[0.25em] text-[#F59E0B] '>OUR SIGNATURE</p>
           <h2 className='mt-3 text-4xl font-bold tracking-tight text-[#171717] md:text-4xl'>Dishes Worth Coming Back For</h2>
             <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-[#737373]">
    Carefully prepared favourites, made with authentic flavours and fresh ingredients.
  </p>
        </div>
  <div className='max-w-7xl flex bg-[#F7F5F2] mx-auto items-center justify-center gap-3 mt-10 '>
      {
        signatureDishes.map((dish)=>(
            // <div className='flex flex-col gap-2 w-40 h-70 border '>
            //     <img src={dish.image} className='h-30 w-40 object-cover ' alt="" />
            //     <div className='flex flex-col'>
            //         <h2>{dish.name}</h2>
            //         <p>{dish.price}</p>
            //         <p>{dish.description}</p>
            //     </div>
            // </div>
                <div className=" h-100 w-72 group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={dish.image}
        //   alt={name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#171717]">
              {dish.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#737373]">
              {dish.description}
            </p>
          </div>

          <span className="shrink-0 text-lg font-bold text-[#171717]">
            ₹{dish.price}
          </span>
        </div>

        <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] transition-colors duration-300 hover:text-[#d97706]">
          View dish
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
        ))
      }
    </div>
    </section>
  
  )
}

export default SignatureDishesh
