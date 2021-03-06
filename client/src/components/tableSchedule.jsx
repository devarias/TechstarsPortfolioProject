import React, {useState, useEffect} from 'react';
import { Table, Button, Space, Select } from 'antd';
const { Option } = Select;

const companies = JSON.parse('[{"company_id":"25a69721-6a3f-4165-8cfa-3f6651489368","company":"Avengers Inc","email":"avengers@example.com"},{"company_id":"cdf0ce2b-82e3-4473-bde1-3724a660a35d","company":"Pied Piper","email":"pied@example.com"},{"company_id":"4a3d7293-ab39-4c6a-adc8-d8a2f77202c4","company":"SHIELD ","email":"shield@example.com"},{"company_id":"940ed1f7-75d3-4f0f-9583-d4004cc77100","company":"Acme","email":"acme@example.com"},{"company_id":"d1322d8d-42d6-4e8b-aad5-2d83ec16ea18","company":"Wayne Industries","email":"wayne@example.com"},{"company_id":"9517b8bd-ca54-4f0c-b552-ed7f340a766b","company":"X Men ","email":"xmen@example.com"},{"company_id":"c4496c7f-73a2-4276-bf73-b23ab6506ad2","company":"Xavier Corp","email":"xavier@example.com"},{"company_id":"19a3a0e5-e4d8-4141-8b13-ac22de8681ed","company":"Marvel","email":"marvel@example.com"},{"company_id":"07933870-01e1-46d5-8aea-8df52ae581e9","company":"Justice League","email":"justice@example.com"},{"company_id":"a0d41081-93ae-47cc-bda4-d69e1a22f25c","company":"Umbrella Corp","email":"umbrella@example.com"},{"company_id":"6b5dcf36-0771-4104-bdc8-a31ad96507f0","company":"Olympus","email":"olympus@example.com"}]');
const data = JSON.parse('[{"Mentor":"David Hose","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":"Olympus","09:00:00":null,"09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Wayne Industries","11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Fletcher Richman","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":"Pied Piper","08:40:00":"Xavier Corp","09:00:00":null,"09:20:00":"Olympus","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Ivan Lopez","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":"Xavier Corp","09:20:00":null,"09:40:00":"Olympus","10:00:00":"Pied Piper","10:20:00":"SHIELD ","10:40:00":null,"11:00:00":null,"11:20:00":"Acme","11:40:00":"Umbrella Corp"},{"Mentor":"Jackie Young","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":"Marvel","09:20:00":"X Men ","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":"Umbrella Corp","11:20:00":"Wayne Industries","11:40:00":"Olympus"},{"Mentor":"Rachel ten Brink","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":"Olympus","08:40:00":null,"09:00:00":null,"09:20:00":"Umbrella Corp","09:40:00":"Marvel","10:00:00":"Avengers Inc","10:20:00":null,"10:40:00":null,"11:00:00":"SHIELD ","11:20:00":null,"11:40:00":"Acme"},{"Mentor":"Ara Howard","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"SHIELD ","08:40:00":null,"09:00:00":"Justice League","09:20:00":"Pied Piper","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Jeremy Dillingham","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":"Xavier Corp","09:00:00":"Avengers Inc","09:20:00":"SHIELD ","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Niko Skievaski","Day":"Wednesday","Block":"AM","08:00:00":"Acme","08:20:00":"Xavier Corp","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":"Justice League","09:40:00":null,"10:00:00":null,"10:20:00":"SHIELD ","10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Phil Carter","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":null,"09:00:00":null,"09:20:00":"Olympus","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"X Men ","11:00:00":"Pied Piper","11:20:00":"Xavier Corp","11:40:00":null},{"Mentor":"Sasha Charlemagne","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"Umbrella Corp","08:40:00":null,"09:00:00":null,"09:20:00":null,"09:40:00":"Marvel","10:00:00":null,"10:20:00":null,"10:40:00":"SHIELD ","11:00:00":null,"11:20:00":"X Men ","11:40:00":null},{"Mentor":"Zach Nies","Day":"Wednesday","Block":"AM","08:00:00":null,"08:20:00":"Justice League","08:40:00":null,"09:00:00":null,"09:20:00":"Xavier Corp","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Pied Piper","11:00:00":"Avengers Inc","11:20:00":null,"11:40:00":"Acme"},{"Mentor":"Kyle Kuczun","Day":"Thursday","Block":"AM","08:00:00":null,"08:20:00":"SHIELD ","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Xavier Corp","11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Morris Wheeler","Day":"Thursday","Block":"AM","08:00:00":null,"08:20:00":"Xavier Corp","08:40:00":null,"09:00:00":null,"09:20:00":"Acme","09:40:00":"SHIELD ","10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Stephan Hagemann","Day":"Thursday","Block":"AM","08:00:00":"SHIELD ","08:20:00":"Justice League","08:40:00":null,"09:00:00":null,"09:20:00":null,"09:40:00":null,"10:00:00":"Avengers Inc","10:20:00":null,"10:40:00":"Pied Piper","11:00:00":"Xavier Corp","11:20:00":null,"11:40:00":null},{"Mentor":"Adam Burrows","Day":"Friday","Block":"AM","08:00:00":"Wayne Industries","08:20:00":null,"08:40:00":"Pied Piper","09:00:00":"X Men ","09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":"Umbrella Corp","10:40:00":null,"11:00:00":null,"11:20:00":"Xavier Corp","11:40:00":"Justice League"},{"Mentor":"Daniel Feld","Day":"Friday","Block":"AM","08:00:00":"Marvel","08:20:00":"Olympus","08:40:00":"Avengers Inc","09:00:00":"Pied Piper","09:20:00":"Umbrella Corp","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Aaron Schram","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Avengers Inc","14:10:00":"SHIELD ","14:30:00":null,"14:50:00":null,"15:10:00":"Pied Piper","15:30:00":null,"15:50:00":"Acme","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Eric Kirby","Day":"Monday","Block":"PM","13:10:00":"Xavier Corp","13:30:00":null,"13:50:00":"Acme","14:10:00":"Pied Piper","14:30:00":"Justice League","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"SHIELD ","16:30:00":null,"16:50:00":"Avengers Inc"},{"Mentor":"Jackson Carson","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Pied Piper","13:50:00":"Marvel","14:10:00":"Acme","14:30:00":null,"14:50:00":"Justice League","15:10:00":"Avengers Inc","15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Umbrella Corp"},{"Mentor":"Jim Franklin","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":null,"14:30:00":null,"14:50:00":"Acme","15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"Umbrella Corp","16:30:00":"Marvel","16:50:00":null},{"Mentor":"Julie Penner","Day":"Monday","Block":"PM","13:10:00":"Umbrella Corp","13:30:00":"Marvel","13:50:00":"Justice League","14:10:00":"X Men ","14:30:00":"Pied Piper","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":"Avengers Inc","16:50:00":"Olympus"},{"Mentor":"Nick Hofmeister","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"X Men ","13:50:00":"Wayne Industries","14:10:00":null,"14:30:00":null,"14:50:00":null,"15:10:00":"Marvel","15:30:00":null,"15:50:00":null,"16:10:00":"Olympus","16:30:00":null,"16:50:00":"Xavier Corp"},{"Mentor":"Nicko van Someren","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":"Umbrella Corp","14:30:00":null,"14:50:00":null,"15:10:00":"Wayne Industries","15:30:00":"SHIELD ","15:50:00":"Marvel","16:10:00":"Xavier Corp","16:30:00":"Pied Piper","16:50:00":null},{"Mentor":"Ryan Broshar","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Wayne Industries","13:50:00":"X Men ","14:10:00":null,"14:30:00":null,"14:50:00":null,"15:10:00":"Justice League","15:30:00":"Pied Piper","15:50:00":"Umbrella Corp","16:10:00":"Marvel","16:30:00":"Xavier Corp","16:50:00":null},{"Mentor":"Shay Har-Noy","Day":"Monday","Block":"PM","13:10:00":null,"13:30:00":"Justice League","13:50:00":null,"14:10:00":null,"14:30:00":"Xavier Corp","14:50:00":"Marvel","15:10:00":null,"15:30:00":null,"15:50:00":"Pied Piper","16:10:00":"Avengers Inc","16:30:00":"Wayne Industries","16:50:00":null},{"Mentor":"Anthony Christie","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":"Marvel","14:30:00":null,"14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":"Justice League","16:30:00":"Acme","16:50:00":"Pied Piper"},{"Mentor":"Blake Yeager","Day":"Tuesday","Block":"PM","13:10:00":"Justice League","13:30:00":"Marvel","13:50:00":"SHIELD ","14:10:00":null,"14:30:00":"Pied Piper","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":"Xavier Corp","16:10:00":null,"16:30:00":"Umbrella Corp","16:50:00":null},{"Mentor":"Brett Jackson","Day":"Tuesday","Block":"PM","13:10:00":"Marvel","13:30:00":"Xavier Corp","13:50:00":null,"14:10:00":null,"14:30:00":"Avengers Inc","14:50:00":null,"15:10:00":null,"15:30:00":"Justice League","15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Wayne Industries"},{"Mentor":"Chris Marks","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":null,"14:10:00":null,"14:30:00":"X Men ","14:50:00":"Olympus","15:10:00":null,"15:30:00":"Marvel","15:50:00":null,"16:10:00":"Xavier Corp","16:30:00":null,"16:50:00":"Justice League"},{"Mentor":"Don Hazell","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"SHIELD ","13:50:00":null,"14:10:00":"Xavier Corp","14:30:00":"Wayne Industries","14:50:00":"Justice League","15:10:00":null,"15:30:00":null,"15:50:00":"Pied Piper","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Erin Rand","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Acme","14:10:00":null,"14:30:00":"SHIELD ","14:50:00":"X Men ","15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":"Marvel","16:50:00":"Avengers Inc"},{"Mentor":"Josh Scott","Day":"Tuesday","Block":"PM","13:10:00":"X Men ","13:30:00":"Acme","13:50:00":"Marvel","14:10:00":"Avengers Inc","14:30:00":"Umbrella Corp","14:50:00":null,"15:10:00":null,"15:30:00":null,"15:50:00":null,"16:10:00":null,"16:30:00":null,"16:50:00":"Olympus"},{"Mentor":"Mindy Nies","Day":"Tuesday","Block":"PM","13:10:00":"Olympus","13:30:00":null,"13:50:00":"Justice League","14:10:00":"Umbrella Corp","14:30:00":"Marvel","14:50:00":null,"15:10:00":null,"15:30:00":"X Men ","15:50:00":"SHIELD ","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Natty Zola","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"Avengers Inc","13:50:00":null,"14:10:00":"X Men ","14:30:00":"Xavier Corp","14:50:00":"SHIELD ","15:10:00":"Umbrella Corp","15:30:00":"Wayne Industries","15:50:00":"Marvel","16:10:00":null,"16:30:00":null,"16:50:00":null},{"Mentor":"Sue Heilbronner","Day":"Tuesday","Block":"PM","13:10:00":null,"13:30:00":"Umbrella Corp","13:50:00":null,"14:10:00":"Olympus","14:30:00":null,"14:50:00":"Marvel","15:10:00":"X Men","15:30:00":"SHIELD ","15:50:00":null,"16:10:00":null,"16:30:00":"Justice League","16:50:00":null},{"Mentor":"Andrea Kalmans","Day":"Wednesday","Block":"PM","13:10:00":null,"13:30:00":null,"13:50:00":"Umbrella Corp","14:10:00":null,"14:30:00":"Acme","14:50:00":"Marvel","15:10:00":"Avengers Inc","15:30:00":null,"15:50:00":null,"16:10:00":"Wayne Industries","16:30:00":null,"16:50:00":"Justice League"}]');
const colors = ['#483D8B', '#8FBC8F', '#E9967A', '#8B0000', '#9932CC', '#FF8C00', '#4B0082', '#008000', '#808080', '#FFFF00', '#008080'];
const  list_comp = companies.map((obj) => { return obj.company });
console.log(list_comp);
const list_comp_colors = list_comp.map((comp, index) => {
          let col = colors[index];
          return({company: comp, color: col});
});
console.log(list_comp_colors);
const mentor_am_filter = data.filter((obj) =>  { return obj.Block === 'AM'});
const mentor_am = mentor_am_filter.map((obj) => { return {text: obj.Mentor, value: obj.Mentor}});
const mentor_pm_filter = data.filter((obj) =>  { return obj.Block === 'PM'});
const mentor_pm = mentor_pm_filter.map((obj) => { return {text: obj.Mentor, value: obj.Mentor}});
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const days_filter = days.map((day) => {return {text: day, value: day}});
function cell_color(text) {
  console.log(text);
    if (text !== null) {
      let color = list_comp_colors.filter((obj) => {return obj.company === text})
      let col_row;
      color ? col_row = color[0].color: col_row = '#FFFFFF';
      console.log(col_row);
    return { 
      props: {
        style: { background: col_row },
      },children: <div>{text}</div>
    }
  } else {
    return {children: <div>{text}</div>}
  }
}

const AM = [{
  title: 'Mentor',
  dataIndex: 'Mentor',
  key: 'Mentor',
  filters: mentor_am,
  onFilter: (value, record) => record.Mentor.indexOf(value) === 0,
  width: 200
},
{
  title: 'Day',
  dataIndex: 'Day',
  key: 'Day',
  filters: days_filter,
  onFilter: (value, record) => record.Day.indexOf(value) === 0,
  width: 100
},
{
  title: '08:00',
  dataIndex: '08:00:00',
  key: '08:00:00',
  render(text) { return cell_color(text);},
},
{
  title: '08:20',
  dataIndex: '08:20:00',
  key: '08:20:00',
  render(text) { return cell_color(text);},
},
{
  title: '08:40',
  dataIndex: '08:40:00',
  key: '08:40:00',
  render(text) { return cell_color(text);},
},
{
  title: '09:00',
  dataIndex: '09:00:00',
  key: '09:00:00',
  render(text) { return cell_color(text);},
},
{
  title: '09:20',
  dataIndex: '09:20:00',
  key: '09:20:00',
  render(text) { return cell_color(text);},
},
{
  title: '09:40',
  dataIndex: '09:40:00',
  key: '09:40:00',
  render(text) { return cell_color(text);},
},
{
  title: '10:00',
  dataIndex: '10:00:00',
  key: '10:00:00',  
  render(text) { return cell_color(text);},      
},
{
  title: '10:20',
  dataIndex: '10:20:00',
  key: '10:20',
  render(text) { return cell_color(text);},
},
{
  title: '10:40',
  dataIndex: '10:40:00',
  key: '10:40:00',
  render(text) { return cell_color(text);},
},
{
  title: '11:00',
  dataIndex: '11:00:00',
  key: '11:00:00',
  render(text) { return cell_color(text);},
},
{
  title: '11:20',
  dataIndex: '11:20:00',
  key: '11:20:00',
  render(text) { return cell_color(text);},
},
{
  title: '11:40',
  dataIndex: '11:40:00',
  key: '11:40:00',
  render(text) { return cell_color(text);},
}];

const PM = [{
  title: 'Mentor',
  dataIndex: 'Mentor',
  key: 'Mentor',
  filters: mentor_pm,
  onFilter: (value, record) => record.Mentor.indexOf(value) === 0,
  width: 200,
},
{
  title: 'Day',
  dataIndex: 'Day',
  key: 'Day',
  filters: days_filter,
  onFilter: (value, record) => record.Day.indexOf(value) === 0,
  width: 100
},
{
  title: '13:00',
  dataIndex: '13:10:00',
  key: '13:10:00',
  
},
{
  title: '13:20',
  dataIndex: '13:30:00',
  key: '13:30:00',
},
{
  title: '13:40',
  dataIndex: '13:50:00',
  key: '13:50:00',
},
{
  title: '14:00',
  dataIndex: '14:10:00',
  key: '14:00:10',
},
{
  title: '14:20',
  dataIndex: '14:30:00',
  key: '14:30:00',
},
{
  title: '14:40',
  dataIndex: '14:50:00',
  key: '14:50:00',
},
{
  title: '15:00',
  dataIndex: '15:10:00',
  key: '15:10:00',        
},
{
  title: '15:20',
  dataIndex: '15:30:00',
  key: '15:30:00',
},
{
  title: '15:40',
  dataIndex: '15:50:00',
  key: '15:50:00',
},
{
  title: '16:00',
  dataIndex: '16:10:00',
  key: '16:10:00',
},
{
  title: '16:20',
  dataIndex: '16:30:00',
  key: '16:30:00',
},
{
  title: '16:40',
  dataIndex: '16:50:00',
  key: '16:50:00',
},
];
const TableSchedule = ({resSchedule}) => {

  const [block, setBlock] = useState('AM');
  const [dataFilter, setDataFilter] = useState(data.filter((row) => row.Block === block))
  //let data_filter = data.filter((row) => row.Block === block); 
  useEffect(() => {
      setDataFilter(data.filter((row) => {return row.Block === block}));
    }, [block]);

  //const data = resSchedule;
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
  };

  const clearFilters = () => {
   
  };

  const clearAll = () => {
 
  };

  const setAgeSort = () => {
     
  };

  const handleBlock = (value) => {
    setBlock(value);
  }
    const columns = block === 'AM'? AM: PM;
      
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Select defaultValue="AM" style={{ width: 120 }} onChange={handleBlock} >
            <Option value="AM">AM</Option> 
            <Option value="PM">PM</Option>
          </Select>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table style={{marginBottom: 5}} scroll={{x: 'max-content'}}size='small' columns={columns} dataSource={dataFilter} onChange={handleChange} rowKey={record => record.uid}/>
      </>
    );
}

export default TableSchedule;