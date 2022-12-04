const initialState=10;

const updateNumber =(state=initialState,action)=>{

    switch(action.type)
    {
            case "INCREMENT":
                return state+action.payload;
            case "DECREMENT":
                return state==0 ? 0: state -action.payload;
            default: return state;

    }

}
export default updateNumber;