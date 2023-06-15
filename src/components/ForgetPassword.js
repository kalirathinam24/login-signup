import {useState}from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  
  const handleSubmit =()=>{
  console.log(email)
  axios.post('http://localhost:5000/send-otp',{
      email: email,
     
  })
  .then(res =>{
      console.log(res.data)
      if(res.data.code === 200){
        navigate('/otp')
      }else{
        alert('email/ server err')
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
             <span>Welcome </span>Forget password panel</h3>
             <div className='mb-2'>
        <label htmlFor='email'>Email</label>
        <input 
          value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}
        type='text' placeholder='Enter Your Email' className='form-control'/>
        </div>
                
                <button
                 onClick={handleSubmit}
                 className='btn btn-danger'> OTP </button>
         </div>
        </div>
      
    </div>
  )
}

export default ForgetPassword
