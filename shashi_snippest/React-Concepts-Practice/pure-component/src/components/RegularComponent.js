import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log("Regular Component render")
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

// it will render again and again if there is no difference in state 
// after 2 seconds because it always returns true for 
// shouldComponentUpdate lifecycle method

export default RegularComponent