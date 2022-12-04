import { createCheckBox } from "@syncfusion/ej2-react-buttons";
import { useContext, useEffect } from "react";
import { useState } from "react";
import CreateContext from "../../utils/CreateContext";
import ToggleButton from "./ToggleButton";

const Listing=(props)=>{
    console.log("chandan 2",useContext(CreateContext));
    const [selected, setSelected]=useState(false);
    //const [categoriesList,setCategoryList]=useState([]);
    useEffect(()=>{
    props?.data?.status===1 ? setSelected(true) : setSelected(false);
   // setCategoryList()
},[])

return(
    <>
    {props.data.is_category_type===1 ?
            <b>{props?.data?.category_name}</b>
        :
        <b>{props?.data?.category_name +">>>>"+props?.data?.subCategoryName}</b>
        }
    <div>
        <CreateContext.Provider value={props?.data}>

            <ToggleButton 
                selected={selected}
                toggleSelected={()=>{
                setSelected(!selected)
                }}
               

            />
        </CreateContext.Provider>
       
        
           
        <hr/>
    </div>
    
    </>
)

}
export default Listing;