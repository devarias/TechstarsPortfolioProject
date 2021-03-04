import React, {useState} from 'react';
import { Table, Button, Space,Input } from 'antd';

// const data = JSON.parse('[{"Mentor":"David Hose","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":"Olympus","09:00:00":null,"09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Wayne Industries","11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Fletcher Richman","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":"Pied Piper","08:40:00":"Xavier Corp","09:00:00":null,"09:20:00":"Olympus","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Ivan Lopez","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":"Xavier Corp","09:20:00":null,"09:40:00":"Olympus","10:00:00":"Pied Piper","10:20:00":"SHIELD ","10:40:00":null,"11:00:00":null,"11:20:00":"Acme","11:40:00":"Umbrella Corp"},{"Mentor":"Jackie Young","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":"Marvel","09:20:00":"X Men ","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":"Umbrella Corp","11:20:00":"Wayne Industries","11:40:00":"Olympus"},{"Mentor":"Rachel ten Brink","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":"Olympus","08:40:00":null,"09:00:00":null,"09:20:00":"Umbrella Corp","09:40:00":"Marvel","10:00:00":"Avengers Inc","10:20:00":null,"10:40:00":null,"11:00:00":"SHIELD ","11:20:00":null,"11:40:00":"Acme"},{"Mentor":"Ara Howard","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"SHIELD ","08:40:00":null,"09:00:00":"Justice League","09:20:00":"Pied Piper","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Jeremy Dillingham","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":"Xavier Corp","09:00:00":"Avengers Inc","09:20:00":"SHIELD ","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Niko Skievaski","Day":"Wednesday","Block":"AM","08:00:00":"Acme","08:20:00":"Xavier Corp","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":"Justice League","09:40:00":null,"10:00:00":null,"10:20:00":"SHIELD ","10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Phil Carter","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":null,"09:20:00":"Olympus","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"X Men ","11:00:00":"Pied Piper","11:20:00":"Xavier Corp","11:40:00":null},{"Mentor":"Sasha Charlemagne","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"Umbrella Corp","08:40:00":null,"09:00:00":null,"09:20:00":null,"09:40:00":"Marvel","10:00:00":null,"10:20:00":null,"10:40:00":"SHIELD ","11:00:00":null,"11:20:00":"X Men ","11:40:00":null},{"Mentor":"Zach Nies","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"Justice League","08:40:00":null,"09:00:00":null,"09:20:00":"Xavier Corp","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Pied Piper","11:00:00":"Avengers Inc","11:20:00":null,"11:40:00":"Acme"},{"Mentor":"Kyle Kuczun","Day":"Thursday","Block":"AM","08:00:00":null,"08:20:00":"SHIELD ","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Xavier Corp","11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Morris Wheeler","Day":"Thursday","Block":"AM","08:00:00":null,"08:20:00":"Xavier Corp","08:40:00":null,"09:00:00":null,"09:20:00":"Acme","09:40:00":"SHIELD ","10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Stephan Hagemann","Day":"Thursday","Block":"AM","08:00:00":"SHIELD ","08:20:00":"Justice League","08:40:00":null,"09:00:00":null,"09:20:00":null,"09:40:00":null,"10:00:00":"Avengers Inc","10:20:00":null,"10:40:00":"Pied Piper","11:00:00":"Xavier Corp","11:20:00":null,"11:40:00":null},{"Mentor":"Adam Burrows","Day":"Friday","Block":"AM","08:00:00":"Wayne Industries","08:20:00":null,"08:40:00":"Pied Piper","09:00:00":"X Men ","09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":"Umbrella Corp","10:40:00":null,"11:00:00":null,"11:20:00":"Xavier Corp","11:40:00":"Justice League"},{"Mentor":"Daniel Feld","Day":"Friday","Block":"AM","08:00:00":"Marvel","08:20:00":"Olympus","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":"Umbrella Corp","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Aaron Schram","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Avengers Inc","14:10:00":"SHIELD ","14:30:00":null,"14:50:00":null,"15:10:00":"Pied Piper","15:30:00":null,"15:50:00":"Acme","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Eric Kirby","Day":"Monday","Block":"PM","13:10:00":"Xavier Corp","13:30:00":null,"13:50:00":"Acme","14:10:00":"Pied Piper","14:30:00":"Justice League","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"SHIELD ","16:30:00":null,"16:50:00":"Avengers Inc"},{"Mentor":"Jackson Carson","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Pied Piper","13:50:00":"Marvel","14:10:00":"Acme","14:30:00":null,"14:50:00":"Justice League","15:10:00":"Avengers Inc","15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Umbrella Corp"},{"Mentor":"Jim Franklin","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":null,"14:30:00":null,"14:50:00":"Acme","15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"Umbrella Corp","16:30:00":"Marvel","16:50:00":null},{"Mentor":"Julie Penner","Day":"Monday","Block":"PM","13:10:00":"Umbrella Corp","13:30:00":"Marvel","13:50:00":"Justice League","14:10:00":"X Men ","14:30:00":"Pied Piper","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":"Avengers Inc","16:50:00":"Olympus"},{"Mentor":"Nick Hofmeister","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"X Men ","13:50:00":"Wayne Industries","14:10:00":null,"14:30:00":null,"14:50:00":null,"15:10:00":"Marvel","15:30:00":null,"15:50:00":null,"16:10:00":"Olympus","16:30:00":null,"16:50:00":"Xavier Corp"},{"Mentor":"Nicko van Someren","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":"Umbrella Corp","14:30:00":null,"14:50:00":null,"15:10:00":"Wayne Industries","15:30:00":"SHIELD ","15:50:00":"Marvel","16:10:00":"Xavier Corp","16:30:00":"Pied Piper","16:50:00":null},{"Mentor":"Ryan Broshar","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Wayne Industries","13:50:00":"X Men ","14:10:00":null,"14:30:00":null,"14:50:00":null,"15:10:00":"Justice League","15:30:00":"Pied Piper","15:50:00":"Umbrella Corp","16:10:00":"Marvel","16:30:00":"Xavier Corp","16:50:00":null},{"Mentor":"Shay Har-Noy","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Justice League","13:50:00":null,"14:10:00":null,"14:30:00":"Xavier Corp","14:50:00":"Marvel","15:10:00":null,"15:30:00":null,"15:50:00":"Pied Piper","16:10:00":"Avengers Inc","16:30:00":"Wayne Industries","16:50:00":null},{"Mentor":"Anthony Christie","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":"Marvel","14:30:00":null,"14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"Justice League","16:30:00":"Acme","16:50:00":"Pied Piper"},{"Mentor":"Blake Yeager","Day":"Tuesday","Block":"PM","13:10:00":"Justice League","13:30:00":"Marvel","13:50:00":"SHIELD ","14:10:00":null,"14:30:00":"Pied Piper","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":"Xavier Corp","16:10:00":null,"16:30:00":"Umbrella Corp","16:50:00":null},{"Mentor":"Brett Jackson","Day":"Tuesday","Block":"PM","13:10:00":"Marvel","13:30:00":"Xavier Corp","13:50:00":null,"14:10:00":null,"14:30:00":"Avengers Inc","14:50:00":null,"15:10:00":null,"15:30:00":"Justice League","15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Wayne Industries"},{"Mentor":"Chris Marks","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":null,"14:30:00":"X Men ","14:50:00":"Olympus","15:10:00":null,"15:30:00":"Marvel","15:50:00":null,"16:10:00":"Xavier Corp","16:30:00":null,"16:50:00":"Justice League"},{"Mentor":"Don Hazell","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"SHIELD ","13:50:00":null,"14:10:00":"Xavier Corp","14:30:00":"Wayne Industries","14:50:00":"Justice League","15:10:00":null,"15:30:00":null,"15:50:00":"Pied Piper","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Erin Rand","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Acme","14:10:00":null,"14:30:00":"SHIELD ","14:50:00":"X Men ","15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":"Marvel","16:50:00":"Avengers Inc"},{"Mentor":"Josh Scott","Day":"Tuesday","Block":"PM","13:10:00":"X Men ","13:30:00":"Acme","13:50:00":"Marvel","14:10:00":"Avengers Inc","14:30:00":"Umbrella Corp","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Olympus"},{"Mentor":"Mindy Nies","Day":"Tuesday","Block":"PM","13:10:00":"Olympus","13:30:00":null,"13:50:00":"Justice League","14:10:00":"Umbrella Corp","14:30:00":"Marvel","14:50:00":null,"15:10:00":null,"15:30:00":"X Men ","15:50:00":"SHIELD ","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Natty Zola","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"Avengers Inc","13:50:00":null,"14:10:00":"X Men ","14:30:00":"Xavier Corp","14:50:00":"SHIELD ","15:10:00":"Umbrella Corp","15:30:00":"Wayne Industries","15:50:00":"Marvel","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Sue Heilbronner","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"Umbrella Corp","13:50:00":null,"14:10:00":"Olympus","14:30:00":null,"14:50:00":"Marvel","15:10:00":"X Men ","15:30:00":"SHIELD ","15:50:00":null,"16:10:00":null,"16:30:00":"Justice League","16:50:00":null},{"Mentor":"Andrea Kalmans","Day":"Wednesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Umbrella Corp","14:10:00":null,"14:30:00":"Acme","14:50:00":"Marvel","15:10:00":"Avengers Inc","15:30:00":null,"15:50:00":null,"16:10:00":"Wayne Industries","16:30:00":null,"16:50:00":"Justice League"}]');

const TableSchedule = ({resSchedule}) => {

  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState(null);

  const data = resSchedule;
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo(null);
  };

  const clearAll = () => {
      setFilteredInfo(null);
      setSortedInfo(null);
  };

  const setAgeSort = () => {
      setSortedInfo({
        order: 'descend',
        columnKey: 'age',
      })
  };
    const columns = [
      {
        title: 'Mentor',
        dataIndex: 'Mentor',
        key: 'Mentor',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        
      },
      {
        title: 'Day',
        dataIndex: 'Day',
        key: 'Day',
        filters: [
            {text: 'Monday', value:'Monday'},
            {text: 'Tuesday', value: 'Tuesday'},
        ],
        
        onFilter: (value, record) => record.Day.includes(value),
        sorter: (a, b) => a.Day - b.Day,
        
      },
      {
        title: 'Block',
        dataIndex: 'Block',
        key: 'Block',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
      
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '08:00',
        dataIndex: '08:00:00',
        key: '08:00:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
      
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '08:20',
        dataIndex: '08:20:00',
        key: '08:20:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
      
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '08:40',
        dataIndex: '08:40:00',
        key: '08:40:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '09:00',
        dataIndex: '09:00:00',
        key: '09:00:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
       
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '09:20',
        dataIndex: '09:20:00',
        key: '09:20:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '09:40',
        dataIndex: '09:40:00',
        key: '09:40:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '10:00',
        dataIndex: '10:00:00',
        key: '10:00:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
       
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '10:20',
        dataIndex: '10:20:00',
        key: '10:20',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '10:40',
        dataIndex: '10:40:00',
        key: '10:40:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      },
      {
        title: '11:00',
        dataIndex: '11:00:00',
        key: '11:00:00',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        
      }
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Input size='small' placeholder='filter Block' type={Input.TextArea} onClick={setAgeSort}/>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table style={{marginBottom: 5}}scroll={{ x: true }} size='small' columns={columns} dataSource={data} onChange={handleChange} />
      </>
    );
}

export default TableSchedule;