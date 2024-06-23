import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Card from "../Card";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1);
    const fetchRelatedBlogs = async () => {
        setLoading(true);
        const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(err){
            alert('Error fetching' + err.message);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return(        
        <>

            <Header />
        <div className="flex flex-col gap-10 w-[50vw] p-5 m-auto">
            <div>
            <button className="border-2 px-4 py-1 font-semibold rounded-md" onClick={() => navigation(-1)}>Back</button>
            </div>
            {loading ? (<div>Loading</div>) : blog ? (<div>
                <Card post={blog} />
                <h2 className="text-3xl font-bold my-5">Related Blogs</h2>
                <div className="space-y-5">
                {
                    relatedBlogs.map( (post) => (
                        <div>
                            <Card post={blog} />
                        </div>
                    ))
                }
                </div>
            </div>) : (<div>No blog found</div>)}
        </div>
        </>
    )
}

export default BlogPage;