import React from 'react'
import { bindActionCreators } from'redux'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction } from './actionCreator'
const Component = (props) => {
	let str = props.inputValue
	return (
		<div>
			<input value={props.inputValue} onChange={props.handleInputChange} type="text"/>
			<button onClick={props.handleSubmit}>提交</button>
			<ul>
				{
					props.list.map((item,index) => {
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		inputValue: state.listReducer.inputValue,
		list: state.listReducer.list,
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleInputChange(e) {
		dispatch(getInputChangeAction(e.target.value))
	},
	handleSubmit(){
		dispatch(getAddItemAction())
	}
})

// const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
