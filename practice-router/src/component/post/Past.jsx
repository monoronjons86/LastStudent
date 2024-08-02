/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Past = ({post}) => {
    const{id,title}=post
    const userStyle={
        border:"2px solid yellow",
        padding:"5px",
        borderRadius:"20px"
    }
    return (
        <div style={userStyle}>
            <h1>id:{id}</h1>
            <p>tittle:{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Past;