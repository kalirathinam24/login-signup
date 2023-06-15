import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'


const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   const handleSubmit =()=>{
    console.log(email,password)
    axios.post('http://localhost:5000/signup',{
        email: email,
        password: password
    })
    .then(res =>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err)
    })

   }
 
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form-container p-5 rounded bg-warning' >
    <form>
    <h3 className='text-center'>Sign up</h3>
    
    <div className='mb-2'>
        <label htmlFor='email'>Email</label>
        <input 
        value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}type='text' placeholder='Enter Your Email' className='form-control'/>
    </div>
    <div className='mb-2'>
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}type='password' placeholder='Enter Your Password' className='form-control'/>
    </div>
    <div className='d-grid'>
        <button 
        onClick={handleSubmit}
        className='btn btn-danger'>Submit</button>
    </div>
    <p className='text-end mt-2'>
       Already Registerd<Link to="/signin" className='ms-2'>Signin</Link>

    </p>
    
    </form>
      </div>
     </div>
  )
}

export default Signup


