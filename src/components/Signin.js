/*import {useState} from 'react'
import './mix.css'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   const handleSubmit =()=>{
    console.log(email,password)
    axios.post('http://localhost:5000/signin',{
        email: email,
        password: password
    })
    .then(res =>{
        console.log(res.data)
        if(res.data.code === 500){
            alert("user not found");
        }
        if(res.data.code === 404){
            alert("password is wrong");
        }
        if (res.data.code === 200) {
            // move to home
            navigate('/')
            localStorage.setItem('TOKEN', res.data.token)
            localStorage.setItem('EMAIL', res.data.email)
            
        }
    }).catch(err=>{
        console.log(err)
    })

   }

   
    return (<>
    <div className='signin template d-flex justify-content-center align-items-center vh-100 bg-primary'>
    <div className='form-container p-5 rounded bg-white ' >
    <form>
    <h3 className='text-center'>Sign In</h3>
    
    <div className='mb-2'>
        <label htmlFor='email'>Email</label>
        <input 
        value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}type='text' placeholder='Enter Your Email'/>
    </div>
    <div className='mb-2'>
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}type='password' placeholder='enter  password' />
    </div>
    <div className='d-grid'>
        <button 
        onClick={handleSubmit}
        className='btn btn-success'>Submit</button>
    </div>
    <p className='text-end mt-2'>
       Don't have a Account? <Link to="/signup" className='ms-2'>Signup</Link>

    </p>
    
    </form>
      </div>
     </div>
     </>
  )
}

export default Signin */


import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/signin',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)

                if (res.data.code === 500) {
                    alert('User Not Found')
                }
                if (res.data.code === 404) {
                    alert('Password is wrong')
                }
                if (res.data.code === 200) {
                    // move to home
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
    <div className='signin template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form-container p-5 rounded bg-warning' >
   
        
    <h3 className='text-center'>Sign in</h3>
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
        className='btn btn-success'>Submit</button>
    </div>
    <p className='text-end mt-2'>
       Don't have an Account<Link to="/signup" className='ms-2'>Signup</Link>

    </p>
    <p className='text-end mt-2'>
       Forget Password..?<Link to="/forget-pass" className='ms-2'>Yes</Link>

    </p>
    
    
      </div>
      </div>
    
        
    
    )
}


export default Signin