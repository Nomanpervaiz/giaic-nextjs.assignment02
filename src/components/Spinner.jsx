import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
const Spinner = () => (
  <Flex align="center" className='h-96 flex justify-center mx-auto text-center items-center' gap="middle">
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  </Flex>
);
export default Spinner;