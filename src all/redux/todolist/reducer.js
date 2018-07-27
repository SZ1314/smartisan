import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, CHECKBOX_ITEM } from './actionTypes'
import _state from './state'

export default (state = _state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        inputValue: action.value,
        list: [...state.list]
      }
    case ADD_ITEM:
      _state.count++
      return {
        inputValue: '',
        list: [...state.list, {'title': state.inputValue, 'id': _state.count, flag: false }                                                   ]
      }

    case DELETE_ITEM:
      return {
        list: action.list
      }
    case CHECKBOX_ITEM:
      state.list.forEach((item) => {
        if(item.id === action.id) {
          return item.flag = !item.flag
        }
      })
    default :
      return state
  }
}

/*
  var newState = Object.assign({}, _state)
  let reducer = (state=_state,action)=>{
  var newstate = Object.assign({},state);
  if( action.type === CHANGE_INPUT ) {
      newState.inputValue: ation.value,
      list: [...newState.list]
    } else
    if( action.type === CHECKBOX_ITEM ) {
      newState.list.forEach((item)=>{
        if(item.id===action.id){
          return item.flag=!item.flag;
        }
     })
    } else
    if( action.type === CHECKBOX_ITEM ) {
      newState.count++;
      console.log(newState.count)
      newState.list.push({
        flag: false,
        title: state.inputValue,
        id: newState.count
      })
    } else
    if( action.type === DELETE_ITEM ){
      list: action.list
*/



/*import _state from "./state";

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

export default reducer;*/