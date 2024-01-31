import useTitle from "../hooks/useTitle"

const EmployeePage = () => {
    // this will change the document title on top, dynamically
    useTitle('Employees')

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Employees</h1>
            </div>
        </>
    )
}

export default EmployeePage