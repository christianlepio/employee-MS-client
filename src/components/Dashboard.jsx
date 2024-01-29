import useTitle from "../hooks/useTitle"
import useFetchEmployees from "../hooks/useFetchEmployees"
import ListEmployee from "./ListEmployee"

const Dashboard = () => {
    // this will change the document title on top, dynamically
    useTitle('Dashboard')

    const { employees, requestError, isLoading } = useFetchEmployees('/users')

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

        const tableContent = employees.map((employee, i) => <ListEmployee key={employee._id} prEmployee={employee} index={i} />)

        tblContent = <>
            <div className="table-responsive">
                <table id="example" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"> # </th>
                            <th scope="col">Status</th>
                            <th scope="col">Username</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Birthdate</th>
                            <th scope="col">Roles</th>
                            <th scope="col">Action</th>
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

            <h4 className="h4">List of Employees</h4>

            {tblContent}
        </>
    )
}

export default Dashboard