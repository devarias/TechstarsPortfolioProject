import React, { useState, useEffect, useStateWithPromise} from "react";
import ColorCode from "./ColorCode";
import TableResults from "./TableResults";
import Spinner from "./Spinner";
import "../styles/LoadTable.css";

function LoadTable() {

  const [todoCompanies, setTodoCompanies] = useState('');
  const [displayTable, setDisplayTable] = useState(false);
  const [dataResults, setDataResults] = useState('');

  const getCompanies = async () => {
    const response = await fetch(
      `https://techstars-api.herokuapp.com/api/companies`,
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

  const getResults = async () => {
    const resultsResponse = await fetch(
      'http://techstars-api.herokuapp.com/api/results',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return resultsResponse.json();
  }

  useEffect(() => {async function fetchData() {
    let result = await getResults()
    setDataResults(result);
    console.log(dataResults);
    result = await getCompanies();
    setTodoCompanies(result);
    setDisplayTable(true);
  }
  fetchData()}, []);

  return (
    <>
      <ColorCode />
      {displayTable ? (
        <TableResults company={todoCompanies} />
      ) : <Spinner/>}
    </>
  );
}
export default LoadTable;
