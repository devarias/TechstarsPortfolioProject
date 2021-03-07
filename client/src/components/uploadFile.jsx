import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSVReader } from 'react-papaparse';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import '../styles/uploadFile.css'

const CSVReader2 = ({setResSchedule, setViewSelect, setView}) => {
  const [isReset, setIsReset] = useState(false);
  const [json_data, setJsonData] = useState([]);
  const history = useHistory();
  const handleOnDrop = (data) => {
    const data_list = data.map((row) => row.data);
    setJsonData(JSON.stringify(data_list));
  };

  const handleOnError = (err, file, inputElem, reason) => {
    alert(err);
    setIsReset(true)
  };

  const handleSubmit = () => {
    if (window.confirm("A new meeting calendar is going to be generated\n Do you want to continue?")) {
      fetch(
        'http://localhost:3033/api/schedule',
        {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json_data,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            setResSchedule(result);
            setView(1);
            setViewSelect(['1']);   
            setIsReset(true);  
        })
        .catch((error) => {
            setViewSelect(['4']); 
            history.push('/MeetingsTable');
            setView(4);
            setIsReset(true);
            console.error('Error:', error);     
        });
    } else {
        setIsReset(true);
    }
    
  }

  const handleOnRemoveFile = (data) => {
    setIsReset(true);
  };

    return (
      <>
        <CSVReader
          accept=".csv"
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          isReset={isReset}
          onRemoveFile={handleOnRemoveFile}
          config={{header: true}}
        >
        <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
        <Button className="submit" type="primary" shape="round" icon={<SendOutlined/>} onClick={handleSubmit}>Submit</Button>
      </>
    );
}

export default CSVReader2;