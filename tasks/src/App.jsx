import React from 'react'
import Component2, { Component3 } from './Components/Component2'
import Component1, { Component4 } from './Components/Component1'
import Task1_1 from './Components/task1/Task1_1'
import Task2 from './Components/task1/Task2'
import Task3 from './Components/task1/Task3'
import Task4 from './Components/task1/Task4'
import Task5, {Footer} from './Components/task1/Task5'
import Counter from './task2/Counter'
import Card from './task2/Card'
import Toggle from './task2/Toggle'
import img1 from "./task2/images/card1.jpg"
import img2 from "./task2/images/card2.jpg"
import img3 from "./task2/images/card3.jpg"
import StyledComponent from './task2/StyledComponent'
import CreateAlert from './task2/CreateAlert'
import Countdown from './task2/Countdown'
import Stopwatch from './task2/Stopwatch'
import ChangeButton from './task2/ChangeButton'
import HighlightColor from './task2/HighlightColor'
import Temp from './task2/Temp'
import MainTask4 from './Hooks/MainTask4'
import FormsMain from './Forms/FormsMain'
import ProductList from './Axios/ProductList'
const App = () => {
  return (
    <div>
      {/* <Component1 />
      <Component2 />
      <Component3 />
      <Component4 /> */}

      {/* tasks 1 */}

      {/* <Task5 />
      <Task1_1 />
      <Task2 />
      <Task3/>
      <Task4/>
      <Footer /> */}

      {/* Tasks 2 */}
      {/* <h1>Counter App</h1>  
      <Counter incre={1}/>
      <Counter incre={5}/>
      <Counter incre={10}/>

      <Card imgs={img2} name="Pradeep" gmail="pradeep@gmail.com" />
      <Card imgs={img1} name="Priya" gmail="priya@gmail.com"/>
      <Card imgs={img3} name="karthik" gmail="karthik@gmail.com"/>

    <Temp C={45} F={113}/>
    <Temp C={15} F={15} />
    <Temp C={22} F={22}/>


    <StyledComponent />

    <Toggle /> */}

    {/* <CreateAlert /> */}

    {/* <Stopwatch /> */}

    {/* <ChangeButton /> */}

    {/* <Countdown initialTime={10} />
    <Countdown initialTime={50} />
    <Countdown initialTime={100} /> */}

    {/* <HighlightColor /> */}

    {/* <MainTask4 /> */}
    {/* <FormsMain /> */}

    <ProductList />

    </div>
  )
}

export default App
