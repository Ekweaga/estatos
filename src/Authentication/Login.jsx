import React ,{useState,useRef}from 'react'
import './signup.css'
import { auth } from '../firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";

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
     
     else{
      try{
        await signInWithEmailAndPassword(auth,email,password).then((user)=>{
          console.log(user)
          console.log(user.user.accessToken)
        localStorage.setItem('access', JSON.stringify(user.user.accessToken))
        history.replace("/")
      
      }
        );
       
       setLoading(false)
      
     }
     catch(err){
       console.log(err)
       seterror(err.message)
     }
     setdata({
      email:'',
      password: '',
      
    });
     }
     
   
    
  
    }
  return (
    <div className='signupform'>
    <div className='form'>
        <div>
            <h1>Estatos</h1>
            <p>Welcome, Login</p>
        </div>
        <form onSubmit={login}>
           
            <div> <input type="email" placeholder="Buyer's Email" name="email" onChange={handlechange} value={email}/></div>
            <div> <input type="password" placeholder="Security password" name="password" onChange={handlechange} value={password}/></div>
            <div> <button>Login</button></div>
            <div>Don't have an Account? <span><Link to='/signup' style={{color:'white',textDecoration:'none'}}>Sign Up</Link></span></div>
           
        </form>
    </div>

</div>
  )
}

export default Login
