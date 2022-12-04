

const Groups = (props) => {

    const groupsRender = <ul>
        <li>admin</li>
        <li>users</li>
        <li>externals</li>
        <li>consultations</li>
    </ul>;

    return (
        <div>
            {groupsRender}
        </div>
    );
};

export default Groups;