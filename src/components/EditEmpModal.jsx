import React from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const EditEmpModal = ({ editMdlId, prEmployee }) => {
    const axiosPrivate = useAxiosPrivate()
    const { allEmp, setAllEmp } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bdate, setBdate] = useState('')
    const [roles, setRoles] = useState(["Employee"])

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

    const editEmployee = async () => {

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
                                    <small><label htmlFor="firstnameInput" className="form-label">Firstname</label></small>
                                    <input 
                                        type="text" 
                                        id="firstnameInput"
                                        placeholder="Enter firstname here:"
                                        className="form-control mb-1"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
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
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                        value={bdate}
                                        onChange={(e) => setBdate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="usernameInput1" className="form-label">Username</label></small>
                                    <input 
                                        type="text" 
                                        id="usernameInput1"
                                        placeholder="Enter username here:"
                                        className="form-control mb-1"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="off" //to avoid auto suggestion of values from the input
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="pwdInput1" className="form-label">Password</label></small>
                                    <input 
                                        type="password" 
                                        id="pwdInput1"
                                        placeholder="Enter password here:" 
                                        className="form-control mb-1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="pwdInput2" className="form-label">Confirm Password</label></small>
                                    <input 
                                        type="password" 
                                        id="pwdInput2"
                                        placeholder="Confirm password here:" 
                                        className="form-control mb-1"
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                    />
                                </div>
                                <div className="col-md mb-3">
                                    <small><label htmlFor="rolesInput" className="form-label">Assigned Roles</label></small>
                                    <select 
                                        className="form-select" 
                                        id="rolesInput"
                                        name="rolesInput" 
                                        aria-describedby="rolesInputFeedback" 
                                        multiple={true} // this allows us to select multiple options
                                        size='3' // this will diplay maximum of 3 values in the input
                                        value={roles}
                                        onChange={onRolesChanged}
                                    >
                                        {options}
                                    </select>
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