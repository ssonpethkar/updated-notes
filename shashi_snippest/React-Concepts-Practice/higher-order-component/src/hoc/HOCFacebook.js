import React from 'react'

const HOCFacebook = User => {
    class NewUser extends Component {
        state = {
            addFriend: 0
        }

        handleFreind() {
            this.setState({addFriend: this.state.addFriend + 1})
        }

        render() {
            return (
                <div>
                    <User 
                        friendCount={this.state.addFriend}
                        handleFreindCount={this.handleFreind}
                    />
                </div>
            )
        }
    }

    return NewUser;
}

export default HOCFacebook