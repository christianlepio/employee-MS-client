

const ActionModal = ({ actionmdId }) => {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id={actionmdId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="bi bi-sliders"></i>&nbsp; Options</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            {/* <p><i className="bi bi-check text-success"></i>&nbsp; {`Status: ${prEmployee.active ? 'Active Employee' : 'Inactive Employee'}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Username: ${prEmployee.username}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Firstname: ${prEmployee.firstName}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Lastname: ${prEmployee.lastName}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Birthdate: ${prEmployee.bdate}`}</p>
                            <p><i className="bi bi-check text-success"></i>&nbsp; {`Roles: ${prEmployee.roles}`}</p> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionModal