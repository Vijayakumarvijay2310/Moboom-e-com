import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";


const Body = () => {

    const [productData ,setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [searchcategory,setSearchCategory] = useState();


    useEffect(()=>{
      fetchProductData();
      fetchSearchCategory()
        
    },[])

    const fetchProductData = async () =>{  
        setLoading(true);
      try {
        const data = await fetch("https://dummyjson.com/products")
        const jsonData =await data.json();
        setProductData(jsonData.products);
        setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchSearchCategory =async () =>{
    const data =await fetch("https://dummyjson.com/products/category/laptops");
  
    // setSearchCategory(jsonData);
  }
  // console.log(searchcategory);

  const lastPost =  currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPagePost = productData.slice(firstPost,lastPost);


  
    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
       
    };
   
  return (
    <div>
        <div>
        <select
         className="mt-2 p-2 border border-solid border-gray-200 rounded-lg">
          <option>Select Category</option>
          <option>smartphone</option>
          <option>lapotops</option>
          <option>snekers</option>
        </select>
        </div>
        <div>
            <ProductCard productData={currentPagePost} loading={loading}/>
        </div>
        <div className="flex justify-end">
        <Pagination
         length={productData.length}
         postsPerPage={postsPerPage}
         handlePagination={handlePagination}
         currentPage={currentPage}
        />
        </div>
    </div>
  )
}

export default Body