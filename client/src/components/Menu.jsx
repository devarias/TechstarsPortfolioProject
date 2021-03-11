import React from 'react';
import { Menu, message } from 'antd';


function DropMenu(props) {

    const mentors = props.data.map((obj, index) => 
      <Menu.Item key={index + 1}>
        {obj.mentor ? obj.mentor : obj.company}
      </Menu.Item>
    );

    function handleMenuClick({ key }) {
        message.info(' selected');
        if (key === '0') {
          props.displayTable(true);
        }
    }

    return (
    <>
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">
          Select All
        </Menu.Item>
        {mentors}
      </Menu>
    </>

    )
}
export default DropMenu;
