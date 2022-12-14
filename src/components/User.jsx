import { useNavigate, useParams } from "react-router-dom";

import useCurrentUser from "../customHooks/useCurrentUser";


//static list of users 
const users = [
    "Houssem Mighri",
    "Salah MED"
];

const User = (props) => {

    //get route params (uid)
    const params = useParams();
    //get router navigate event 
    const navigate = useNavigate();

    console.log('User params => ', params);

    //here we use our customHook useCurrentUser
    const currentUser = useCurrentUser();

    //handle back to Home Button
    const handleHomePage = () => {
        navigate('/');
    };

    //prepare Render user
    const userRender = <ul style={{ marginTop: "25px" }}>
        <li>
            <span>
                <strong>
                    Username:
                </strong>
            </span>
            {"  " + users[params.uid - 1]}
        </li>
    </ul>
    return (
        <>
            <button onClick={handleHomePage}>
                back to Home Page
            </button>
            {userRender}
            <div style={{ marginTop: "25px" }}>
                <label>Current user is:{" "}</label>
                {currentUser}
            </div>
        </>
    )
}

export default User;