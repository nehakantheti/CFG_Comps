import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './Router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
