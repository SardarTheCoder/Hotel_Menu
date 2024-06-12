import React, { useState } from 'react'
import data from './menuApi';
const SingleCard = ({menuData}) => {
 console.log(menuData);
   



  return (
    <>

    {menuData.map((currEle)=>{
      return (<>
       
        <div  className="bg-white  rounded mt-20 p-10 w-1/4" key={currEle.id}>

           
         <div className="logo1">
             <div className="id text-3xl text-orange-400 font-extrabold">{currEle.id}</div>
        <p className='text-orange-300  text-bold mt-3'>{currEle.category}</p>
        <h2 className='text-5xl'>{currEle.name}</h2>
        <p className='text-wrap text-bold mt-4'>
         {currEle.description}
         </p>
        </div>
            <div className="img object-cover mt-5  ">
              <img width={ "80%" } style={{ marginLeft:"3%" }} src={ currEle.image }/> 
            </div>
            <button className="bg-orange-300 text-white font-extrabold p-2
            rounded mx-4  mt-10 w-56">Order</button>
            </div>
       
      
      
      </>  
      )
      
      })}
    
    
    </>
  )
}

export default SingleCard;
