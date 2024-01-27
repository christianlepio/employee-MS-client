import { Routes, Route } from "react-router-dom"
import DashLayout from "./DashLayout"
import Dashboard from "./Dashboard"

const AppRoutes = () => {
    return (
        <Routes>
            {/* dashboard parent route */}
            <Route path="dash" element={<DashLayout />}>
                <Route index element={<Dashboard />} />
            </Route> 
        </Routes>
    )
}

export default AppRoutes