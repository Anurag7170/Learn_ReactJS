import React, { useCallback, useEffect, useState } from "react";

function PasswordGenertor() {
  const [Lenght, setLenght] = useState(8);
  const [char, setchar] = useState(false);
  const [Number, setNumber] = useState(false);
  const [Password, setPassword] = useState("");
  const generatePassowrd = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (Number) str += "1234567890";
    if (char) str += "!@#$%^&*()[]{}<>?/";

    for (let index = 1; index <= Lenght; index++) {
      let element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
    }

    setPassword(pass);
  }, [Lenght, char, Number]);
  useEffect(() => {
    generatePassowrd()
  }, [Lenght, char, Number])
  

  return (
    <div className="w-full mx-auto rounded-lg  bg-gray-500 ">
      <h1 className="text-4xl text-center">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          value={Password}
          readOnly
        />
        <button>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={Lenght}
            id="lenght"
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <label htmlFor="lenght">Lenght :{Lenght}</label>
        </div>
        <div
          className="flex
        items-center gap-x-1"
        >
          <input type="checkbox" checked={Number} 
          onChange={() => {setNumber((prev) => !prev)}}
          />
          <label htmlFor="">Number</label>
        </div>
        <div
          className="flex
        items-center gap-x-1"
        >
          <input type="checkbox" checked={char} 
          onChange={() => {setchar((prev) => !prev)}}
          />
          <label htmlFor="">Char</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenertor;
