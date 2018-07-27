import React,{Component} from 'react'
import pubsubjs from "pubsub-js";
class One extends Component {
	send(){
		pubsubjs.publish("msg","test data 111");
	}
	render(){
		return <div onClick={this.send.bind(this)}>one</div>
	}
}

export default One;