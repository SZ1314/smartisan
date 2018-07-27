import React, { Component } from 'react'
import { getInputChangeAction, getCheckboxAction, getAddItemAction, getDeleteItemAction } from './../../redux/todolist/actionCreator'
import store from './../../redux/store'
import TodolistUi from './TodolistUi'

export default class ToDoList extends Component {
	constructor(props){
		super(props)
		this.state = store.getState().todoReducer
		console.log(store.getState())
		this.handleInputChange = this.handleInputChange.bind(this)
		store.subscribe(this.handleStoreChange.bind(this))
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render(){
		return (
			<TodolistUi
				{...this.state}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				handleDelete={this.handleDelete}
				handleCheckboxChange={this.handleCheckb   oxChange}
			/>
		)
	}
	
	handleStoreChange() {
		this.setState(store.getState().todoReducer)
	}

	handleInputChange(e) {
		store.dispatch(getInputChangeAction(e.target.value))
	}

	handleCheckboxChange(id){
		store.dispatch(getCheckboxAction(id))
	}

	handleSubmit() {
		store.dispatch(getAddItemAction())
	}

	handleDelete(list,index) {
		list.splice(index, 1)
		store.dispatch(getDeleteItemAction(list))
	}
}

/*import React, {
	Component
} from 'react'
import Item from './../item'

export default class ToDoList extends Component {
	//类在创建的时候，接受props，将props传递给他的父类
	constructor(props) {
		super(props)
		this.state = {
			inputValue: "",
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	render() {

		const list = this.state.list.map((value, index) => {
			return <Item 
								title={value} 
								key={index}
								index={index}
								handleDelete={this.handleDelete}
						 />
		})
		return (
			<div>
				<input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
				<button onClick={this.handleBtnClick}>提交</button>
				<ul>{list}</ul>
			</div>
		)
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	handleDelete(index) {
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list: list
		})
	}
}*/
