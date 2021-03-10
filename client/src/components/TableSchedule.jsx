import React, {useState, useEffect} from 'react';
import { Table, Button, Space, Select } from 'antd';
import { CSVDownloader } from 'react-papaparse';
import '../styles/TableSchedule.css'
const { Option } = Select;



const companies = JSON.parse('[{"company_id":"25a69721-6a3f-4165-8cfa-3f6651489368","company":"Avengers Inc","email":"avengers@example.com"},{"company_id":"cdf0ce2b-82e3-4473-bde1-3724a660a35d","company":"Pied Piper","email":"pied@example.com"},{"company_id":"4a3d7293-ab39-4c6a-adc8-d8a2f77202c4","company":"SHIELD","email":"shield@example.com"},{"company_id":"940ed1f7-75d3-4f0f-9583-d4004cc77100","company":"Acme","email":"acme@example.com"},{"company_id":"d1322d8d-42d6-4e8b-aad5-2d83ec16ea18","company":"Wayne Industries","email":"wayne@example.com"},{"company_id":"9517b8bd-ca54-4f0c-b552-ed7f340a766b","company":"X Men","email":"xmen@example.com"},{"company_id":"c4496c7f-73a2-4276-bf73-b23ab6506ad2","company":"Xavier Corp","email":"xavier@example.com"},{"company_id":"19a3a0e5-e4d8-4141-8b13-ac22de8681ed","company":"Marvel","email":"marvel@example.com"},{"company_id":"07933870-01e1-46d5-8aea-8df52ae581e9","company":"Justice League","email":"justice@example.com"},{"company_id":"a0d41081-93ae-47cc-bda4-d69e1a22f25c","company":"Umbrella Corp","email":"umbrella@example.com"},{"company_id":"6b5dcf36-0771-4104-bdc8-a31ad96507f0","company":"Olympus","email":"olympus@example.com"}]')
const colors = ['#483D8B', '#8FBC8F', '#E9967A', '#8B0000', '#9932CC', '#FF8C00', '#4B0082', '#008000', '#808080', '#c9db00', '#008080'];
const  list_comp = companies.map((obj) => { return obj.company });
const list_comp_colors = list_comp.map((comp, index) => {
          let col = colors[index];
          return({company: comp, color: col});
});

/* This function is in charge to color format every cell on the schedule table according to the company */
function cell_color(text) {
    if (text !== null) {
      let color = list_comp_colors.filter((obj) => {return obj.company === text});
      let col_row;
      col_row = color ? color[0]?.color: '#FFFFFF';
    return { 
      props: {
        style: { backgroundColor: col_row, borderRadius: "10px", bordered: '10px'},
      },children: <div>{text}</div>
      }
    } else {
      return {children: <div>{text}</div>}
    }
}

/**
 * TableSchedule is the component to generate the data table for the schedule.
 * @resSchedule: is the information retrieved form the back-end to generate the scheduling table.
 */
const TableSchedule = ({resSchedule}) => {

  /* block handles the state of the column tables to be rendered */
  const [block, setBlock] = useState('AM');
  /* filteredInfo handles the mentors and days to be filtered */
  const [filteredInfo, setFilteredInfo] = useState({});
  /* sortedInfo handles the information for sorting the mentor column */
  const [sortedInfo, setSortedInfo] = useState({});
  /* Generate the two datasets for the AM and PM tables */
  const dataFilterAM = resSchedule.filter((row) => row.Block === 'AM');
  const dataFilterPM = resSchedule.filter((row) => row.Block === 'PM');
  /* Wrangling the recieved data to generate the list to filter the mentors ans the days*/
  const mentor_am_filter = resSchedule.filter((obj) =>  { return obj.Block === 'AM' });
  const mentor_am = mentor_am_filter.map((obj) => { return { text: obj.Mentor, value: obj.Mentor }});
  const mentor_pm_filter = resSchedule.filter((obj) =>  { return obj.Block === 'PM' });
  const mentor_pm = mentor_pm_filter.map((obj) => { return { text: obj.Mentor, value: obj.Mentor }});
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const days_filter = days.map((day) => {return {text: day, value: day}});

  /* Handle the change on the filter and sorters components */
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  /* Description of the columns for the AM block table*/
  const AM = [{
    title: 'Mentor',
    dataIndex: 'Mentor',
    key: 'Mentor',
    filters: mentor_am.sort(function(a, b) {
      let nameA = a.text.toUpperCase(); // ignore upper and lowercase
      let nameB = b.text.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }),
    sorter: (a, b) => {
      let nameA = a.Mentor.toUpperCase(); // ignore upper and lowercase
      let nameB = b.Mentor.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    },
    sortOrder: sortedInfo.columnKey === 'Mentor' && sortedInfo.order,
    filteredValue: filteredInfo?.Mentor || null,
    onFilter: (value, record) => record.Mentor.indexOf(value) === 0,
    width: 150,
    background: '#FFFFFF',
    fixed: 'left',
    align: 'left',
  },
  {
    title: 'Day',
    dataIndex: 'Day',
    key: 'Day',
    filters: days_filter,
    filteredValue: filteredInfo?.Day || null,
    onFilter: (value, record) => record.Day.indexOf(value) === 0,
    width: 100,
    fixed: 'left',
    align: 'left',
  },
  {
    title: '08:00',
    dataIndex: '08:00:00',
    key: '08:00:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '08:20',
    dataIndex: '08:20:00',
    key: '08:20:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '08:40',
    dataIndex: '08:40:00',
    key: '08:40:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '09:00',
    dataIndex: '09:00:00',
    key: '09:00:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '09:20',
    dataIndex: '09:20:00',
    key: '09:20:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '09:40',
    dataIndex: '09:40:00',
    key: '09:40:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '10:00',
    dataIndex: '10:00:00',
    key: '10:00:00',  
    render(text) { return cell_color(text);}, 
    align: 'center', 
    width: 130,  
  },
  {
    title: '10:20',
    dataIndex: '10:20:00',
    key: '10:20',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '10:40',
    dataIndex: '10:40:00',
    key: '10:40:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '11:00',
    dataIndex: '11:00:00',
    key: '11:00:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '11:20',
    dataIndex: '11:20:00',
    key: '11:20:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '11:40',
    dataIndex: '11:40:00',
    key: '11:40:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  }];

  /* Description of the Columns for the PM block table */
  const PM = [{
    title: 'Mentor',
    dataIndex: 'Mentor',
    key: 'Mentor',
    filters: mentor_pm.sort(function(a, b) {
      var nameA = a.text.toUpperCase(); // ignore upper and lowercase
      var nameB = b.text.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    }),
    sorter: (a, b) => {
      let nameA = a.Mentor.toUpperCase(); // ignore upper and lowercase
      let nameB = b.Mentor.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    },
    sortOrder: sortedInfo.columnKey === 'Mentor' && sortedInfo.order,
    filteredValue: filteredInfo?.Mentor || null,
    onFilter: (value, record) => record.Mentor.indexOf(value) === 0,
    sortOrder: sortedInfo.columnKey === 'Mentor' && sortedInfo.order,
    width: 150,
    fixed: 'left',
    align: 'left',
  },
  {
    title: 'Day',
    dataIndex: 'Day',
    key: 'Day',
    filters: days_filter,
    filteredValue: filteredInfo?.Day || null,
    onFilter: (value, record) => record.Day.indexOf(value) === 0,
    width: 100,
    fixed: 'left',
    align: 'left',
  },
  {
    title: '13:00',
    dataIndex: '13:10:00',
    key: '13:10:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '13:20',
    dataIndex: '13:30:00',
    key: '13:30:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '13:40',
    dataIndex: '13:50:00',
    key: '13:50:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '14:00',
    dataIndex: '14:10:00',
    key: '14:00:10',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '14:20',
    dataIndex: '14:30:00',
    key: '14:30:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '14:40',
    dataIndex: '14:50:00',
    key: '14:50:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '15:00',
    dataIndex: '15:10:00',
    key: '15:10:00',   
    render(text) { return cell_color(text);}, 
    align: 'center',  
    width: 130,  
  },
  {
    title: '15:20',
    dataIndex: '15:30:00',
    key: '15:30:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '15:40',
    dataIndex: '15:50:00',
    key: '15:50:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '16:00',
    dataIndex: '16:10:00',
    key: '16:10:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '16:20',
    dataIndex: '16:30:00',
    key: '16:30:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,
  },
  {
    title: '16:40',
    dataIndex: '16:50:00',
    key: '16:50:00',
    render(text) { return cell_color(text);},
    align: 'center',
    width: 130,  
  },
  ];
  /* Handles the clear for the filters */
  const clearFilters = () => {
   setFilteredInfo(null);
  };

  /* handles the display of the AM and PM tables */
  const handleBlock = (value) => {
    setBlock(value);
  }   

    return (
      <>
        <Space style={{ marginBottom: 16, marginLeft: 20 }}>
          <span>Select Block:</span>
          <Select defaultValue="AM" style={{ width: 110 }} onChange={handleBlock} >
            <Option value="AM">AM</Option> 
            <Option value="PM">PM</Option>
          </Select>
          <Button onClick={clearFilters}>Clear filters</Button>
            <CSVDownloader className="downloadBtn"
                data={resSchedule}
                type="button"
                filename={'schedule'}
                style={{
                  color: '#fff', 
                  backgroundColor: '#39C463', 
                  borderRadius: '5px',
                  height:32,
                  borderColor: '#39C463',
                  width: 110,
                }}
                bom={true}>
                Download
            </CSVDownloader>
        </Space> 
        <Table className='ant-table-layout-fixed' 
          style={{marginBottom: 5}} 
          bordered pagination={{ pageSize: 50 }} 
          scroll={{x: 'max-content'}} 
          size='small' 
          columns={block === 'AM' ? AM: PM} 
          sticky 
          dataSource={block === 'AM' ? dataFilterAM: dataFilterPM} 
          onChange={handleChange} 
          rowKey={record => record.uid}
          />
      </>
    );
}

export default TableSchedule;