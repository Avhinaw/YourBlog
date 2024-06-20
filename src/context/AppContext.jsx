import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const fetchBlogPost = async(page = 1) => {
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            alert('Error: ' + error.message);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
    }
    
    const handlePageChange = (page) => {
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
