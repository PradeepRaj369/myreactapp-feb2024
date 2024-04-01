import React from 'react'

const Task4 = () => {
  return (
    
    <>
    <form action="" className='form'>
        <label htmlFor="">Name :</label>
        <input type="text" /><br />
        <label htmlFor="">Number :</label>
        <input type="text" /><br />
        <label htmlFor="">email :</label>
        <input type="email" /><br />
        <label htmlFor="">Gender :</label>
        <input type="radio" name='genders' value='male'/>Male<input type="radio" name='genders' value='female'/>Female
        <br />
        <input type="checkbox" name="terms and Condition" id="" /><label>Terms and Condition</label>
        <br />
        <label htmlFor="">Text Area</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <label htmlFor="">Date</label>
        <input type="date" />
        <br />
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </form>
    
    </>
  )
}

export default Task4
