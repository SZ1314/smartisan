import {EventEmitter} from "events"

var store = Object.assign({},EventEmitter.prototype,{
     data:{
     	n:5
     },
     getData(){
     	return this.data.n;
     },
     inc(){
     	this.data.n++;
   
     	this.emit("change");
     },
     subs(callback){
     	this.on("change",callback)
     }

})

export default store;