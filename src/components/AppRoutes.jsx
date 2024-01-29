import { Routes, Route } from "react-router-dom"
// components
import DashLayout from "./DashLayout"
import Dashboard from "./Dashboard"
import MainLayout from "./MainLayout"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import RegisterUser from "./RegisterUser"
import { ROLES } from "../config/roles"
import PersistLogin from "./PersistLogin"
import RequireAuth from "./RequireAuth"

const AppRoutes = () => {
    return (
        <Routes>
            {/* parent route */}
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Login />} />
                <Route path="register" element={<RegisterUser />} /> 

                {/* PresistLogin component will get new access token if it is
                    expired and refresh token still not expired to avoid going to 
                    login when browser reloads*/}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />} >
                        {/* dashboard parent route */}
                        <Route path="dash" element={<DashLayout />} >
                            <Route index element={<Dashboard />} />
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