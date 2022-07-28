import React from "react";
import {
  MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";


const { Header, Footer, Sider: AntSider, Content } = Layout;
export default function SHOWPRODUCTS() {
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
    getItem("فیلترها", "sub1", <MailOutlined />, [], "group"),
    getItem("دسته بندی ", "sub2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("برند", "sub4", null, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("خدمات", "sub5", null, [
      getItem("Option 9", "13"),
      getItem("Option 10", "14"),
      getItem("Option 11", "15"),
      getItem("Option 12", "16"),
    ]),
    getItem("ارسال مستقیم", "sub6", <MailOutlined />, [], "group"),
    getItem("نوع فروشنده", "sub7", <MailOutlined />, [], "group"),
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="showProducts">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>
            <div className="products">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </Content>
          <AntSider>
            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            ></Menu>
          </AntSider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
