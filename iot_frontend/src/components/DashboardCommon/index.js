import { Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoImage from '../../assets/logo.png'
import { BsPersonCircle } from "react-icons/bs";

import { MdDashboard } from "react-icons/md";
import axios from 'axios';

function DashboardCommon() {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.fullName) {
            setUserName(user.fullName);
        }
    }, [])

    const truncate = (str, maxLength) => {
        if (!str) return '';
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    };

    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        try {
            await axios.post('http://localhost:3000/api/user/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            window.location.href = '/login';

        } catch (err) {
            console.error('Logout failed:', err.response || err.message);
            alert('Logout failed');
        }
    };

    return (
        <>
            <div className="main-header">
                <div className="logo-header">
                    <Link to="/user-dashboard" className="logo">
                        <Image src={logoImage} alt="logoImage" className='bannerImage' height={40} />
                    </Link>
                </div>
                <nav className="navbar navbar-header navbar-expand-lg">
                    <div className="container-fluid">
                        <div className='ms-auto' style={{ position: 'relative' }}>
                            <div
                                style={{
                                    padding: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <BsPersonCircle size={30} className='me-1' /> {truncate(userName, 5)}
                            </div>

                            {isOpen && (
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        margin: 0,
                                        padding: 0,
                                        border: '1px solid #ccc',
                                        borderTop: 'none',
                                        position: 'absolute',
                                        width: '100%',
                                        backgroundColor: '#fff',
                                        zIndex: 1,
                                    }}
                                >
                                    {/* <li style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
                                        <Link to="/profile"> Profile</Link>
                                    </li> */}
                                    <li style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }} onClick={handleLogout}>
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            <div className="sidebar">
                <div className="scrollbar-inner sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/user-dashboard" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                <MdDashboard />
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/device-managnment" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                <MdDashboard />
                                Device Managnment
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardCommon