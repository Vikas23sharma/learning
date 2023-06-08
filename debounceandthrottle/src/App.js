
import './App.css';
import Throttleinput from './components/Throttleinput';
import Debounceinput from './components/debounceinput';

function App() {
  return (
    <div className="App">
      <Debounceinput/>
      <Throttleinput/>
    </div>
  );
}

export default App;
