import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>First Name : </label>
            <input 
            {... bindFirstName}
                type='text'/>
            </div>
            <div>
            <label>Last Name : </label>
            <input  
                {... bindLastName}
                type='text'/>
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default UserForm