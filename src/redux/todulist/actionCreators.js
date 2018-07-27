
let actionCreators ={
	addItem(title){
		 return {
		 	 type:'ADD',
		 	 title
		 }
	},
	changeItem(id){
		 return {
		 	type:'CHANGE',
		 	id
		 }
	}
}

export default actionCreators;