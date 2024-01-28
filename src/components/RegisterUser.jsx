import { Link } from "react-router-dom"
import useTitle from "../hooks/useTitle"

const RegisterUser = () => {
    // this will change the document title on top, dynamically
    useTitle('Register User')

    return (
        <main className="container main-login-regi">
            <div className="row justify-content-center align-items-center my-4 px-3 main-login-regi-content">
                <div className="col-md-8 rounded-3 border-top border-4 border-info shadow px-3 py-2 mb-4">
                    <h1 className="h1 mb-4 mt-3 text-center">SIGN UP</h1>
                    <form className="mx-4 row">
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="firstnameInput" className="form-label">Firstname</label></small>
                            <input 
                                type="text" 
                                id="firstnameInput"
                                placeholder="Enter firstname here:"
                                className="form-control mb-1"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="lastnameInput" className="form-label">Lastname</label></small>
                            <input 
                                type="text" 
                                id="lastnameInput"
                                placeholder="Enter lastname here:"
                                className="form-control mb-1"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="birth dateInput" className="form-label">Birthdate</label></small>
                            <input 
                                type="date" 
                                id="birth dateInput"
                                placeholder="Enter birth date here:"
                                className="form-control mb-1"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="usernameInput" className="form-label">Username</label></small>
                            <input 
                                type="text" 
                                id="usernameInput"
                                placeholder="Enter username here:"
                                className="form-control mb-1"
                                autoComplete="off" //to avoid auto suggestion of values from the input
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="pwdInput" className="form-label">Password</label></small>
                            <input 
                                type="password" 
                                id="pwdInput"
                                placeholder="Enter password here:" 
                                className="form-control mb-1"
                                // value={pwd}
                                // onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small><label htmlFor="pwdInput2" className="form-label">Confirm Password</label></small>
                            <input 
                                type="password" 
                                id="pwdInput2"
                                placeholder="Confirm password here:" 
                                className="form-control mb-1"
                                // value={pwd}
                                // onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex">
                            <button 
                                type="submit"
                                className="btn btn-info flex-grow-1 mt-2 text-white"
                                // disabled={!canSignIn}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="text-center fs-6 mt-3 mb-4">
                        Already have an Account? <br />
                        <Link to='/'>Sign In</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default RegisterUser