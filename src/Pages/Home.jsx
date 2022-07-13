import React, {useState} from 'react'
import Login from '../Authentication/Login'
import './home.css'
import {Link} from 'react-router-dom';
import Homepage from './Homepage';

function Home() {
  const [access, setaccess] = useState(null)
  const token = JSON.parse(localStorage.getItem('access'))

  return (
    <div>
      {token ? <div>
        You have to login or create an account before you can access this page. <Link to="/signin">login</Link>
        </div> : <div><Homepage/>
          </div>}
    </div>
  )
}

export default Home