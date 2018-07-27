import _state from "./state"
import {INC,DEC} from "./const"
var reducer = (state=_state,action)=>{  //纯函数  不能返回随机数 时间戳 不能i/o操作
		let newState = Object.assign({},state);
		if(action.type===INC){

			 newState.n+=action.n;
		}else if(action.type===DEC)
		{
			newState.n-=action.n;
		}
		else if(action.type==='DATA'){
			newState.list=action.data;
		}
		return newState;
}

export default reducer;