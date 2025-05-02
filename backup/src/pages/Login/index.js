import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Login() {
    return (
        <>
            <Header />
            <main className="auth_wrapper">
                <form className="auth-signin card p-5">
                    <h2 className="text-center mb-4">Sign In</h2>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3 d-flex">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        <Link to="/forgot" className="text-success ms-auto">Forgot Password</Link>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                </form>
            </main>
            <Footer />
        </>
    )
}
export default Login;