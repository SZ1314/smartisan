import React, {
	Component
} from 'react'
import axios from 'axios'
export default class GetDb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
		}
	}

	componentWillMount() {
		axios.get('http://localhost:3000/users').then((res) => {
			this.setState({
				list: res.data
			})
		})

		axios.get("/mz/v4/api/film/now-playing", {
			params: {
				count: 5,
				page: 1,
				__t: new Date().getTime()
			}
		}).then((res) => {
			console.log(res);
		})
	}

	render() {
		let {
			list
		} = this.state
		return (
			<ul>
				{
					list.map((item) => {
						return <li key={item.id}>{item.name}</li>
					})
				}
      </ul>
		)
	}
}