import React from 'react';
import '../assets/styles/Survey.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Mentor(props) {
  return(
    <div>
              <Avatar position='relative' size={64} icon={<UserOutlined />} />
              <span>{props.company}</span>
    </div>
  )
}
export default Mentor;
