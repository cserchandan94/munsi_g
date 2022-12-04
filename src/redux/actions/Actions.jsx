
export const incNumber = (num)=>{
    return {
        type:"INCREMENT",
        payload:num //whatever you want name in place of payload
    }
};

export const decNumber =(num)=>{
    return{
        type:"DECREMENT",
        payload: num
    }
}
