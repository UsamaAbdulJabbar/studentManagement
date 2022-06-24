

  


const INITIAL_STATE = {
    id : '',
    name : '',
    username: "",
    email: "",
    contact: "",
    website: "",
    

};




export default(state=INITIAL_STATE, action)=>{
   
    

   
    if(action.type == "dataUpdated"){
        return{...state,name : action.name };
        
    }
   
    
    return state;
}