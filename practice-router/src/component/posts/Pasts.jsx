import { useLoaderData } from "react-router-dom";
import Past from "../post/Past";


const Pasts = () => {
    const posts=useLoaderData();
    return (
        <div>
            <h1>Pasts:{posts.length}</h1>
            <div className="users">
                {
                    posts.map(post=><Past key={post.id} post={post}></Past>)
                }
            </div>
        </div>
    );
};

export default Pasts;