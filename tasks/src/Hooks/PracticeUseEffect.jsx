import React, { useEffect,useState } from 'react'

const PracticeUseEffect = () => {
    const [user,setUser]= useState({
        name:'pradeep',
        age:21
    })
    const ChangeAge=()=>{
        setUser({...user,age:26})
    }
    const [color,setColor]=useState("blue");
    const ChangeColor=()=>{
       setColor("green")
    }
    useEffect(()=>{
        setTimeout(()=>{
            alert("rendered after 3-sec")
        },1000)//componentDidMount--this method will call after the DOM elements rendered

        // return(()=>{
        //     alert("element to be Removed")
        // }

        // )
    },[user])//componentDidUpdate---[]--if we give empty dependency componentDidUpdate will not call
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <button onClick={()=>ChangeAge()}>ChangeAge</button>
        <h1> My Favourite Color is {color}</h1>
        <button onClick={()=>ChangeColor()}>Change Color</button>
    </div>
  )
}

export default PracticeUseEffect
