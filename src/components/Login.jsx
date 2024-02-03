import { useNavigate, useLocation } from "react-router-dom"
import useTitle from "../hooks/useTitle"
import { useEffect, useRef, useState } from "react"
import useAuth from "../hooks/useAuth"
import useInput from "../hooks/useInput"
import axios from "../api/axios"
import AddEmpModal from "./AddEmpModal"

const LOGIN_URL = '/auth'

const Login = () => {
    // this will change the document title on top, dynamically
    useTitle('Login User')

    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    //get previous location(url)
    const from = location.state?.from?.pathname || '/'

    const userRef = useRef()
    const errRef = useRef()

    //get value, reset, attributeObj from custom hook useInput and rename it to user, resetUser, userAttribs
    const [user, resetUser, userAttribs] = useInput('user', '')
    const [pwd, setPwd] = useState('')

    const [errMsg, setErrMsg] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        //focus on user input when page loads
        userRef.current.focus()
    }, [])

    useEffect(() => {
        //clear error msg when user and password changes
        setErrMsg('')
        setIsLoading(false)
    }, [user, pwd])

    useEffect(() => {
        errMsg && setIsLoading(false)
    }, [errMsg])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrMsg('')
        setIsLoading(true)

        try {
            const response = await axios.post(LOGIN_URL, 
                //provide the payload (data you are sending)
                //user and pwd is what our backend is expecting with exact property name
                //this may be userName: user or password: pwd
                JSON.stringify({username: user, password: pwd}), 
                //third parameter here is an object that is required to post in backend
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true //this is required for CORS
                }
            )

            //get access token from response data
            const accessToken = response?.data?.accessToken

            accessToken && setIsLoading(false)

            //set obj values for global auth 
            setAuth({ accessToken })
            //from useInput custom hook reset function
            resetUser()
            setPwd('')
            //if user logged in, navigate page to where he/she  
            //requested before logging in, otherwise go to home page
            navigate('/dash')

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response!')
            } else if (err.response?.status === 400) {
                setErrMsg('Username and Password field are required!')
            } else if (err.response?.status === 401) {
                setErrMsg('Incorrect username or password!')
            } else {
                setErrMsg('Login Failed!')
            }
            //focus screen on error msg
            errRef.current.focus()
        }
    }

    //check if username, password has a value.
    //this will return either true or false for disabling sign in button
    const canSignIn = [user, pwd].every(Boolean)
    
    return (
        <main className="container main-login-regi">
            <div className="row justify-content-center align-items-center main-login-regi-content px-3">
                <div className="col-md-4 rounded-3 border-top border-4 border-info shadow px-3 py-2">
                    <div 
                        ref={errRef} 
                        className={"alert alert-sm alert-danger mt-3 " + (errMsg ? null : 'd-none')} 
                        role="alert" 
                    >
                        <div><i className="bi bi-exclamation-circle me-2"></i><strong>{errMsg}</strong></div>
                    </div>

                    <h1 className="h1 mb-4 mt-3 text-center">SIGN IN</h1>

                    <form className="mx-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <small><label htmlFor="usernameInput" className="form-label">Username</label></small>
                            <input 
                                type="text" 
                                id="usernameInput"
                                placeholder="Enter username here:"
                                className="form-control mb-1"
                                ref={userRef}
                                autoComplete="off" //to avoid auto suggestion of values from the input
                                //spread userAttribs (attributeObj) from custom hook useInput
                                {...userAttribs}
                                required
                                disabled={isLoading ? true : false}
                            />
                        </div>
                        <div className="mb-3">
                            <small><label htmlFor="pwdInput" className="form-label">Password</label></small>
                            <input 
                                type="password" 
                                id="pwdInput"
                                placeholder="Enter password here:" 
                                className="form-control mb-1"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                disabled={isLoading ? true : false}
                            />
                        </div>
                        <div className="d-flex">
                            <button 
                                type="submit"
                                className="btn btn-info flex-grow-1 mt-2 text-white"
                                disabled={isLoading ? true : !canSignIn}
                            >
                                {isLoading 
                                    ? (
                                        <>  
                                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                            <span role="status"> Signing In...</span> 
                                        </> 
                                    )
                                    : (<>Sign In</>)
                                }
                            </button>
                        </div>
                        <div className="d-flex mb-4">
                            <button 
                                type="button" 
                                className="btn btn-outline-primary flex-grow-1 mt-2"
                                data-bs-toggle="modal" 
                                data-bs-target="#signUpEmpIdModal"
                                disabled={isLoading}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <AddEmpModal empId={'signUpEmpIdModal'}/>
                </div>
            </div>
        </main>
    )
}

export default Login