import React, { useState, useCallback } from "react"
import Title from "./Title"
import Count from "./Count"
import Button from "./Button"

const ParentComponent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary])
    
    return (
        <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}> Increment Age </Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrementSalary}> Increment Salary </Button>
        </div>
    )
}

export default ParentComponent