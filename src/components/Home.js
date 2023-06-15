import React, {useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()
  
  
  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if(!token){
      navigate('/signin')
    }

  }, [])


  return (
    <div className='signin template d-flex justify-content-center align-items-center vh-100 bg-success'>
        <div className='form-container p-5 rounded bg-warning' >
   
        
        <h3 className='text-center'>Home</h3>
             <span>Welcome {localStorage.getItem('EMAIL')}</span>
                
                <button className='btn btn-danger'
                onClick={()=>{
                    localStorage.clear()
                    navigate('/signin')
                }}> Logout </button>
                </div>
                </div>
  )
}

export default Home 


   
