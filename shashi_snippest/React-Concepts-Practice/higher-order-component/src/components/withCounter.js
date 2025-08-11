import React, { Component } from 'react'

//  const withCounter = (WrappedComponent) => {
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                // return { count: prevState.count + 1 }
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return (
                <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props} />  // for passing props between components
            )
        }
    }
    return WithCounter
}

export default withCounter