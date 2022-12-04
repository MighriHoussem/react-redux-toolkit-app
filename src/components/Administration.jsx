import { NavLink, Outlet } from "react-router-dom";

import '../styles/administration.scss'


const Administration = (props) => {

    return (
        <div className="administration">
            {/** Render Admin Menu */}
            <nav className={"admin-nav-group"}>
                <NavLink to="/administration/users" end>
                    <p className={'admin-nav'}>Users</p>
                </NavLink>
                <NavLink to="/administration/groups" end>
                    <p className={'admin-nav'}>Groups</p>
                </NavLink>
            </nav>
            {/** Rennder Nested Route components like /admin/users OR /admin/groups */}
            <Outlet />
        </div>
    )
}
export default Administration;