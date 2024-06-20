import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";

const Blogs = () => {
    const {posts} = useContext(AppContext);
    return (
        <div className="flex flex-col gap-10 w-[50vw] p-5 m-auto">
            {posts.length === 0 ? (
                <div>
                <h1>No post Available</h1>
                </div>
            ) : (posts.map( (post ) => (<Card key={post.id} post={post} />) ))}
        </div>
    );
}

export default Blogs;