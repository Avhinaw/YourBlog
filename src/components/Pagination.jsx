import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } =
    useContext(AppContext);
  return (
    <div className="w-full border-2 p-2 flex items-center justify-center">
    <div className="w-[45vw] flex justify-between items-center">
    <div className="flex items-center">

      {page > 1 && (
        <button className="border-2 px-4 py-1 font-semibold rounded-md mr-4" onClick={() => handlePageChange(page - 1)}>Previous</button>
      )}
      {page < totalPages && (
        <button className="border-2 px-4 py-1 font-semibold rounded-md" onClick={() => handlePageChange(page + 1)}>Next</button>
      )}
      <p className="ml-72 font-semibold">{`Page ${page} of ${totalPages}`}</p>
      </div>
    </div>
    </div>
  );
};

export default Pagination;
