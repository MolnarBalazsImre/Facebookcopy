import React from 'react';
import { useState } from 'react';
import Login from './Loginform';
import Register from './Regform'

function Welcome() {
   const [formState,setFormstate] = useState(false)

  return (
    <>
    <div>Welcome</div>
    {formState ? <Login/> : <Register/>}
    </>
    
  )
}

export default Welcome