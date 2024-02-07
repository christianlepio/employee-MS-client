import { useState } from 'react'
import { ROLES } from '../config/roles'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { format } from 'date-fns'

const EditEmpModal = ({ editMdlId, prEmployee }) => {
    const axiosPrivate = useAxiosPrivate()
    const { allEmp, setAllEmp } = useAuth()

    const inputDate = new Date(prEmployee.bdate)
    const formattedDate = format(inputDate, 'yyyy-MM-dd')

    const rolesArray = prEmployee.roles.split(', ')

    const isActiveTemp = prEmployee.active === 'Active' ? true : false

    const [username, setUsername] = useState(prEmployee.username)
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [firstName, setFirstName] = useState(prEmployee.firstName)
    const [lastName, setLastName] = useState(prEmployee.lastName)
    const [bdate, setBdate] = useState(formattedDate)
    const [roles, setRoles] = useState(rolesArray)
    const [isActive, setIsActive] = useState(isActiveTemp)

    const [isLoading, setIsLoading] = useState(false)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, 
            (option) => option.value
        )

        setRoles(values)
    }

    const canSave = [roles.length, username, firstName, lastName, bdate].every(Boolean) && !isLoading

    const options = Object.values(ROLES).map(role => {
        return (
            <option key={role} value={role}>
                {role}
            </option>
        )
    })

    const editEmployee = async (e) => {
        e.preventDefault()
        
        console.log(firstName)
        console.log(lastName)
        console.log(bdate)
        console.log(username)
        console.log(password)
        console.log(roles)
        console.log(isActive)
    }

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id={editMdlId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="bi bi-plus-circle"></i>&nbsp; Update Employee Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <form className="row" onSubmit={editEmployee}>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`firstnameInputEdit${prEmployee.rowNum}`} className="form-label">Firstname</label></small>
                                    <input 
                                        type="text" 
                                        id={`firstnameInputEdit${prEmployee.rowNum}`}
                                        placeholder="Enter firstname here:"
                                        className="form-control mb-1"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`lastnameInputEdit${prEmployee.rowNum}`} className="form-label">Lastname</label></small>
                                    <input 
                                        type="text" 
                                        id={`lastnameInputEdit${prEmployee.rowNum}`}
                                        placeholder="Enter lastname here:"
                                        className="form-control mb-1"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`edBirthdateInput${prEmployee.rowNum}`} className="form-label">Birthdate</label></small>
                                    <input 
                                        type="date" 
                                        id={`edBirthdateInput${prEmployee.rowNum}`}
                                        placeholder="Enter birth date here:"
                                        className="form-control mb-1"
                                        value={bdate}
                                        onChange={(e) => setBdate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`usernameInputEd${prEmployee.rowNum}`} className="form-label">Username</label></small>
                                    <input 
                                        type="text" 
                                        id={`usernameInputEd${prEmployee.rowNum}`}
                                        placeholder="Enter username here:"
                                        className="form-control mb-1"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="off" //to avoid auto suggestion of values from the input
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`edPwdInput1${prEmployee.rowNum}`} className="form-label">Password</label></small>
                                    <input 
                                        type="password" 
                                        id={`edPwdInput1${prEmployee.rowNum}`}
                                        placeholder="Enter password here:" 
                                        className="form-control mb-1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor={`edPwdInput2${prEmployee.rowNum}`} className="form-label">Confirm Password</label></small>
                                    <input 
                                        type="password" 
                                        id={`edPwdInput2${prEmployee.rowNum}`}
                                        placeholder="Confirm password here:" 
                                        className="form-control mb-1"
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <small><label htmlFor={`edRolesInput${prEmployee.rowNum}`} className="form-label">Assigned Roles</label></small>
                                    <select 
                                        className="form-select" 
                                        id={`edRolesInput${prEmployee.rowNum}`}
                                        name={`edRolesInput${prEmployee.rowNum}`} 
                                        aria-describedby={`edRolesInputFeedback${prEmployee.rowNum}`} 
                                        multiple={true} // this allows us to select multiple options
                                        size='3' // this will diplay maximum of 3 values in the input
                                        value={roles}
                                        onChange={onRolesChanged}
                                    >
                                        {options}
                                    </select>
                                </div>

                                {/* checkbox for active */}
                                <div className="col-md mb-3">
                                    <div className="form-check form-switch">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            role="switch" 
                                            id={`flexSwitchCheckDefault${prEmployee.rowNum}`} 
                                            checked={isActive}
                                            onChange={() => setIsActive(prev => !prev)}
                                        />
                                        <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${prEmployee.rowNum}`}> Activate User</label>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <button 
                                        type="submit"
                                        className="btn btn-info flex-grow-1 mt-2 text-white"
                                        disabled={!canSave}
                                        data-bs-dismiss="modal"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditEmpModal