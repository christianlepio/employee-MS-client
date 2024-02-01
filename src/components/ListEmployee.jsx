import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
// datatables
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api';
// import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
// modal component
import EmpModal from "./EmpModal"

const ListEmployee = ({ employees, requestError, isLoading, isEdit, isDelete }) => {
    const { isDark } = useAuth()

    let confirmedEmp

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    const actionBody = (rowData) => {
        return(
            <>
                <button 
                    className={`btn ${isDark ? 'btn-outline-info' : 'btn-info'}`} 
                    data-bs-toggle="modal" 
                    data-bs-target={`#empModal${rowData.rowNum}`}
                >
                    <i className="bi bi-eye text-white"></i>
                </button>
                <EmpModal 
                    mdlId={`empModal${rowData.rowNum}`}
                    prEmployee={rowData}
                />
            </>
        )
    }

    const statusBody = (rowData) => {
        return <h6><span className={`badge ${rowData.active ? 'bg-success' : 'bg-danger'}`}>{rowData.active}</span></h6>
    }

    let tblContent

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

        
        tblContent = <>
            <DataTable 
                value={confirmedEmp} 
                removableSort
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
                <Column sortable field="active" header='Status' body={statusBody}></Column>
                <Column sortable field="username" header='Username'></Column>
                <Column sortable field="firstName" header='Firstname'></Column>
                <Column sortable field="lastName" header='Lastname'></Column>
                <Column sortable field="bdate" header='Birthdate'></Column>
                <Column sortable field="roles" header='Roles'></Column>
                <Column body={actionBody} exportable={false} header='Action'></Column>
            </DataTable>
        </>
    } else if (requestError) {
        tblContent = <i><strong>System Response Error: </strong>{requestError}</i>
    }

    useEffect(() => {
        let primeThemeLink = document.getElementById('prime-theme-link');

        primeThemeLink.href = isDark 
            ? './node_modules/primereact/resources/themes/bootstrap4-dark-blue/theme.css' 
            : './node_modules/primereact/resources/themes/bootstrap4-light-blue/theme.css'
    }, [isDark])

    return (
        <div className={`p-2 mb-5 mt-4 rounded-3 shadow border-top border-3 ${isDark ? 'primeDark' : 'primeLight'}`}>
            <div className="row justify-content-end mx-2 border rounded-3 mb-3 mt-2">
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
            
            {tblContent}

        </div>
    )
}

export default ListEmployee