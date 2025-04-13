import logo from './logo.svg';
import "aos/dist/aos.css";
import './App.css';
import './styles/main.scss'
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import AOS from "aos";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
