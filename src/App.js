import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./flux/Store"
import actions from "./flux/actions"
import One from "./One"
import Two from "./Two"
import Transition from 'react-addons-css-transition-group'
class App extends Component {
  constructor(props){
    super(props); 
    this.state ={
        n:store.getData(),
        flag:true
    }   
    this.toggle=this.toggle.bind(this);
  }
  toggle(){
     this.setState({
      flag:!this.state.flag
     })
  }
  componentWillMount(){
      store.subs(()=>{
                this.setState({
              n:store.getData()
          })
      })
  }
  render() {
  
    return (
       <div>
         hello flux {this.state.n}
         <button onClick={actions.inc}>change</button>
         <button onClick={this.toggle}>change</button>
          <Transition transitionName={{enter:'slideInLeft',leave:'slideOutRight'}} transitionEnterTimeout={1000} 
          transitionLeaveTimeout={1000}>
        { this.state.flag?
         
            <div className='animated'>
             <One />
             <Two />
           </div>
           :''
         }
         </Transition>
      </div>
    );
  }
}
export default App;
