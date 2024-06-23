import React from "react";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Blogs";
import Pagination from "../Pagination";

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);
    return(
        <div>
            <Header />
            <div>
                <div className="w-[48vw] flex items-center m-auto gap-5 mt-5">
                    <button className="border-2 px-4 py-1 font-semibold rounded-md" onClick={() =>navigation(-1)}>Back</button>
                    <h2>Blogs Tagged <span className="text-blue-500 font-semibold underline text-xl">#{tag}</span></h2>
                </div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default TagPage;