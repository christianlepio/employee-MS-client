import useAuth from "../hooks/useAuth"
import { jwtDecode } from 'jwt-decode'

const DashHeader = () => {
    const { auth } = useAuth()

    //decode the encrypted accesstoken using jwt decode
    const decoded = auth?.accessToken 
        ? jwtDecode(auth.accessToken)
        : undefined

    return (
        <header className="navbar sticky-top bg-info flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company Name</a>
            <ul className="navbar-nav flex-row">
                <div className="d-flex me-sm-4 text-secondary">
                    <p className="mt-2 me-2">{`${decoded?.UserInfo?.firstName} ${decoded?.UserInfo?.lastName}`}</p>
                    <i className="bi bi-person-circle fs-3"></i>
                </div>
                <li className="nav-item text-nowrap d-md-none">
                    <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list"></i>
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default DashHeader