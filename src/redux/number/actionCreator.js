import {INC,DEC} from "./const"
import axios from "axios"
let actionCreators = {
	incAction(n){

		return {
			 type:INC,
			 n
		 }
	},
	asyncIncAction(n){
		 return (dispatch)=>{
		 	 setTimeout(()=>{
               dispatch({
					 type:INC,
					 n
		 		})
		 	 },1500)
		 }
	},
	getList(type){
		  return (dispatch)=>{
		    axios.get('http://localhost:4000/'+type).then((res)=>{
                dispatch({
					 type:'DATA',
					 data:res.data
		 		})

		    })
               
		 	
		 }
	},
	decAction(n){
		return {
			 type:DEC,
			 n
		 }
	}


}

export default actionCreators;