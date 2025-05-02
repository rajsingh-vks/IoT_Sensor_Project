import { Image } from 'react-bootstrap';
import logoImage from '../../assets/logo_final.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Change 50 to any scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={isSticky ? "header sticky" : "header"}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                        <Link to="/" className="d-flex align-items-center col-md-2 text-decoration-none logo">
                            <Image src={logoImage} alt="logoImage" className='bannerImage' height={40} /> 
                            <span>Sensor Home</span>
                        </Link>

                        {/* <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link text-dark px-3">Home</a></li>
                            <li><a href="#" class="nav-link text-dark px-3">About</a></li>
                            <li><a href="#" class="nav-link text-dark px-3">Contact Us</a></li>
                        </ul> */}

                        <div className="col-md-3 text-end">
                            <Link to="/login" className="btn btn-outline-success me-2">Login</Link>
                            <Link to="/sign-up" className="btn btn-success">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header