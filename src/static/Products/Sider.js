import React from 'react'
import { Layout } from 'antd'
import { DashboardOutlined, UserOutlined,FormOutlined,SettingOutlined,MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const {Sider: AntSider} = Layout
export default function Sidebar() {

    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }

      const items = [
        getItem('فیلترها', 'sub1', <MailOutlined />,[],'group',),
        getItem('دسته بندی ', 'sub2', null, [
          getItem('Option 5', '5'),
          getItem('Option 6', '6'),
          getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
        getItem('برند', 'sub4', null, [
          getItem('Option 9', '9'),
          getItem('Option 10', '10'),
          getItem('Option 11', '11'),
          getItem('Option 12', '12'),
        ]),
        getItem('خدمات', 'sub5', null, [
            getItem('Option 9', '13'),
            getItem('Option 10', '14'),
            getItem('Option 11', '15'),
            getItem('Option 12', '16'),
          ]),
          getItem('ارسال مستقیم', 'sub6', <MailOutlined />,[],'group',),
          getItem('نوع فروشنده', 'sub7', <MailOutlined />,[],'group',),
      ];
      const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <AntSider
    style = {{
      color :"#000",
      fontWeight:"700",
      backgroundColor:"#eee"
      
    }}
      width = {'250px'}

>
            <Menu
      onClick={onClick}

      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </AntSider>
  )
}
