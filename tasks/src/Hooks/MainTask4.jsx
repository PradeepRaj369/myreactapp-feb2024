import React from 'react'
import PracticeUseState from './PracticeUseState'
import PracticeUseEffect from './PracticeUseEffect'
import CounterApp from './CounterApp'
import DarkModeToggle from './DarkModeToggle'
import Todo from './Todo'
import Accordion from './Accordion'
import CountDown from './CountDown'
import ComponentUnmount from './ComponentUnmount'


const MainTask4 = () => {
  return (
    <>
    {/* <PracticeUseState /> */}
    {/* <PracticeUseEffect /> */}
    <h1>Counter App</h1>
    <CounterApp inc={1} />
    <CounterApp inc={5} />
    <CounterApp inc={10} />
    <DarkModeToggle />
    <Todo />
    {/* <Accordion /> */}
    <CountDown initialTime={10} />
    <CountDown initialTime={50} />
    <CountDown initialTime={100} />
    <ComponentUnmount />
    </>
  )
}

export default MainTask4
