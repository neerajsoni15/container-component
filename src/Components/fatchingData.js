import React, {Component} from 'react';
import Axios from 'axios';
import RenderData from './RenderData'

class ContainerComponentFatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
          users: []
        }
      }
      componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(users =>
          this.setState({ users: users.data })
        )
      }
    render(){
        return(
            <RenderData post = {this.state.users}></RenderData>
        )
    }
}

export default ContainerComponentFatch