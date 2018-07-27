import dispatcher from "./Dispather";

let actions={
	  inc(){
	  	  console.log("inc action");
	  	  dispatcher.dispatch({
	  	  	 type:'INC'
	  	  })
	  }
}

export default actions;