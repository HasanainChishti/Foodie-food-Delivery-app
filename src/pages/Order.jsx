// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { useSelector } from 'react-redux';
// import { db } from '../config/firebaseAuth';

// const Order = () => {
//   let  {name}=useParams()
//     console.log(name);
//     const [ord,setOrd]=useState([]);
//     const user = useSelector(state => state.authSlice.userData);
//     console.log(user,"cur user");
//     const fetchOrders = async (userId) => {
//   const ordersRef = collection(db, "users", userId, "orders");
//   const q = query(ordersRef, orderBy("createdAt", "desc"));
//   const snapshot = await getDocs(q);
//   const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     //  setOrd(orders)
//      console.log(orders,"orders");

// //   return orders;
// };

//    useEffect(()=>{
//  fetchOrders(user.uid);
//    },[]);

//   return (
//     <div>
//       <h4>{name}</h4>
//       {/* {
//         ord.map((od)=>(
//            <div className='flex flex-col'>
//             <p>{od.name} {}</p>
//             </div>
//         ))
//       } */}
//     </div>
//   )
// }

// export default Order
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../config/firebaseAuth";
const Order = () => {
  // const  {name}  = useParams();
  // console.log(name,"use p");

  const [ord, setOrd] = useState([]);
  const user = useSelector((state) => state.authSlice.userData);
  console.log(user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user || !user.uid) return;

        const ordersRef = collection(db, "users", user.uid, "orders");
        const q = query(ordersRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrd(orders);
        console.log("Fetched Orders:", orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className=" w-[90%] p-4 mt-10 flex flex-col mx-auto justify-center align-middle ">
      <h4 className="text-4xl  font-semibold mb-4 ml-20  ">My Orders</h4>

      {ord.length === 0 ? (
        <p>No orders yet!</p>
      ) : (
        <div className="space-y-3 p-5 mx-auto">
          {ord.map((od) => (
            <div key={od.id} className="text-black border p-3 rounded-lg  w-[300px]  sm:w-[400px] md:w-[500px] shadow -md  bg-gray-100">
              <p>
                <strong>Order ID:</strong> {od.id}
              </p>
              <p>
                <strong>Total Amount:</strong> ₹{od.totalAmount}
              </p>
              <p>
                <strong>Payment:</strong> {od.paymentMode}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {od.createdAt?.toDate().toLocaleString() || "N/A"}
              </p>

              {/* Example items list */}
              {od.items && od.items.length > 0 && (
                <ul className="list-disc ml-5">
                  {od.items.map((item, idx) => (
                    <>
                      <li key={idx}>
                        {item.name}
                        <span>({item.quantity})</span> — ₹{item.price / 100}
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
