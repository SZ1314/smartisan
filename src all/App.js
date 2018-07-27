import React, { Component } from 'react'
import {Switch,Route,NavLink,Redirect,Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { View as List } from './pages/list/'
import ToDoList from './components/ToDoList'
import City from './components/city'
import NotFound from "./components/notfound";
import Three from "./components/Three"
import Two from "./components/Two"
const One = () => {
  return (<div>one</div>)
}

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="app">
          <ul>
            <li><NavLink to="/List" activeClassName="selected">List</NavLink></li>
            <li><NavLink to="/ToDoList" activeClassName="selected">ToDoList</NavLink></li>
            <li><NavLink to="/city" activeClassName="selected">City</NavLink></li>
            <li><NavLink to="/one" activeClassName="selected">one</NavLink></li>
            <li><NavLink to="/two" activeClassName="selected">two</NavLink></li>
            <li><NavLink to="/three" activeClassName="selected">three</NavLink></li>
            <li><NavLink to="/three/1" activeClassName="selected">three</NavLink></li>
            <li><NavLink to="/three/2" activeClassName="selected">three</NavLink></li>
          </ul>
          <Switch>
            <Route path="/List" component={List}/>
            <Route path="/ToDoList" component={ToDoList}/>
            <Route path="/city" component={City} />
            <Route path="/one"  component={One} />
            <Route path="/two" component={Two} />
            <Route path="/three/:id?" component={Three} />
            <Redirect from="/" exact to="/one" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Provider>
    )
  }
}


/*import React, {
  Component
} from 'react'

import Item from './components/item'
import Font from './components/font'
import List from './components/list'
import './components/index.scss'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: '',
      getData: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount() {

  }


  render() {
    const list = this.state.list.map((value, index) => {
      return <Item 
                key={index}
                title={value}
                index={index}
                handleDelete={this.handleDelete}/>
    })
    return (
      <div>
        <List/>
        <Font/>
        <ul>
          <input type="text"
                 value={this.state.inputValue}
                 onChange={this.handleChange} 
          />
          <button onClick={this.handleBtnClick}>Submit</button>
          {list}
        </ul>
      </div>
    )
  }

  handleChange(e) {
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
    const list = this.state.list
    list.splice(index, 1)
    console.log(list)
    this.setState({
      list: list
    })
  }

}
*/
