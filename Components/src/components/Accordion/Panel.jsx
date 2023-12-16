import React, { useState } from "react";
const Panel = ({ question, answer, id }) => {
  const [index, setIndex] = useState(-1);

  //if the active index is same as the clickedItem then index to -1 and
  function handleClick(id) {
    return setIndex(index == id ? -1 : id);
  }

  return (
    <div className="h-2 w-1/2 ">
      <div onClick={() => handleClick(id)} className="h-4 bg-black text-white">
        {question}
      </div>
      {index == id && <div className="bg-white text-black ">{answer}</div>}
    </div>
  );
};

export default Panel;
