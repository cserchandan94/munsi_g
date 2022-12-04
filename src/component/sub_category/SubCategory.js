import { useEffect, useState } from "react";
import { postRequestData } from "../../utils/ApiCall";
import "./SubCategory.css"
import { useNavigate } from "react-router-dom";
import { getRequestData } from "../../utils/ApiCall";
import Navbar from "../nav_menu/Navbar";

const SubCategory = () => {
    const navigate = useNavigate();
    const [categoryList,setCategoryList]=useState([]);

    useEffect(()=>{
        fetchData();       
    },[])

    const fetchData = async()=>
    {
        const response=  await getRequestData('/categoryList?status=1');
        if(response?.data)
        {
          setCategoryList(response.data)
        }

    }

    const initialState = {
        category_id: '',
        subCategory_name: '',
        status: -1,
    };
    const [category, setSubCategory] = useState(initialState);

    const redirectPage = (response) => {
        if (response?.status === 200) {
            alert(response?.message)
            navigate('/subCategoryList')
        } else {
            setSubCategory(initialState)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubCategory(values => ({ ...values, [name]: value }));
    }

    const AddCategoryAPI = async () => {
        const body = {
            "category_id": category.category_id,
            "category_name": category.category_name,
            "subCategoryName": category.subCategory_name,
            "status": category.status
        }

        const response = await postRequestData('/create-subCategory', body)
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

                    <select
                        value={category.category_id}
                        onChange={handleChange}
                        name="category_id"
                        style={{ padding: "4px", fontSize: "15px",position: "fixed"}}>
                        <option value="-1">Select Category</option>

                        {categoryList.map(item => (
                            <option key={item.category_id} value={item.category_id}>
                                {item.category_name}
                            </option>
                        ))}

                    </select>

                    <span id="new_line"></span>
                    <input
                        type="text"
                        style={{ marginTop:"10px", width: "16.5vw",padding:"4px", fontSize: "15px", position: "fixed" }}
                        placeholder="Enter SubCategory Name"
                        name="subCategory_name"
                        value={category.subCategory_name}
                        onChange={handleChange}

                    />
                    <span id="new_line"></span>

                    <div >
                        <select
                            value={category.status}
                            onChange={handleChange}
                            name="status"
                            style={{padding:"4px",fontSize: "15px",position: "fixed",marginTop:"20px"}}>
            
                            <option value="-1">Select</option>
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </select>

                        <button
                         onClick={() => { AddCategoryAPI() }}
                            style={{padding:"4px",marginLeft:"100px" ,marginTop:"20px",position:"fixed" }} >  Add SubCategory</button>
                    </div>
                </div>

            </div>
        </>

    )


}
export default SubCategory;