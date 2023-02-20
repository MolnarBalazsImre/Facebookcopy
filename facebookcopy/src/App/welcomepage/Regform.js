import React from 'react'

function Regform(){
  return (
    <form>
        <input type='text' placeholder='Firstname'/><br/>
        <input type='text' placeholder='Lastname'/><br/>
        <input type='email'placeholder='email'/><br/>
        <input type='text' placeholder='password'/><br/>
        <input type='date' /><br/>
        Man <input type='checkbox'/> Women <input type='checkbox'/> Custom <input type='checkbox'/>
    </form>
  )
}

export default Regform