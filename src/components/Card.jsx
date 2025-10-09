import React from 'react'
import RestCard from './RestCard'
const Card = ({data}) => {
    const RestData=data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("AllResto",RestData);
    

  return (
   <div className="flex flex-wrap w-[80%] mx-auto mt-10 gap-8    align-middle">
         {
            RestData?.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
         }
    </div>
  )
}

export default Card
