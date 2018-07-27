import store from "../store"
import actionCreators from "./actionCreator"
let actions ={

	inc(n){
		let action =actionCreators.incAction(n); //拿到action
		store.dispatch(action);  //type INC n 
	},
	dec(n){
		let action =actionCreators.decAction(n); //拿到action
		store.dispatch(action);  //type INC n 
	}
}

export default actions;