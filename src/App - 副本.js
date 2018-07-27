import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import actions from "./redux/number/actions"
import todoactions from "./redux/todulist/actions"
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        num:store.getState().num.n,
        list:store.getState().todo.list,
        c:0
    }
    store.subscribe(()=>{
        this.setState({
           num:store.getState().num.n,
           list:store.getState().todo.list,
           c:store.getState().todo.list.filter((item)=>{
              return item.flag
           }).length
        })
    })
    this.input=this.input.bind(this);
    
  }
  input(e){
     if(e.keyCode===13){
        todoactions.addItem(e.target.value);
        e.target.value="";
     }
     
  }
  change(id){
    todoactions.changeItem(id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.num}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={actions.inc.bind(this,5)}>发出action</button>
          <button onClick={actions.dec.bind(this,2)}>发出action</button>
        </p>
        <input type="text" onKeyUp={this.input} />
          <ul>
             {
                  this.state.list.map((item)=>{
                      return <li key={item.id}>
                <input type="checkbox" defaultChecked={item.flag} onChange={this.change.bind(this,item.id)} />

                      {item.title}</li>
                  })
             }
          </ul>
          选择了{this.state.c}项
      </div>
    );
  }
}

export default App;
