import React, {
  Component
} from "react"
import ReactDOM from "react-dom"
import './index.scss'
export default class Font extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opa: 1
    }
    this.undo = this.undo.bind(this)
  }
  undo() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }
  componentDidMount() {
    /*var opa = this.state.opa;
    this.timer = setInterval(() => {
      opa -= 0.1
      if (opa < 0) {
        opa = 1
      }
      this.setState({
        opa
      })
    }, 100)*/
  }
  componentWillUnmount() {
    // clearInterval(this.timer)
  }
  render() {
    return (
      <h1 style={{opacity: this.state.opa}}>123123123123</h1>
    )
  }
}