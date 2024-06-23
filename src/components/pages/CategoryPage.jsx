import React from "react";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Blogs";
import Pagination from "../Pagination";

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
    return(
        <div>
            <Header />
            <div className="w-[48vw] flex items-center m-auto gap-5 mt-5">
                <button className="border-2 px-4 py-1 font-semibold rounded-md" onClick={() => navigation(-1)}>Back</button>
                <h2 className="font-semibold text-xl">Blogs on <span className="underline">{category}</span></h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage;