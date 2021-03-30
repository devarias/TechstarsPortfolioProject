import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from 'react-router-dom'
import ColorCode from "./ColorCode";
import TableResults from "./TableResults";
import Spinner from "./Spinner";
import ManageSurveyTable from "./ManageSurveyTable";
import "../styles/LoadTable.css";

function LoadTable() {

  const [todoCompanies, setTodoCompanies] = useState('');
  const [displayTable, setDisplayTable] = useState(false);
  const [dataResults, setDataResults] = useState('');
  const [hasError, setHasError] =useState(false);
  const currentLocation = useLocation()

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
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  };

  const getResults = async () => {
    const resultsResponse = await fetch(
      'http://techstars-api.herokuapp.com/api/results/mentors',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!resultsResponse.ok) {
      throw new Error();
    }
      return resultsResponse.json();
    
  }

  useEffect(() => {async function fetchData() {
    console.log('on mount')
    let result = await getResults().catch(error => setHasError(true));
    setDataResults(result);
    result = await getCompanies().catch(error => setHasError(true));
    setTodoCompanies(result);
    setDisplayTable(true);
  }
  fetchData()}, []);


  if (hasError) {
    return (
      <Redirect to="/Error" />
    )
  } else if (currentLocation.pathname === '/SurveyStatus') {
    return(
      <>
        <h2>Survey Completion Status</h2>
        {displayTable ? <ManageSurveyTable results={dataResults}/> : <Spinner/>}
      </>
    )
  } else {
    return (
      <>
        <ColorCode />
        {displayTable ? (
          <TableResults company={todoCompanies} results={dataResults} />
        ) : <Spinner/>}
      </>
    );
  }
}
export default LoadTable;
