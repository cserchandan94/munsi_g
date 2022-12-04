import axios from "../utils/Axios";
    //post method api calling
     export const postRequestData= async (API_ACTION,body)=>{
        const headers =  
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json'        }
        try{  
        const res=  await axios.post(API_ACTION,body,{headers})
        return res;
        }catch(error)
        {
            return error.message;
        }
       
    }
    //get request
    export const getRequestData= async (API_ACTION)=>{
        try{
        const res=  await axios.get(API_ACTION)
        console.log(JSON.stringify(res))
        return res;
        }catch(error)
        {
            console.log(error.message)
            return error.message;
        }
       
    }

    //put request
    export const putRequestData = async (API_ACTION,body)=>{
        const headers =  
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json'        }
        try{  
        const res=  await axios.put(API_ACTION,body,{headers})
        return res;
        }catch(error)
        {
            return error.message;
        }
       
    }


