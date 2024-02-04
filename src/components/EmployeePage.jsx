import useTitle from "../hooks/useTitle"
import useFetchEmployees from "../hooks/useFetchEmployees"

import ListEmployee from "./ListEmployee"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"

const EmployeePage = () => {
    // this will change the document title on top, dynamically
    useTitle('Employees')

    const { employees, requestError, isLoading } = useFetchEmployees('/users')
    
    // const [allEmp, setAllEmp] = useState([])
    const { allEmp, setAllEmp } = useAuth()

    useEffect(() => {
        if (employees.length && !requestError && !isLoading) {
            setAllEmp(employees.map(emp => {
                return { ...emp }
            }))
        }
    }, [employees, isLoading])

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Employees</h1>
            </div>

            {<ListEmployee 
                employees={allEmp} 
                requestError={requestError} 
                isLoading={isLoading} 
                isEmpRoute={true}
            />}
        </>
    )
}

export default EmployeePage