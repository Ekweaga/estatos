import React ,{useState,useRef}from 'react'
import './signup.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";

function Signup() {
    const history = useHistory();
    const [loading,setLoading] = useState(false);
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null)
    const [data, setdata] = useState({
      email:'',
      password:'',
      name:''
    });
    const {email,password,name} = data
 const handlechange = (e)=>{
   setdata({...data, [e.target.name]: e.target.value})
 }
 const  signup = async (e)=>{
    e.preventDefault();
    setLoading(true)

    if(!email || !password || !name){
      seterror("Fields are empty")
      setLoading(false)
    }
    if(password.length < 6){
      seterror("Password characters must be greater than 6")
      setLoading(false)
    }
   else{
    try{
        await createUserWithEmailAndPassword(auth,email,password);
       setLoading(false)
       setsuccess("Your Account is created successfully")
       setdata({
         email:'',
         password: '',
         name:''
       });
       seterror(null)
      
     }
     catch(err){
     seterror(err.message)
     console.log(err)
     setLoading(false)
     }
   }
   
 
  

  }
  return (
    <div className='signupform'>
        <div className='form'>
            <div>
                <h1>Estatos</h1>
                <p>Create buyer's account</p>
            </div>
            <form onSubmit={signup}>
                <div> <input type="text" placeholder="Buyer's Name" onChange={handlechange} value={name} name="name"/></div>
                <div> <input type="email" placeholder="Buyer's Email" onChange={handlechange} value={email} name="email"/></div>
                <div> <input type="password" placeholder="Security password" onChange={handlechange} value={password} name="password"/></div>
                <div>
              {error?<p style={{color:'crimson'}}>{error}</p>:''}
              {success ? <p>{success}</p>: ''}
            </div>
                <div> <button>{loading ? "CREATING...." :"SIGN UP"}</button></div>
                <div>Already have an account? <span><Link to='/signin' style={{color:'white',textDecoration:'none'}}>Login</Link></span></div>
               
            </form>
        </div>

    </div>
  )
}

export default Signup