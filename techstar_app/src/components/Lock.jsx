import { Button, Drawer, Switch } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../assets/styles/Survey.css'

function Lock(){
  const [state, setState] = useState(false);

  function toggleChecked(){
    setState(true);
  };

  function toggleDisable(){
    setState(false);
  };

  function onChange(){
    setState(!state)
  };

  return (
    <>
      <p>
          <Button type="primary" size="small" onClick={() => onChange()}>
            {!state ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ margin: '0', background: "#39C643" }}
            type="primary"
            size="large"
            shape="round"
            onClick={() => {onChange()}}
          >
            {!state ? <UnlockOutlined /> : <LockOutlined />}
          </Button>
          <Switch
            checkedChildren={<LockOutlined />}
            unCheckedChildren="Submit"
            onClick={() => {onChange()}}
          >
            {!state ? <UnlockOutlined /> : <Drawer />}
          </Switch>
        </p>
    </>
  );
}
export default Lock;