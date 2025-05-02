import "aos/dist/aos.css";
import './App.css';
import './styles/main.scss'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import AppRoutes from './routes/AppRoutes';
import AOS from "aos";
import { useEffect } from 'react';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from './redux/AuthContext';
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import DeviceManagment from "./pages/DeviceManagnment";
import Profile from "./pages/Profile";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <AppRoutes /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
              path="/user-dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/device-managnment"
              element={
                <PrivateRoute>
                  <DeviceManagment />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
