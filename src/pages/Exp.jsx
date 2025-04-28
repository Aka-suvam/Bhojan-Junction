import React, { useEffect, useState } from 'react'
import useRestaurant from '../hooks/useRestaurant';
import ResturentCard from '../Components/OnlineResturent/ResturentCard';

 const Exp = () => {


 const [mindCarsoul,topCarsoul,allresturentlist] = useRestaurant();
 const [filter,setFilter]=useState(allresturentlist);



    const handleFilter=()=>{
    const filterlist=allresturentlist.filter((res)=>(res?.info?.
      avgRating===4.4
      ));
      //console.log("jii",filterlist);
      setFilter(filterlist)
    }
 const handlePure=()=>{
 const pureveg=allresturentlist.filter((res)=>res.info.veg===true)
 //console.log(pureveg);
 setFilter(pureveg);
 }

 const handleDel=()=>{
  const del=allresturentlist.filter((res)=>res.info.sla.deliveryTime===44);
  console.log('del',del);
  setFilter(del);
 }

    useEffect(()=>setFilter(allresturentlist),[allresturentlist]);
   useEffect(()=>console.log(filter),[allresturentlist]);


  return (
    <div className='exp'>
      <div className='flex'>
      <div className='btn' onClick={handleDel}>Fast Delevery</div>
      <div className='btn'onClick={handleFilter} >Rating 4.0+</div>
      </div>
     <div  className='btn' onClick={handlePure}>Pure veg</div>
    <div className='reslist'>    
       {filter?.map((prod)=>(<ResturentCard resdetail={prod} key={prod.info.id}/>))}
    </div>
    </div>
  )
}

export default Exp;
