import { useState } from "react"
import useTitle from "../hooks/useTitle"
import useFetchEmployees from "../hooks/useFetchEmployees"
import ListEmployee from "./ListEmployee"
import useAuth from "../hooks/useAuth"

import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'

const Dashboard = () => {
    // this will change the document title on top, dynamically
    useTitle('Dashboard')

    const { isDark } = useAuth()

    const { employees, requestError, isLoading } = useFetchEmployees('/users')

    let confirmedEmp

    const empCount = employees.length

    const actvEmp = employees.filter(emp => emp.active === true)
    const actvEmpCount = actvEmp.length

    const adminEmp = employees.filter(emp => emp.roles.includes('Admin'))
    const adminEmpCount = adminEmp.length

    const mngrEmp = employees.filter(emp => emp.roles.includes('Manager'))
    const mngrEmpCount = mngrEmp.length

    let tblContent

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    if (isLoading) {
        tblContent = <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary mt-5" style={{width: '2rem', height: '2rem'}} role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>&nbsp;&nbsp;
                <div className="spinner-grow text-success mt-5" style={{width: '2rem', height: '2rem'}} role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>&nbsp;&nbsp;
                <div className="spinner-grow text-danger mt-5" style={{width: '2rem', height: '2rem'}} role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>&nbsp;&nbsp;
                <div className="spinner-grow text-warning mt-5" style={{width: '2rem', height: '2rem'}} role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>&nbsp;&nbsp;
                <div className="spinner-grow text-light mt-5" style={{width: '2rem', height: '2rem'}} role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>
            </div>
        </>
    } else if (employees?.length) {
        
        confirmedEmp = employees.map((emp, i) => {

            // set roles array to a string & replace comma to comma space
            const userRolesString = emp.roles.toString().replaceAll(',', ', ')

            // if user is active then set cell status to table-active
            const empStatus = emp.active ? 'Active' : 'Inactive'

            //format the birthdate into string
            const date = new Date(emp.bdate)
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            const formattedDate = date.toLocaleDateString([], options)

            return { ...emp, rowNum: (i + 1), active: empStatus, bdate: formattedDate, roles: userRolesString }
        })

        const tableContent = employees.map((employee, i) => <ListEmployee key={employee._id} prEmployee={employee} index={i} />)

        tblContent = <>
            <div className="table-responsive">
                <table id="example" className="table table-hover my-3">
                    <thead>
                        <tr>
                            <th scope="col"> # </th>
                            <th scope="col">Status</th>
                            <th scope="col">Username</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Birthdate</th>
                            <th scope="col">Roles</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </div>
        </>
    } else if (requestError) {
        tblContent = <i><strong>System Response Error: </strong>{requestError}</i>
    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div className="row justify-content-center my-2 px-2">
                <div className="col-md px-2 my-2">
                    <div className="d-flex flex-column border rounded-2 p-3 bg-primary">
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
                    <div className="d-flex flex-column border rounded-2 p-3 bg-warning">
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
                    <div className="d-flex flex-column border rounded-2 p-3 bg-success">
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
                    <div className="d-flex flex-column border rounded-2 p-3 bg-danger">
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

            {/* {tblContent} */}

            <div className="p-2 mb-5 mt-4 rounded-3" style={{ backgroundColor: '#2a323d' }}>
                <div className="row justify-content-end mx-2">
                    <div className="col-md-3">
                        <div className="input-group my-3">
                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search mb-2"></i></span>
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setFilters({
                                    global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                                })}
                                placeholder="Search Keyword"
                            />
                        </div>
                    </div>
                </div>
                
                <DataTable 
                    value={confirmedEmp} 
                    removableSort
                    stripedRows 
                    paginator 
                    rows={10} 
                    rowsPerPageOptions={[10, 30, 50, 100]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                    paginatorLeft={paginatorLeft} 
                    paginatorRight={paginatorRight}
                    selectionMode="single"
                    filters={filters}
                >
                    <Column sortable field="rowNum" header='#'></Column>
                    <Column sortable field="active" header='Status'></Column>
                    <Column sortable field="username" header='Username'></Column>
                    <Column sortable field="firstName" header='Firstname'></Column>
                    <Column sortable field="lastName" header='Lastname'></Column>
                    <Column sortable field="bdate" header='Birthdate'></Column>
                    <Column sortable field="roles" header='Roles'></Column>
                </DataTable>
            </div>
        </>
    )
}

export default Dashboard