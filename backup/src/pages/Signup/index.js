import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/authSlice';


import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        city: '',
        role: 'user', // optional: use default if your backend accepts it
    });
    
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser(formData));
    };

    // useEffect(() => {
    //     if (success) {
    //       setFormData({
    //         fullName: '',
    //         email: '',
    //         password: '',
    //         phone: '',
    //         city: '',
    //         role: 'user',
    //       });
    //       // After success, redirect to /signup-success page
    //       navigate('/signup-success');
    //     }
    //   }, [success, navigate]);

    return (
        <>
            <Header />
            <main className="auth_wrapper signupWrapper">
                <form className="auth-signin card p-5" onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="number" className="form-control" id="floatingNumber" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        <label htmlFor="floatingNumber">Phone Number</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingCity" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                        <label htmlFor="floatingCity">City</label>
                    </div>

                    <div className="form-floating mb-2">
                        <select className="form-select" name="role" value={formData.role} onChange={handleChange}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="floatingRole" style={{ paddingTop: '8px' }}>Role</label>
                    </div>

                    <button type="submit" disabled={loading} className="w-100 btn btn-lg btn-success mt-2">
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Signup;
