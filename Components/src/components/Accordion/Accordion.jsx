import { data } from "./Data.js";
import Panel from "./Panel.jsx";
import React, { useState } from "react";
const Accordion = () => {
  return (
    <section className=" bg-gray-900">
      <div className="h-[100vh] w-full flex items-center justify-center">
        {data.map((x) => {
          return <Panel key={x.id} {...x} />;
        })}
      </div>
    </section>
  );
};

export default Accordion;
