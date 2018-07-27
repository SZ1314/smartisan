import React,{Component} from 'react'
import pubsubjs from "pubsub-js";
class Two extends Component {
	constructor(props){
		super(props);
		this.state={
			str:'default'
		}
	}
	componentWillMount(){
		pubsubjs.subscribe("msg",(event,data)=>{
			console.log(event,data);
			this.setState({
				str:data
			})
		})
	}
	render(){
		return <div>two{this.state.str}</div>
	}
}

export default Two;