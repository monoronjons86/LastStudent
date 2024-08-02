import { useLoaderData } from "react-router-dom";

const PastDetails = () => {
    const post=useLoaderData();
    const{id,title,body}=post;
    return (
        <div>
            <h3>Post Details about:{id}</h3>
            <h1>title:{title}</h1>
            <p><small >{body}</small></p>
        </div>
    );
};

export default PastDetails;