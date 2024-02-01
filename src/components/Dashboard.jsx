import useTitle from "../hooks/useTitle"
import useFetchEmployees from "../hooks/useFetchEmployees"
import useAuth from "../hooks/useAuth"

import ListEmployee from "./ListEmployee"

const Dashboard = () => {
    // this will change the document title on top, dynamically
    useTitle('Dashboard')

    const { isDark } = useAuth()

    const { employees, requestError, isLoading } = useFetchEmployees('/users')

    const empCount = employees.length

    const actvEmp = employees.filter(emp => emp.active === true)
    const actvEmpCount = actvEmp.length

    const adminEmp = employees.filter(emp => emp.roles.includes('Admin'))
    const adminEmpCount = adminEmp.length

    const mngrEmp = employees.filter(emp => emp.roles.includes('Manager'))
    const mngrEmpCount = mngrEmp.length    

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div className="row justify-content-center my-2 px-2">
                <div className="col-md px-2 my-2">
                    <div className="shadow d-flex flex-column border rounded-2 p-3 bg-primary">
                        <div className="d-flex justify-content-start">
                            <div><h5 className="h5 text-white pb-2 border-bottom border-light">Employees</h5></div>
                        </div>
                        
                        <div className="d-flex justify-content-between px-1">
                            <div className="align-self-center">
                                <h2 className="mt-2 text-white">{empCount}</h2>
                            </div>
                            <div className={`px-3 py-1 rounded-circle ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                <i className="bi bi-people fs-1 me-4 mb-5"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md px-2 my-2">
                    <div className="shadow d-flex flex-column border rounded-2 p-3 bg-warning">
                        <div className="d-flex justify-content-start">
                            <div><h5 className="h5 text-white pb-2 border-bottom border-light">Active Employees</h5></div>
                        </div>
                        
                        <div className="d-flex justify-content-between px-1">
                            <div className="align-self-center">
                                <h2 className="mt-2 text-white">{actvEmpCount}</h2>
                            </div>
                            <div className={`px-3 py-1 rounded-circle ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                <i className="bi bi-person-check fs-1 me-4 mb-5"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md px-2 my-2">
                    <div className="shadow d-flex flex-column border rounded-2 p-3 bg-success">
                        <div className="d-flex justify-content-start">
                            <div><h5 className="h5 text-white pb-2 border-bottom border-light">Admin</h5></div>
                        </div>
                        
                        <div className="d-flex justify-content-between px-1">
                            <div className="align-self-center">
                                <h2 className="mt-2 text-white">{adminEmpCount}</h2>
                            </div>
                            <div className={`px-3 py-1 rounded-circle ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                <i className="bi bi-person-gear fs-1 me-4 mb-5"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md px-2 my-2">
                    <div className="shadow d-flex flex-column border rounded-2 p-3 bg-danger">
                        <div className="d-flex justify-content-start">
                            <div><h5 className="h5 text-white pb-2 border-bottom border-light">Manager</h5></div>
                        </div>
                        
                        <div className="d-flex justify-content-between px-1">
                            <div className="align-self-center">
                                <h2 className="mt-2 text-white">{mngrEmpCount}</h2>
                            </div>
                            <div className={`px-3 py-1 rounded-circle ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                <i className="bi bi-person fs-1 me-4 mb-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="h4 mt-5">List of Employees</h4>
            
            {<ListEmployee 
                employees={employees} 
                requestError={requestError} 
                isLoading={isLoading} 
            />}
        </>
    )
}

export default Dashboard