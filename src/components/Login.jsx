import { Link } from "react-router-dom"

const Login = () => {
    return (
        <main className="container main-login-regi">
            <div className="row justify-content-center align-items-center main-login-regi-content px-3">
                <div className="col-md-4 rounded-3 border-top border-4 border-info shadow px-3 py-2">
                    <h1 className="h1 mb-4 mt-3 text-center">SIGN IN</h1>
                    <form className="mx-4">
                        <div className="mb-3">
                            <small><label htmlFor="usernameInput" className="form-label">Username</label></small>
                            <input 
                                type="text" 
                                id="usernameInput"
                                placeholder="Enter username here:"
                                className="form-control mb-1"
                                // ref={userRef}
                                // autoComplete="off" //to avoid auto suggestion of values from the input
                                //spread userAttribs (attributeObj) from custom hook useInput
                                // {...userAttribs}
                                required
                            />
                        </div>
                        <div className="mb-3">
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
                        <div className="d-flex">
                            <button 
                                type="submit"
                                className="btn btn-info flex-grow-1 mt-2 text-white"
                                // disabled={!canSignIn}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className="text-center fs-6 mt-3 mb-4">
                        Need an Account? <br />
                        <Link to='/register'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Login