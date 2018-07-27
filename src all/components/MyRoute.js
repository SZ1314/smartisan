import Route, { Component } from 'react'
import { Route, Reairect } from 'react-router-dom'

class MyRoute extends Component {
	render(){
		let { component: Com, path } = this.props;
		return <Route path = {path} render={
			(props)=>{sessionStorage.getItem("user")?<Com {...props}/>:<Reairect to="/login" />}
		}> 
	}
}
export default MyRoute