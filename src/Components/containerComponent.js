import React,{useState} from 'react'
import Count from './count'
import Button from './button'

function  ContainerComponent (){
    const [age, setAge] = useState(25);
    function incrementAge(){
        setAge(age+1);    
    }
    return (
        <div>
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
        </div>
    )  
}

export default ContainerComponent