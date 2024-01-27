import { Routes, Route } from "react-router-dom"
// components
import DashLayout from "./DashLayout"
import Dashboard from "./Dashboard"
import MainLayout from "./MainLayout"
import Login from "./Login"
import PageNotFound from "./PageNotFound"

const AppRoutes = () => {
    return (
        <Routes>
            {/* parent route */}
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Login />} />

                {/* dashboard parent route */}
                <Route path="dash" element={<DashLayout />} >
                    <Route index element={<Dashboard />} />
                </Route> 
                {/* catch all missing page */}
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes