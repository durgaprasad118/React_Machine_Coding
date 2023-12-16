import React from "react";
const Panel = ({ question, answer, id, isActive, setIndex }) => {
  return (
    <div className="h-2 w-1/2 ">
      <div onClick={() => setIndex(id)} className="h-4 bg-black text-white">
        {question}
      </div>
      {isActive == id && <div className="bg-white text-black ">{answer}</div>}
    </div>
  );
};

export default Panel;
