import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CompB = () => {
  //   const [inputFields, setInputFields] = useState({fname: "", lname: ""})
  const { fname, lname } = useSelector((state) => state.compB);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const typeName = e.target.name;
    dispatch({ type: typeName, payload: e.target.value });
    // setInputFields({[e.target.name]: e.target.value})
  };

  return (
    <>
      <div className="details">
        <label>First Name:</label>
        <input
          type="text"
          name="FNAME"
          value={fname}
          placeholder="Enter text"
          onChange={handleInputChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="LNAME"
          value={lname}
          placeholder="Enter text"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
export default CompB;
