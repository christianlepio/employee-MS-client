import useAuth from "../hooks/useAuth"
import EmpModal from "./EmpModal"
import useAxiosPrivate from "../hooks/useAxiosPrivate"

const ActionModal = ({ actionmdId, employee }) => {
    const { isDark, allEmp, setAllEmp } = useAuth()
    const axiosPrivate = useAxiosPrivate()

    const deleteEmployee = async () => {
        try {
            const response = await axiosPrivate.delete('/users', {
                    data: {
                        id: employee._id
                    }
                }
            )

            console.log(`Employee with ID ${employee._id} has been deleted!`)

            setAllEmp(allEmp.filter(emp => emp._id !== employee._id))
        } catch (err) {
            console.log('Delete employee error: ', err)
        }
    }

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
                            <ul className={"list-group list-group-flush border rounded-3 shadow-sm"}>
                                <li
                                    type="button"
                                    className={`${isDark ? 'option-hover1' : 'option-hover'} list-group-item fw-medium text-secondary`}
                                    data-bs-toggle="modal" 
                                    data-bs-target={`#empModal${employee.rowNum}`}
                                >
                                    <i className="fs-5 me-3 bi bi-eye text-primary"></i> View Details
                                </li>
                                <li
                                    type="button"
                                    className={`${isDark ? 'option-hover1' : 'option-hover'} list-group-item fw-medium text-secondary`}

                                >
                                    <i className="fs-5 me-3 bi bi-pencil-square text-warning"></i> Edit Details
                                </li>
                                <li
                                    type="button"
                                    className={`${isDark ? 'option-hover1' : 'option-hover'} list-group-item fw-medium text-secondary`}
                                    data-bs-dismiss="modal"
                                    onClick={deleteEmployee}
                                >
                                    <i className="fs-5 me-3 bi bi-trash text-danger"></i> Delete Employee
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <EmpModal 
                mdlId={`empModal${employee.rowNum}`}
                prEmployee={employee}
            />

        </>
    )
}

export default ActionModal