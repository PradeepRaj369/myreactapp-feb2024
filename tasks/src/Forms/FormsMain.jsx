import React, { useState } from 'react'
import Registration from './Registration'
import Login from './Login'
import Todo from './Todo'


const FormsMain = () => {
  // const [isLogin,setIsLogin]=useState(true)
  // const toggleForm=()=>{
  //   setIsLogin(!isLogin);
  // }
  return (
    <>
        {/* {isLogin ? <Login toggle={toggleForm} /> : <Registration toggle={toggleForm} />}  */}
        <Todo />
    </>
  );
}

export default FormsMain
