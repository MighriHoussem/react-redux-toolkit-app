import { useNavigate, useParams } from "react-router-dom";


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
        </>
    )
}

export default User;