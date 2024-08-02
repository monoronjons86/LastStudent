import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "../users/users.css"

const Users = () => {
    const users=useLoaderData();
    return (
        <div >
            {/* <h2>Our users:{users.length}</h2>
            <p>Fantastic and vodro users</p> */}
            <div className="users">
                {
                    users.map(user=><User key={users.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;