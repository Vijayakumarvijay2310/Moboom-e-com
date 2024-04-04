import React, { useEffect, useRef, useState } from 'react'
import { addData } from '../utils/searchSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

  const [productSearchData,setProductSearchData] = useState();
  const [searchText, setSearchText] =useState();
  const dispatch = useDispatch();
  let searchValue = useRef(null);

  useEffect(()=>{
    fetchData()
  },[])
  
  
  const fetchData =async () =>{
    const data = await fetch("https://dummyjson.com/products/categories");
    const jsonData = await data.json();
    setProductSearchData(jsonData)
  }

  const handleClick = () =>{
    console.log(searchValue);
    let filterBySearch = productSearchData.filter((searchValue)=>{
       return searchValue.toLowerCase().includes(searchValue.current)
    }
    )
    console.log(filterBySearch);

    dispatch(addData(filterBySearch))
  }

  return !productSearchData ? "" : (
   <div className='flex flex-row justify-between mt-4'>
     <div className=' pt-2 font-bold my-2 text-xl'><span className='text-pink-500'>M</span>oBoo<span className='text-pink-500'>M</span></div>
     <div className='flex flex-row justify-between border border-solid border-gray-200 w-[45rem] rounded-lg'>
       <input 
         type='text' 
         ref={searchValue}
         className="p-3 focus:outline-none "
         placeholder='What do you want to buy today?'
         />
       <button onClick={()=>handleClick()}>
       <img
         className='w-10 m-2 p-2'
         alt='search-logo'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5fFmprQQnhP1MwqZ-BSUiBnBlGfMloXEb09j8qut_g&s'
        />
       </button>
     </div>
       <ul className='flex flex-row my-3'>
       <li className='mx-10  text-gray-400 font-bold'>Store</li>
       <li className='mx-10 text-gray-400 font-bold'>Account</li>
       <li className='mx-10 text-gray-400 font-bold'>Wishlist</li>
      <li className='mx-10 font-bold'>Basket🛒</li>
     </ul>
   </div>
  )
}

export default Header