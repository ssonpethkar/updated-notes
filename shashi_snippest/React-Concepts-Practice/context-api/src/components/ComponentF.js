import React from 'react'
import { UserConsumer } from './userContext'

const ComponentF = () => {
  return (
    <UserConsumer>
        {
            (username) => {
                return <div>Hello {username}</div>
            }
        }
    </UserConsumer>
  )
}

export default ComponentF