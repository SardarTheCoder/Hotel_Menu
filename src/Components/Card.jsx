import React, { useState } from 'react'
import './Card.css'
import SingleCard from "./SingleCard"
import data from './menuApi'



const Card = () => {

  


      
  const [menuData,setData] = useState(data);
      const filterData = (category) =>{
          const updatedList=data.filter((currElem)=>{
            return currElem.category=== category;
          })
          setData(updatedList);
      }


     

  return (
    <>
      <nav className='bg-white mt-10 w-2/4 rounded-sm ml-[25%] cursor-pointer '> 
        <ul className='flex p-7 h-10 gap-10 text-xl text-orange-300  items-center justify-center
         font-serif font-extrabold'>
          <button className='hover:text-rose-800 hover:underline hover:text-xl hover:transition-all' onClick={()=>filterData("Breakfast")}>Breakfast</button>
          <button className='hover:text-rose-800 hover:underline hover:text-xl hover:transition-all'  onClick={()=>filterData("Evening")}>Evening</button>
          <button className='hover:text-rose-800 hover:underline hover:text-xl hover:transition-all'  onClick={()=>filterData("Lunch")}>Lunch</button>
          <button className='hover:text-rose-800 hover:underline hover:text-xl hover:transition-all'  onClick={()=>filterData("Dinner")}>Drinner</button>
          <button className='hover:text-rose-800 hover:underline hover:text-xl hover:transition-all'  onClick={menuData}>All</button>
          </ul>
          </nav>

          <div className=' flex p-8 gap-10 flex-wrap justify-center'>
            
           <SingleCard menuData={menuData} />
            </div>


          
    </>
  )
}

export default Card;