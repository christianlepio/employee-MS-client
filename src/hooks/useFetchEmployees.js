import { useState, useRef, useEffect } from "react"
import useAxiosPrivate from "./useAxiosPrivate"

const useFetchEmployees = (fetchEmployeeUrl) => {
    const [employees, setEmployees] = useState([])
    const [requestError, setRequestError] = useState(null) 
    const [isLoading, setIsLoading] = useState(false)

    //define axiosPrivate that has interceptors that will handle JWT tokens that we need and retry get new accessToken if it expires
    const axiosPrivate = useAxiosPrivate()

    // handles strict mode
    // this will let useEffect code to run once
    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === true) {
            const fetchEmployees = async () => {
                setIsLoading(true)

                try {
                    const response = await axiosPrivate.get(fetchEmployeeUrl)

                    if (response?.data) {
                        setEmployees(response.data)
                        setRequestError(null)
                    }
                } catch (err) {
                    setEmployees([])
                    setRequestError(err?.message)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchEmployees()

        }

        // clean up function of useEffect
        return () => effectRan.current = true

    }, [fetchEmployeeUrl])

    return { employees, requestError, isLoading }
}

export default useFetchEmployees