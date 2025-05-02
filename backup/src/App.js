import "aos/dist/aos.css";
import './App.css';
import './styles/main.scss'
import { Route, BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
// import AppRoutes from './routes/AppRoutes';
import AOS from "aos";
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignupSuccess from './pages/SignupSuccess';
import Signup from './pages/Signup';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <AppRoutes /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
