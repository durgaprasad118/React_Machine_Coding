import { data } from "./Data.js";
import Panel from "./Panel.jsx";
import React, { useState } from "react";
const Accordion = () => {
  const [show, setShow] = useState(0);
  function setIndex(id) {
    setShow(id);
  }
  return (
    <section className=" bg-gray-900">
      <div className="h-[100vh] w-full flex items-center justify-center">
        {data.map((x) => {
          return (
            <Panel
              key={x.id}
              question={x.question}
              id={x.id}
              answer={x.answer}
              isActive={show}
              setIndex={setIndex}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
