import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Componenet render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

// it will render once if there is no defference in state and props 
// because it extends recat.PureComponent 
// which uses shouldComponentUpdate with a shallow props and state comparison
// ** if there is a difference is state, it will do shallow comparison with state and props
// and it will re-render

// PureComponent is mostly used to avoid performance hit 
// and give sompe performance boost to our application
export default PureComp