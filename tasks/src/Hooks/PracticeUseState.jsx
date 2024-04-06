import React, { useState } from 'react'

const PracticeUseState = () => {
    // const [color,setColor]=useState("blue");
    // const ChangeColor=()=>{
    //     setColor("green")
    // }
    // const [count,setCount]=useState(0);
    // const Increment=()=>{
    //     setCount(count+1)

    //useState for objects:
    const [user,setUser]=useState({
        name:'pradeep',
        age:21
    })
    const ChangeAge=()=>{
        setUser({...user,age:26})
    }
  return (
    <div>
        {/* <h1> My Favourite Color is {color}</h1>
        <button onClick={()=>ChangeColor()}>Change Color</button> */}
        {/* <h1>{count}</h1>
        <button onClick={()=>Increment()}>Increment</button> */}
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <button onClick={()=>ChangeAge()}>ChangeAge</button>
    </div>
  )
}
export default PracticeUseState;
