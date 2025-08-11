import React, { Component } from 'react'
import HOCFacebook from '../hoc/HOCFacebook';

export class David extends Component {
  render() {
    return (
        <div>
        <h3>Davids's Freind: {this.props.friendCount}</h3>
        <button onClick={this.props.handleFreindCount}>Add Friend</button>
      </div>
    )
  }
}

export default HOCFacebook(David);