import { useState } from "react";
import { postRequestData } from "../../utils/ApiCall";
import "../category/AddCategory.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../nav_menu/Navbar";




const AddCategory = () => {
  const navigate = useNavigate();

  const initialState = {
    category_name: '',
    status: -1,
  };
  const [category, setCategory] = useState(initialState);

  const redirectPage = (response) => {
    if (response?.status === 200) {
      navigate('/categoryList')
    } else {
      alert(response?.message)
      setCategory(initialState)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(values => ({ ...values, [name]: value }));
  }

  const AddCategoryAPI = async () => {
    const body = {
      "category_name": category.category_name,
      "status": category.status
    }

    const response = await postRequestData('/createCategory', body)
    console.log(JSON.stringify(response?.data))
    if (response?.data) {
      redirectPage(response.data);
    }


  };
  return (
    <>
      <Navbar/>
      
      <div className='center' style={{ backgroundColor: "#999999" }}>

        <div className="inner-content" >
          <h2>Welcome to Munsi G</h2>

          <input
            type="text"
            style={{ padding: "4px", fontSize: "15px", position: "fixed" }}
            placeholder="Enter Your Category Name"
            name="category_name"
            value={category.category_name}
            onChange={handleChange}
          /><br /><br />
          <div>
            <select
              value={category.status}
              onChange={handleChange}
              name="status"
              style={{ padding: "4px", fontSize: "15px" }}
            >
              <option value="-1">Select</option>
              <option value="1">Active</option>
              <option value="0">InActive</option>
            </select>

            <button onClick={() => { AddCategoryAPI() }}
              style={{ marginLeft: "20px", padding: "5px" }} >  Add Category</button>
          </div>
        </div>

      </div>
    </>

  )


}
export default AddCategory;