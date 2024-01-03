import React from "react";
import { useSelector } from "react-redux";

const CompC = () => {
    const { fname, lname } = useSelector((state) => state.compB);
    return(
        <>
        <div className="result">This is First Name: {fname}</div>
        <div className="result">This is Last Name: {lname}</div>
        </>
    )
}
export default CompC;