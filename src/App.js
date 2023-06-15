import './App.css';
import  React  from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';


function App() {
  return (
   <BrowserRouter>
   <Routes>
 
    <Route path='/signup' element={<Signup/>}/>
   
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/forget-pass' element={<ForgetPassword/>}/>
    <Route path='/otp' element={<NewSubmit/>}/>
   
    <Route path='/' element={<Home/>}/>
    

   </Routes>
    
   </BrowserRouter>
  );
}

export default App;
