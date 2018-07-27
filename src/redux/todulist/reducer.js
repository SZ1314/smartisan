import _state from "./state";

let reducer = (state=_state,action)=>{
	var newstate = Object.assign({},state);
    if(action.type==="ADD"){
    	newstate.count++;
    	 newstate.list.push({
             flag:false,
             title:action.title,
             id:newstate.count
    	 })
    }
    else if(action.type==="CHANGE"){
    	 newstate.list.forEach((item)=>{
    	 	 if(item.id===action.id){
    	 	 	item.flag=!item.flag;
    	 	 }
    	 })
    }
	return newstate;
}

export default reducer;