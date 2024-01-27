import { useContext } from "react"
import ThemeContext from "../context/ThemeProvider"

const SideNav = () => {
    const { textColor } = useContext(ThemeContext)
    return (
        <>
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary overflow-y-auto">
                <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="sidebarMenuLabel">Company Name</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className={`${textColor} nav-link d-flex align-items-center gap-2 active`} aria-current="page" href="#">
                                    <i className="bi bi-speedometer2 mb-1"></i>
                                    Dashboard
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className={`${textColor} nav-link d-flex align-items-center gap-2`} href="#">
                                    <i className="bi bi-people mb-1"></i>
                                    Employees
                                </a>
                            </li>
                        </ul>

                        <hr className="my-3" />

                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <a className={`${textColor} nav-link d-flex align-items-center gap-2`} href="#">
                                    <i className="bi bi-gear-wide-connected mb-1"></i>
                                    Account Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${textColor} nav-link d-flex align-items-center gap-2`} href="#">
                                    <i className="bi bi-box-arrow-right mb-1"></i>
                                    Sign out
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav