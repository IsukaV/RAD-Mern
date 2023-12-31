import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js';


function App() {
  return (
    <div className="app-background">
      <div className="App">
          <BrowserRouter>
            <Navigation/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="*" element={<Home/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
