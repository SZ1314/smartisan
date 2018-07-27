import {Dispatcher} from "flux"
import store from "./Store"
let dispatcher = new Dispatcher();
dispatcher.register((act)=>{
    if(act.type==='INC'){
    	//改数据
    	console.log("change data")
    	store.inc();
    }
})
export default dispatcher;