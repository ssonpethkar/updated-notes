import React, { Component } from 'react'
import MemoComp from './MemoComp';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({name: 'Vishwas'})
        }, 2000);
    }
  render() {
      console.log('******************** Parent Component Renders***********************')
    return (
      <div>
          <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComponent