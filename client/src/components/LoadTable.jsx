import React, { useState, useEffect } from "react";
import ColorCode from "./ColorCode";
import TableResults from "./TableResults";
import Spinner from "./Spinner";
import "../styles/LoadTable.css";

function LoadTable() {

  const [todoMentors, setTodoMentors] = useState("");
  const [todoCompanies, setTodoCompanies] = useState("");
  const [displayTable, setDisplayTable] = useState(false);

  const getData = async (path) => {
    const response = await fetch(
      `https://ts-api-p2.herokuapp.com/api/${path}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.json();
  };

  useEffect(() => {async function fetchData() {
    let result = await getData("companies");
    setTodoCompanies(result);
    result = await getData("mentors");
    setTodoMentors(result);
    setDisplayTable(true);
  }
  fetchData()}, []);

  return (
    <>
      <ColorCode />
      {displayTable ? (
        <TableResults mentors={todoMentors} company={todoCompanies} />
      ) : <Spinner/>}
    </>
  );
}
export default LoadTable;
