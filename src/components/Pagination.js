
const Pagination = ({ length, postsPerPage, handlePagination, currentPage }) => {
    
    const paginationNumbers = [];
  
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumbers.push(i);
    }
  
    const handleClickPrev =()=>{

    }

    return (
      <div className='pagination'>
        <button 
        className="border border-solid border-gray-200 p-4 m-2 bg-gray-100 hover:bg-gray-300"
        onClick={()=>handleClickPrev()} >prev</button>
        {paginationNumbers.map((pageNumber) => (
          <button key={pageNumber} 
          className={pageNumber == currentPage ? "" : "border border-solid border-gray-200 w-4 p-4 m-2" }
          onClick={()=>handlePagination(pageNumber)}>{pageNumber}</button>
        ))}
        <button 
        className="border border-solid p-4 m-2 bg-gray-100 hover:bg-gray-300"
        onClick={()=>currentPage+1}
        >next</button>
      </div>
      
    );
  };

export default Pagination