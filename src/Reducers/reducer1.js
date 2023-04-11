const intialState=[
    {
        id:1,
        name:"Pitter",
        email:"pitter@gmail.com",
        number:9955221212
    }
]

const reducer1=(state=intialState,action)=>{
      switch(action.type)
      {
        case "ADD":
            state=[...state,action.payload]
            return state;
        
            case "DELETE":
            const deleteuser=state.filter((item)=>item.id !== action.payload && item)  
            state=deleteuser
            return state;  
         default:
            return state;   
      }
      
}

export default reducer1;