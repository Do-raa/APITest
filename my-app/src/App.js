import './App.css';
import Api from './components/Api'; 
import HomeScreen from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
             
             <Routes className='App'>
              <Route exact path='/' element={< HomeScreen />}></Route>
              <Route path='/Api' element={< Api />}></Route>
             </Routes> 
      
    </Router>
  );
}

export default App;
