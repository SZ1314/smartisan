import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'

export default class City extends Component {

	constructor(props){
		super(props)
		this.state = {
		  alp: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      hot: ["北京", "上海", "广州", "深圳"],
      allCity: []
		}
		this.filterCity = this.filterCity.bind(this)
		this.handleCityClickRolling = this.handleCityClickRolling.bind(this)
	}

	componentWillMount(){
		axios.get('/mz/v4/api/city', {
	      params: {
	        __t: new Date().getTime(),
	      }
	    })
	    .then((res) => {
	      const data = res.data.data
	      this.setState({
	      	allCity: data.cities
	      })
	    })
	    .catch((error) => {
	    	console.log(error)
	    })
	}
	
	filterCity(n){
    return this.state.allCity.filter((item) => {
      return item.pinyin.substr(0, 1) === n
    })
	}
  handleCityClickRolling(e) {
    this.target = e.target
    const name = this.target.innerHTML
    document.documentElement.scrollTop = this.$refs[name][0].offsetTop - 45
  }

	render() {
		let { hot, alp } = this.state
		return (
			 <div className="city">
		    <h4>GPS定位你所在的城市</h4>
		    <ul>
		      <li title="上海" className="gps">上海</li>
		    </ul>
		    <h4>热门城市</h4>
		    <ul>
		    	{
						hot.map((item, index) => {
							return <li title={item} key={index}>{item}</li>
						})
		    	}
		    </ul>
		    <h4>按字母排序</h4>
		    <ul>
		      {
						alp.map((item, index) => {
							return <li onClick={this.handleCityClickRolling} title={item} key={index}>{item}</li>
						})
		    	}
		    </ul> 
				<dl>
				{
				 	alp.map((item, index) => {
				 	return(
				 		<dt key={index}>
			        <h4 ref={item}>{item}</h4>
			        <ul>
			       		{
									this.filterCity(item).map((a,index)=>{
										return <li title={a.name} key={a.id}>{a.name}</li>
									})
			       		}
			        </ul>
			      </dt>
			      )
				  })
				}
				</dl>
		    <div className="selector">
			      {
							alp.map((item, index) => {
								return <h5 className="selector-item" key={index}>{item}</h5>
							})
			    	}
		    </div>
		  </div>
		)
	}
}
