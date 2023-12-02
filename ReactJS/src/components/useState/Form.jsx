import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    favcar: "",
    isVisible: true,
    mode:""
  });
  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;

    setData((prevdata) => ({
      ...prevdata,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(data);
  };
  return (
    <div className="flex justify-center flex-col">
      {/* htmlFor is used to match label with the input htmlFor should be equal ti id atribute in input tag */}
      <label htmlFor="">FirstName</label>
      <input
        className="border"
        type="text"
        name="fname" //name attribute should match with the data obj(fname) in useState
        value={data.fname} // this connect the value with fname inside data obj
        onChange={changeHandler}
      />
      <br />
      <label>Last Name</label>
      <input
        className="border"
        type="text"
        name="lname"
        value={data.lname}
        onChange={changeHandler}
      />
      <br />
      {/* select tag */}
      <label htmlFor="favcar">choose Car</label>
      <select
        name="favcar"
        id="favcar"
        value={data.favcar}
        onChange={changeHandler}
      >
        <option value="RR">RR</option>
        <option value="fortuner">fortuner</option>
      </select>

      {/* Check box */}
      <input
        type="checkbox"
        id="isVisible"
        name="isVisible"
        onChange={changeHandler}
        checked={data.isVisible} // not use value attribute
      />
      <label htmlFor="">confirm </label>
      
      {/* radio button */}
      <input
      type="radio"
      onChange={changeHandler}
      value="online"
      name="mode"
      checked= {data.mode === "online"}
      />
      <label htmlFor="">online</label>

      <input
      type="radio"
      onChange={changeHandler}
      value="offline"
      name="mode"
      checked= {data.mode === "offline"}
      />
      <label htmlFor="">offline</label>
      <button onClick={() => console.log(data)}>sumbit</button>
    </div>
  );
}

export default Form;
