import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, CHECKBOX_ITEM } from './actionTypes'

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT,
	value
})

export const getAddItemAction = () => ({
	type: ADD_ITEM
})

export const getDeleteItemAction = (list) => ({
	type: DELETE_ITEM,
	list
})

export const getCheckboxAction = (id) => ({
  type: CHECKBOX_ITEM,
  id
})
/*let actionCreator = {
	getInputChangeAction(value) {
		return {
			type: CHANGE_INPUT,
			value
		}
	},

	getAddItemAction() {
		return {
			type: ADD_ITEM
		}
	},

	getDeleteItemAction(list) {
		return {
			type: DELETE_ITEM,
			list
		}
	},
	getCheckboxAction(id) {
		return {
	  		type: CHECKBOX_ITEM,
			
  			id
		}
	}
}

export default actionCreator
*/