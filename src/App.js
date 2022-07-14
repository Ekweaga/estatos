import logo from './logo.svg';
import './App.css';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import NProgress from 'nprogress'
import Sale from './Pages/Sale';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/signin' exact>
        <Login/>
      </Route>
      <Route path='/signup' exact>
        <Signup/>
      </Route>
      <Route path="/sale" exact>
        <Sale/>
      </Route>
      <Route path='/detail/:id' exact>
        <Detail/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
