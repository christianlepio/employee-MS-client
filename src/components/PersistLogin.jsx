import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import useRefreshToken from "../hooks/useRefreshToken"
import useAuth from "../hooks/useAuth"
import useLocalStorage from "../hooks/useLocalStorage"

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    //get refresh function from useRefreshToken custom hook
    const refresh = useRefreshToken()
    //get auth state from useAuth custom hook
    const { auth } = useAuth()
    //get the value of persist from the local storage if there is, otherwise set the value to false
    //will return true or false 
    const [persist] = useState(true)

    // handles strict mode
    // this will let useEffect code to run once
    const effectRan = useRef(false)

    useEffect(() => {
        // code below will run on the 2nd time that this useEffect renders due to strict mode update of reactJS
        // useEffect will only run twice in the development env and not in the production env
        if (effectRan.current === true) {
            const verifyRefreshToken = async () => {
                try {
                    //get new accessToken
                    await refresh()
                } catch (err) {
                    console.error('Persist login error: ', err)
                } finally {
                    setIsLoading(false)
                }
            }

            !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
        }

        // clean up function of useEffect
        return () => effectRan.current = true
    }, [])

    return (
        <>
            {
                !persist //if user do not trust the device then return the outlet without checking isLoading
                ? <Outlet /> //these are the child protected routes in AppRoutes components
                //isLoading here lets the app to process and get new accessToken to avoid going to login page when browser reloads
                : isLoading 
                    ? <main className="container">
                        <div className="d-flex main-login-regi align-items-center justify-content-center">
                            <div className="spinner-grow text-primary mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden mt-5">Loading...</span>
                            </div>&nbsp;&nbsp;
                            <div className="spinner-grow text-success mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden mt-5">Loading...</span>
                            </div>&nbsp;&nbsp;
                            <div className="spinner-grow text-danger mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden mt-5">Loading...</span>
                            </div>&nbsp;&nbsp;
                            <div className="spinner-grow text-warning mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden mt-5">Loading...</span>
                            </div>&nbsp;&nbsp;
                            <div className="spinner-grow text-light mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden mt-5">Loading...</span>
                            </div>
                        </div>
                    </main>
                    : <Outlet /> //these are the child protected routes in AppRoutes components
            }
        </>
    )
}

export default PersistLogin