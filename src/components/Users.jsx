import { Link, Outlet } from "react-router-dom";


const Users = (props) => {

    //links styles
    const linksStyles = { textDecoration: "auto" };
    //users and we can show user details on Click
    const usersRender = <ul>
        <li><Link to={"/administration/users/1"} style={linksStyles}>Houssem Mighri</Link></li>
        <li><Link to={"/administration/users/2"} style={linksStyles}>Salah MED </Link></li>
    </ul>;

    return (
        <div>
            {usersRender}
            <div style={{ marginLeft: "25px" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Users;