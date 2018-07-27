import React,{Component} from "react";

export default class Three extends Component {
	 constructor(props){
	 	super(props);
	 	this.state={
	 		 a:'str'
	 	};
	 }

  componentDidMount(){
  	 // console.log(this.props.match.params.id);
  }
  componentDidUpdate(){
  	console.log(this.props.match.params.id);
  	this.setState({
  		 a: this.state.a+this.props.match.params.id
  	})
  }
  shouldComponentUpdate(nextProps){
  		return nextProps.match.params.id!==this.props.match.params.id;
  }
 render(){
 	  let { id} =this.props.match.params;
 	 return <div>three {this.state.a}</div>
 }

}