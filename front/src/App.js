
import { Router, Switch } from 'react-router-dom';
import Acordeon from './Acordeon';
import './App.css';
import Header from './Header';
import Acordeon from './Acordeon';
import Experiencias from './routes/Experiencias';
import Auth from './user/Auth';


function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <Acordeon>
            <Auth/>
          </Acordeon>
      </div>

      
    </div>

  );
}

export default App;