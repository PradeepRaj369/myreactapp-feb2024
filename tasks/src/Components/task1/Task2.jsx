import React from 'react'
import img1 from "./images/dhoni.jpg"
const Task2 = () => {
  return (
    <>
    <h1>Text Formatting:</h1>
    <p><u>Lorem ipsum dolor sit amet consectetur adipisicing elit.</u>
    <s> Ipsum error, esse possimus dolorem velit beatae nostrum id </s> <b> reprehenderit 
        fugit neque magnam vitae.</b><i>
        Beatae odio unde laboriosam, quis sequi ex!</i></p>
    <a href="https://www.amazon.in/s?k=amazon+prime&adgrpid=1322714101714665&hvadid=82669897711050&hvbmt=bb&hvdev=c&hvlocphy=158298&hvnetw=o&hvqmt=b&hvtargid=kwd-82670518517893%3Aloc-90&hydadcr=5621_2377279&tag=msndeskstdin-21&ref=pd_sl_f6wf1fn58_b" target='blank'>Google</a>
    <div className="lists">
        <ul>
            <li>Dhoni</li>
            <li>Virat</li>
            <li>Rohit</li>
        </ul>
    </div>
    <img src={img1} alt="" />
    </>
  )
}

export default Task2
