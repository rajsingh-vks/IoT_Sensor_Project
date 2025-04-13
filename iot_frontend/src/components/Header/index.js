import { Image } from 'react-bootstrap';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
                            <Image src={logoImage} alt="logoImage" className='bannerImage' height={40} />
                        </a>

                        {/* <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link text-dark px-3">Home</a></li>
                            <li><a href="#" class="nav-link text-dark px-3">About</a></li>
                            <li><a href="#" class="nav-link text-dark px-3">Contact Us</a></li>
                        </ul> */}

                        <div class="col-md-3 text-end">
                            <Link to="/login" class="btn btn-outline-success me-2">Login</Link>
                            <Link to="/sign-up" class="btn btn-success">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header