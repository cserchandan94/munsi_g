import { useContext } from 'react';
import { useState } from 'react';
import { putRequestData } from '../../utils/ApiCall';
import CreateContext from '../../utils/CreateContext';
import '../category/ToggleButton.css'
const ToggleButton =(props)=>{
    const { selected, toggleSelected} = props;
    const [isActive, setIsActive] = useState(false);

    let {category_id,status,is_category_type,subCategoryId}=useContext(CreateContext)
    const categories=useContext(CreateContext);
    console.log("chandan::::",categories)
    const updateCategoryStatus=async ()=>{
       let body={};
       if(is_category_type===1)
       {
        body={
          "category_id":category_id,
          "status": status==1 ? 0 : 1
        }
       }else{
        body={
          "subCategoryId":subCategoryId,
          "status": status==1 ? 0 : 1
        }
       }
       if(status===1){
          categories.status=0;
       }else{
        categories.status=1;
       }
  
       const response=await putRequestData('/updateCategoryStatus', body)
       if(response?.data)
       {
          console.log(response?.data?.message);


       }
    }
    const handleClick = async ()=>{
     setIsActive(toggleSelected)
     console.log("Hello:::1->"+category_id+":::::::"+status)
      updateCategoryStatus();
    }

    return(
    <>
   <div className="toggle-container" onClick={handleClick}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "Active" : "InActive"}
        </div>
      </div>
    </>
    )
}
export default ToggleButton;