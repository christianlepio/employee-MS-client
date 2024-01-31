import { Routes, Route, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
// components
import DashLayout from "./DashLayout"
import Dashboard from "./Dashboard"
import MainLayout from "./MainLayout"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import RegisterUser from "./RegisterUser"
import PersistLogin from "./PersistLogin"
import RequireAuth from "./RequireAuth"
import { ROLES } from "../config/roles"
import EmployeePage from "./EmployeePage"

const AppRoutes = () => {
    const { auth } = useAuth()

    return (
        <Routes>
            {/* parent route */}
            <Route path="/" element={<MainLayout />} >
                {/* PresistLogin component will get new access token if it is
                    expired and refresh token still not expired to avoid going to 
                    login when browser reloads*/}
                <Route element={<PersistLogin />}>

                    <Route index element={!auth?.accessToken ? <Login /> : <Navigate to='/dash' />} />
                    <Route path="register" element={!auth?.accessToken ? <RegisterUser /> : <Navigate to='/dash' />} />
                    
                    <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />} >
                        {/* dashboard parent route */}
                        <Route path="dash" element={<DashLayout />} >
                            <Route index element={<Dashboard />} />
                            <Route path="employees" element={<EmployeePage />} />
                        </Route> 
                    </Route>
                </Route>
                {/* catch all missing page */}
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes