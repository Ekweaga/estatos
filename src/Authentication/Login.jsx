import React ,{useState,useRef}from 'react'
import './signup.css'
import { auth } from '../firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [data, setdata] = useState({
      email:'',
      password:''
    
    });
    const [loading,setLoading] = useState(false);
    const [error, seterror] = useState(null)
    const {email,password} = data
    const handlechange = (e)=>{
      setdata({...data, [e.target.name]: e.target.value})
    }
    const  login = async (e)=>{
      e.preventDefault();
      setLoading(true)
  
      if(!email || !password ){
        seterror("Fields are empty")
        setLoading(false)
      }
     
     
      try{
         await signInWithEmailAndPassword(auth,email,password);
        setLoading(false)
        history.replace("/upload");
      }
      catch(err){
        console.log(err)
        seterror(err.message)
      }
   
    
  
    }
  return (
    <div className='signupform'>
    <div className='form'>
        <div>
            <h1>Estatos</h1>
            <p>Welcome, Login</p>
        </div>
        <form>
           
            <div> <input type="email" placeholder="Buyer's Email"/></div>
            <div> <input type="password" placeholder="Security password"/></div>
            <div> <button>Login</button></div>
           
        </form>
    </div>

</div>
  )
}

export default Login
