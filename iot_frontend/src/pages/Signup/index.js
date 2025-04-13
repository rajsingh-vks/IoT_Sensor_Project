import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Signup() {
    return (
        <>
            <Header />
            <main className="auth_wrapper">
                <form className="auth-signin card p-5">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingName" placeholder="" />
                        <label for="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating mb-2">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>User Type</option>
                            <option value="1">User</option>
                        </select>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success mt-2" type="submit">Sign Up</button>
                </form>
            </main>
            <Footer />
        </>
    )
}
export default Signup;