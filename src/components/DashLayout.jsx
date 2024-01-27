import { Outlet } from 'react-router-dom'
//components
import DashHeader from './DashHeader'
import SideNav from './SideNav'

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="container-fluid">
                <div className="row">
                    <SideNav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    )
}

export default DashLayout