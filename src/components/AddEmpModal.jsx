
const AddEmpModal = ({ empId }) => {

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id={empId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="bi bi-plus-circle"></i>&nbsp; Add New Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            {/* <p><i className="bi bi-check text-success"></i>&nbsp; {`Status: ${employee.active ? 'Active Employee' : 'Inactive Employee'}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Username: ${employee.username}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Firstname: ${employee.firstName}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Lastname: ${employee.lastName}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Birthdate: ${employee.bdate}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Roles: ${employee.roles}`}</p> */}
                            <form className="row">
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="firstnameInput" className="form-label">Firstname</label></small>
                                    <input 
                                        type="text" 
                                        id="firstnameInput"
                                        placeholder="Enter firstname here:"
                                        className="form-control mb-1"
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
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="usernameInput" className="form-label">Username</label></small>
                                    <input 
                                        type="text" 
                                        id="usernameInput"
                                        placeholder="Enter username here:"
                                        className="form-control mb-1"
                                        autoComplete="off" //to avoid auto suggestion of values from the input
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
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
                                <div className="col-md-6 mb-3">
                                    <small><label htmlFor="pwdInput2" className="form-label">Confirm Password</label></small>
                                    <input 
                                        type="password" 
                                        id="pwdInput2"
                                        placeholder="Confirm password here:" 
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
                                        Sign Up
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

export default AddEmpModal