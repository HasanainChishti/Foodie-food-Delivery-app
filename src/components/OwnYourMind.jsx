import React from 'react'
import { Link } from 'react-router'
const OwnYourMind = ({onMindData}) => {

    let data1=onMindData.slice(0,(onMindData.length)/2);
  let data2=onMindData.slice((onMindData.length)/2,onMindData.length);
  return (
 
  <div className="w-[80%] container  mx-auto  mb-20">
    <h1 className="text-3xl font-bold m-4">Whats on your mind ?</h1>
    
      <div className="flex flex-row overflow-scroll   md:flex-nowrap  gap-15">
        {
        
        data1?.map((item,index) => (
          <Link to={`/Search/${item?.action?.text}/`} key={index} >

            <div className="rounded-xl w-[170px] h-[300px] flex-shrink-0 ">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId}
              className="w-[150px] h-[250px] object-cover rounded-md" />
              {/* <h1 className="mt-3 text-lg font-semibold text-center">{item?.text}</h1> */}
            </div>
          </Link>
        ))
         }
        {
           data2?.map((item,index) => (
          <Link to={`/Search/${item?.action?.text}/`} key={index} >

            <div className="rounded-xl w-[170px] h-[300px] flex-shrink-0 ">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId}
              className="w-[150px] h-[250px] object-cover rounded-md" />
              {/* <h1 className="mt-3 text-lg font-semibold text-center">{item?.text}</h1> */}
            </div>
          </Link>
        ))
        }
      </div>
    </div>

  )
}

export default OwnYourMind
