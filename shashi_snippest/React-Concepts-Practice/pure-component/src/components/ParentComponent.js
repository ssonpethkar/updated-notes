import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {
// class ParentComponent extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: "Vishwas"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Vishwas"
            })
        }, 2000)
    }

    render() {
        console.log("************************** Parent Component render *****************************")
        return (
            <div>
                ParentComponent
                <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent