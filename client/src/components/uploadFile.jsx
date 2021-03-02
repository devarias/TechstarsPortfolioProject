import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import '../styles/uploadFile.css'

export default class CSVReader2 extends Component {
  handleOnDrop = (data) => {
    const data_list = data.map((row) => row.data);
    const json_data = JSON.stringify(data_list);
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
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  render() {
    return (
      <footer>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}
          config={{header: true}}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </footer>
    );
  }
}
