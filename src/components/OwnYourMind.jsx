import React from 'react'
import { Link } from 'react-router'
const OwnYourMind = ({onMindData,handleSearchDish}) => {

    let data1=onMindData.slice(0,(onMindData.length));
    let topDish=[];
     for(let i=0;i<8;i++)
     {
      let rand=Math.floor(Math.random()*(onMindData.length-1))
        topDish.push(onMindData[rand]);
     }
     console.log(topDish,"topD");
     
  // let data2=onMindData.slice((onMindData.length)/2,onMindData.length);
  return (
 
  <div className="w-full md:w-[80%] container  mx-auto mb-20 md:mx-auto ">
    <h1 className="text-4xl font-serif mb-5 text-gray-600 p-2 " id='menu'>Explore our Menu</h1>
    
      <div className="w-full grid grid-cols-1 place-items-center mx-auto sm:grid-cols-2 sm:gap-x-0 sm:gap-10  md:grid-cols-3 md:gap-x-0   lg:grid-cols-4 lg:gap-x-0  md:mx-auto gap-2   p-2"> 
        {
        
        data1?.map((item,index) => (
          <Link to={`/Search/${item?.action?.text}/`} key={index} >

            <div onClick={()=>handleSearchDish(item.action.text)} className="w-[200px] h-[260px] rounded-xl  flex-shrink-0  bg-gray-200 shadow-md hover:shadow-md text-amber-200 hover:border-amber-200">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId}
              className="w-[200px] h-[250px] object-cover rounded-md p-2" />
              {/* <h1 className="mt-3 text-lg font-semibold text-center">{item?.text}</h1> */}
            </div>
           </Link>
        ))
         }
      
      </div>
    
        <h1 className="text-4xl font-serif m-2 mt-20  text-gray-800 " id='topDish'>⭐Top trending dishesh</h1>
<div className="w-[85%]   mt-20 flex flex-col mx-auto gap-20 items-center  sm:flex-row sm:flex-nowrap sm:mx-auto sm:overflow-x-scroll md:flex-nowrap md:mx-auto md:overflow-x-scroll md:gap-20 ">
        {
        
        topDish?.map((item,index) => (
          <Link to={`/Search/${item?.action?.text}/`} key={index} >

            <div onClick={()=>handleSearchDish(item.action.text)} className="relative w-[220px] h-[240px] rounded-xl   bg-gray-300 hover:shadow-md text-amber-200 hover:border-amber-200 ">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId}
              className="w-[210px] h-[240px] object-cover p-1 " />
              {/* <h1 className="mt-3 text-lg font-semibold text-center">{item?.text}</h1> */}
              <span className='absolute top-2 left-2 text-2xl'>⭐</span>
            </div>
           </Link>
        ))
         }
      
      </div>
      
 
    </div>

  )
}

export default OwnYourMind
