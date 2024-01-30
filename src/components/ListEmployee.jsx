import EmpModal from "./EmpModal"

const ListEmployee = ({ prEmployee, index }) => {
    // set roles array to a string & replace comma to comma space
    const userRolesString = prEmployee.roles.toString().replaceAll(',', ', ')
    // if user is active then set cell status to table-active
    const statusClass = prEmployee.active ? 'text-success' : 'text-danger'
    //format the birthdate into string
    const date = new Date(prEmployee.bdate)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString([], options)

    return (
        <>
            <tr>
                <th scope='row'>{index + 1}</th>
                <td><i className={`bi bi-circle-fill ${statusClass}`}></i></td>
                <td>{prEmployee.username}</td>
                <td>{prEmployee.firstName}</td>
                <td>{prEmployee.lastName}</td>
                <td>{formattedDate}</td>
                <td>{userRolesString}</td>
                <td className="text-center">
                    <i type="button" className="bi bi-eye fs-5" data-bs-toggle="modal" data-bs-target={`#empModal${index}`}></i>
                    <EmpModal 
                        mdlId={`empModal${index}`}
                        prEmployee={prEmployee}
                        formattedDate={formattedDate} 
                        userRolesString={userRolesString}
                    />
                </td>
            </tr>
        </>
    )
}

export default ListEmployee