import { Link } from 'react-router-dom';
import './App.css';
import Allroutes from './Components/Allroutes';
import Login from './Components/Login';
import Data from './Components/Data';

function App() {

  return (
    <div className="App">
      <Data></Data>
      {/* <Link to={"/login"}>Login</Link>
      <Link to={"/dashboard"}>DashBoard</Link>
      <Allroutes></Allroutes> */}
    </div>
  );
}

export default App;
