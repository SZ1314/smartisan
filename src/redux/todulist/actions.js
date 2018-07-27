import actionCreators from "./actionCreators";
import store from "../store"
let actions = {
	 addItem(title){
	 		let act=actionCreators.addItem(title);
	 		store.dispatch(act);
	 },
	 changeItem(id){
	 	 let act=actionCreators.changeItem(id);
	 		store.dispatch(act);
	 }
}

export default actions;