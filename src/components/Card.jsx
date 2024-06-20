import React from "react";

const Card = ({post}) =>{
    return(
        <div>
            <h3 className="font-semibold text-xl">{post.title}</h3>
            <h5>By <span className="italic">{post.author}</span> on <span className="font-semibold underline">{post.category}</span>
            </h5>
            <h4>posted on {post.date}</h4>
            <p className="pt-5 w-[45vw]">{post.content}</p>
            <div>
                {post.tags.map( (tag, idx) => {
                    return <span className="text-blue-500 font-semibold text-sm underline mr-2" key={idx}>{`#${tag}`}</span>
                } )}
            </div>
        </div>
    )
}

export default Card;