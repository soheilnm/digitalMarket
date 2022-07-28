import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    DownloadOutlined,
    CloudUploadOutlined,
    MailOutlined,
    GiftFilled ,
    WalletOutlined,
    UsergroupAddOutlined,HomeOutlined,UserOutlined    
  } from "@ant-design/icons";
  import { Input, Menu, Button } from "antd";
  
export default class StickyNavbar extends Component {

    componentDidMount(){
        window.addEventListener("scroll", () => {
            const topBorder = document
              .getElementById("navbar-container")
              .getBoundingClientRect().top;
        
            topBorder >= 0
              ? document.getElementById("navbar").classList.remove("fixed")
              : document.getElementById("navbar").classList.add("fixed");
        });
      }
    
      componentWillUnmount(){
        window.removeEventListener('scroll')
      }
  render() {
    return (
      <div>
        <div className="navbar"></div>
        <div id="navbar-container">
            <div id="navbar">
            
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

      <div className="menu" id='menu'>
        <div className="subMenu">
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
            <Menu.Item key="mail" icon={<HomeOutlined />}>
              <Link to={'/'}>خانه  </Link> 
            </Menu.Item>
            <Menu.Item key="prdts" icon={<GiftFilled />}>
               <Link to={'/products'}>محصولات   </Link>
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
        </div>

      </div>
    )
  }
}
