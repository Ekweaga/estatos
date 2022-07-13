import logo from './logo.svg';
import './App.css';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
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
     </Switch>
    </div>
  );
}

export default App;
