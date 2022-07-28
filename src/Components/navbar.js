import React from "react";

import {
  DownloadOutlined,
  CloudUploadOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  WalletOutlined,
  UsergroupAddOutlined,WhatsAppOutlined,UserOutlined    
} from "@ant-design/icons";
import { Input, Menu, Button } from "antd";



function Navbar() {

  
  return (
    <div>
      <div className="navbar"></div>
      <div className="navbarContents">
        <div className="logoImage">
          <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="logo" />
        </div>
        <div className="searchBar">
          <div>

      <Input.Search
        allowClear
        defaultValue="جستوجو "
      />

            
          </div>
        </div>

        <div className="loginBUttons">
          <div className="order">
            <Button
              className="navbarButton"
              type="dashed"
              icon={<CloudUploadOutlined />}
            >
              {" "}
              آپلود{" "}
            </Button>
            <Button
              className="navbarButton"
              type="dashed"
              icon={<DownloadOutlined />}
            >
              دانلود{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="subMenu">
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
            <Menu.SubMenu
              key="SubMenu"
              title="محصولات ما "
              icon={<SettingOutlined />}
            >
              <Menu.Item key="two" icon={<AppstoreOutlined />}>
                محصولات
              </Menu.Item>
              
            </Menu.SubMenu>
            <Menu.Item key="mail" icon={<WhatsAppOutlined  />}>
              پیام ها
            </Menu.Item>
            <Menu.Item key="cail" icon={<UserOutlined  />}>
              درباره ما
            </Menu.Item>
            <Menu.Item key="hail" icon={<MailOutlined />}>
              ارتباط با ما
            </Menu.Item>
            <Menu.Item key="dail" icon={<UsergroupAddOutlined  />}>
              همکاران ما
            </Menu.Item>
          </Menu>
        </div>
        <div className="walletCharge">
        <Button
              className="navbarButton"
              type="dashed"
              icon={<WalletOutlined />}
            >
              شارژ کیف پول{" "}
            </Button>
        </div>
      </div>
    </div>
  );
}
// export default Navbar;
