import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined,AlignRightOutlined } from '@ant-design/icons';
import { Col, Row , Card , Avatar } from 'antd'
import { useEffect,useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const {Meta} = Card;

export default function Contents() {
  const [datas,setData] = useState ([]);
  

  useEffect(() => {
    
    axios("/v1/search/?q=گوشی موبایل")
    .then(response =>setData(response.data.data.products))

  }, [])

  return (
    <div>
      <div className='filters'>
      <AlignRightOutlined style={{fontSize:'20px',marginLeft:'5px',}} />
      <h4>
        مرتب سازی :
      </h4>
        {/* {datas.map(user =>(<a key={user.id}>{user.name}</a>))} */}
<a>پرفروش ترین </a>
<a>مرتبط ترین</a>
<a>جدیدترین</a>
<a>ارزان ترین</a>
<a>گران ترین</a>
<a>سریع ترین ارسال</a>
<a>پیشنهاد خریداران</a>
      </div>
      <div  >
    <Row   justify="center"    gutter={{
        xs: 4,
        sm: 8,
        md: 16,
        lg: 12,
      }}>

{datas.map(data=>(
  
  <div  key={data.id}>
   <Col span={6}>
  
  <Link to={`/product/${data.id}/`}>
  <div >
          <Card 
        
        hoverable={true}
    style={{
      width: 300,
      marginTop:'5px'

    }}
    cover={
      <img 
        alt="example"
        src={data.images.main.url}
      />
    
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    
    <Meta
      title={data.title_fa}
      description={data.title_fa}
    />


  </Card>
  </div>
  </Link>
 
      </Col>
      </div>

))}

     
    </Row>
    
    </div>    </div>
  )
}
