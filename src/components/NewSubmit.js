import {useState}from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const NewSubmit = () => {
  const navigate = useNavigate()
  const [otp,setOtp] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit =()=>{
  console.log(otp,password)
  axios.post('http://localhost:5000/submit-otp',
  {
      otp: otp,
      password: password
     
  })
  .then(res =>{
      console.log(res.data)
      if(res.data.code === 200){
        navigate('/signin')
      }
  }).catch(err=>{
      console.log(err)
  })

 }

  return (
    <div>
          <div className='signin template d-flex justify-content-center align-items-center vh-100 bg-success'>
        <div className='form-container p-5 rounded bg-warning' >
   
        
        <h3 className='text-center'>
             <span>Welcome </span>New password panel</h3>
             <div className='mb-2'>
        <label htmlFor='email'>OTP</label>
        <input 
        value={otp}  onChange={(e)=>{
          setOtp(e.target.value)
      }}
        type='text' placeholder='Enter OTP' className='form-control'/>
         <label htmlFor='email'>New Password</label>
        <input 
        value={password}  onChange={(e)=>{
          setPassword(e.target.value)
      }}
        type='text' placeholder='Enter New Password' className='form-control'/>
    </div>
                
                <button onClick={handleSubmit}
                 className='btn btn-danger'>Change-Password</button>
                </div>
                </div>
      
    </div>
  )
}

export default NewSubmit