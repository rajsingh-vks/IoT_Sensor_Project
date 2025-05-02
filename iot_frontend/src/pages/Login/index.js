import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import axios from "axios";
import { useAuth } from '../../redux/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
    //         const { token, user } = response.data;

    //         // Save token to localStorage or context
    //         localStorage.setItem('token', token);
    //         console.log('Logged in user:', user);
    //         // Redirect or update app state
    //     } catch (err) {
    //         setError('Invalid credentials');
    //     }
    // };

    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/users/login', { email, password });
            const { token, user } = res.data;
            login(token, user);
            navigate('/user-dashboard');
        } catch (err) {
            setError('Login failed');
        }
    };

    

    return (
        <>
            <Header />
            <main className="auth_wrapper">
                <form className="auth-signin card p-5" onSubmit={handleLogin}>
                    <h2 className="text-center mb-4">Sign In</h2>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3 d-flex">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        <Link to="/forgot" className="text-success ms-auto">Forgot Password</Link>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                </form>
            </main>
            <Footer />
        </>
    )
}
export default Login;