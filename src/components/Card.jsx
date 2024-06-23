import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({post}) =>{
    return(
        <div>
            <NavLink className='hover:underline text-xl font-semibold' to={`/blog/${post.id}`}>
                <span>{post.title}</span>
            </NavLink>
            <h5>By <span className="italic">{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`} className="font-semibold underline">
            <span>{post.category}</span>
</NavLink>
            </h5>
            <h4>Posted on {post.date}</h4>
            <p className="pt-5 w-[45vw]">{post.content}</p>
            <div>
                {post.tags.map( (tag, idx) => {
                    return <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}> <span className="text-blue-500 font-semibold text-sm underline mr-2" key={idx}>{`#${tag}`}</span></NavLink>
                } )}
            </div>
        </div>
    )
}

export default Card;