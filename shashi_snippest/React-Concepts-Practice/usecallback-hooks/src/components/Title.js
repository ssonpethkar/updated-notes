import React from 'react'

function Title() {
    console.log('Rendering title component')
  return (
    <div>
        <h2>uceCallback Hook</h2>
    </div>
  )
}

export default React.memo(Title)