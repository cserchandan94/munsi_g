import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { getRequestData } from "../../utils/ApiCall";
import CreateContext from "../../utils/CreateContext";
import '../category/AddCategory.css'
import Listing from "../category/Listing";
import Navbar from "../nav_menu/Navbar";


 const SubCategoryList = () => {
  const [categoryList,setCategoryList]=useState([]);
  

  async function fetchData()
  {
    const response=  await getRequestData('/sub-category-list');
    if(response?.data)
    {
      setCategoryList(response.data)
    }
  }
    useEffect(() =>{
       fetchData();       
      },[] ); 


      const listItems= categoryList.map((categories)=>{   
        return (
          <CreateContext.Provider value={categories}>
            <Listing key={categories.category_id}  data={categories}/>

          </CreateContext.Provider>
        
        )
    });   
  

  return (
    <>
    <Navbar/>
    <div className="category-list">
      <h1>Below Sub Category list available in your shop</h1>
      <div >
        {listItems}
      </div>
    </div>
    </>
  )
}
export default SubCategoryList;