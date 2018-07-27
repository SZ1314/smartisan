import React,{Component} from "react"
import {Switch,Route,NavLink,Redirect,Link} from 'react-router-dom'
import NotFound from "./notfound";
const Twoone =()=>{
	  return <div>two one</div>
}
const Twotwo =()=>{
	  return <div>two two</div>
}


class Two extends Component{
    
    render(){
    	   console.log(this.props);
    	  let {url} = this.props.match;
    	  return (<div>

              <ul>
             <li><NavLink to={`${url}/one`} activeClassName="selected">twoone</NavLink></li>
             <li><NavLink to={`${url}/two`} activeClassName="selected">twotwo</NavLink></li>
          </ul>
          <Switch>
              
              <Route path="/two/one"  component={Twoone} />
              <Route path="/two/two" component={Twotwo} />

              <Redirect from="/two" exact to="/two/one" />
               <Route  component={NotFound} />

          </Switch>


    	  	</div>)
    }

}

export default Two;