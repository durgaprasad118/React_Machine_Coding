import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [text, settext] = useState("");

  const clickButton = async () => {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers");
    console.log(data);
  };
  return (
    <section className="bg-gray-900">
      <div className="h-[100svh] w-full grid grid-cols-4 items-center justify-center content-center">
        <Link
          to={"/accordion"}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Accordion (any)
        </Link>

        <Link
          to={"/accordionOne"}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Accordion Only 1 Open
        </Link>
      </div>
    </section>
  );
};

export default Home;
