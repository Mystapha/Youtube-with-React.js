import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbara from './components/Navbara';
import Main from './components/Main';
import Suggession from './components/Suggession';
import Liste from './components/Liste'
import Explication from './components/Explication';

function App() {
  return (
    <div className="App">
    <Navbara/>
    <div className="videoapp">
    <Main/>
    <Suggession/>
    </div>
    <Liste/>
     </div>
  )
}

export default App
