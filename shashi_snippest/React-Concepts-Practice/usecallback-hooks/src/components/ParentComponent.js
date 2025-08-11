import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // whenever any changes in state all all the components will re-render
    
    // const incrementAge = () => {
    //     setAge = age + 1
    // }

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    // whenever any changes in state all all the components will re-render

    // const incrementSalary = () => {
    //     setSalary = salary + 1
    // }

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

  return (
    <div>
        <Title />
        <Count text='Age' count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent