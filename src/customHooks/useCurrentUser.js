import { useState, useEffect } from "react";

//useCurrentUser custom Hook to get user Data
const useCurrentUser = (props) => {

    //component state 
    const [user, setUser] = useState(null);


    useEffect(() => {
        (async () => {
            //fetech data from Server API
            const currentUser = 'Houssem Mighri Dev';
            setUser(currentUser);
        })()
    }, []);

    return user;
};

export default useCurrentUser;