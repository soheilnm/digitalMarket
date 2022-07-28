import React, { useEffect,useState  } from 'react'
import { useSelector } from 'react-redux';
import {Image ,Popover , Radio,Space,Spin} from 'antd'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import {HeartOutlined,ShareAltOutlined,AreaChartOutlined,BellOutlined,HddOutlined,LikeOutlined   } from '@ant-design/icons';

const options = [
  {
    label: null,
    value: 'آبی',
  },
  {
    label: null,
    value: 'خاکستری',
  },
  {
    label: null,
    value: 'مشکی',
  },
];

export default function Product() {
  const [value, setValue] = useState('آبی');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  
const isLoading = useSelector(state => state.isLoading)
console.log(isLoading);
  const [loading , setLoading] = useState(true)
  
    const { id } = useParams()
  const [info , setInfo] = useState({});
  
    useEffect(() => {
      
      fetch(`/v1/product/${id}/`)
      .then(response =>response.json())
      .then(response => setInfo(response.data))
      
      
      }, [id])
      
      const [img , setimg] = useState({});

       useEffect(() => {
          axios(`/v1/product/${id}/`)
          .then(response =>setimg(response.data.data.product.images.main.url))
          .finally(()=>setLoading(false))
          
  
         }, [id])
      
  return (
<div>
<div>
     <div className='productsLink'>
    <a>دیجی کالا</a>
    <span>/</span>
    <a>کالای دیجیتال</a>
    <span>/</span>
    <a>موبایل </a>
    <span>/</span>
    <a>گوشی موبایل</a>
  </div>
  {loading ? (  <Space size="middle">
    <Spin size="large" />
  </Space>):(
    <div className='product'>
      <div className='productsInfo'>
      <Popover placement="left" content="افزودن به علاقه مندی">
      <div>
        <a><span><HeartOutlined /></span></a></div>
  </Popover>
  <Popover placement="left" content="اشتراک گذاری">
      <div>
        <a><span><ShareAltOutlined /></span></a>
        </div>
  </Popover>
  <Popover placement="left" content="اطلاع رسانی شگفت انگیز">
      <div><a><span><BellOutlined /></span></a></div>
  </Popover>
  <Popover placement="left" content="نمودار قیمت">
      <div><a><span><AreaChartOutlined /></span></a></div>
  </Popover>
  <Popover placement="left" content="مقایسه">
      <div><a><span><HddOutlined /></span></a></div>
  </Popover>


      </div>
      {loading ? (  <Space size="middle">
    <Spin size="large" />
  </Space>):(       <div className='myPrdctimg'>
           <Image src={img} width={450}></Image> 
        
       </div>)}


       <div className='prdctMainImg'>
<div className='description'>
<div className='productsLink'>
    <a>موبایل </a>
    <span>/</span>
    <a>گوشی موبایل</a>
  </div>
  <div><h3>{info.title_fa}</h3></div> 

</div>
<div className='productDetails'>
<div>
  <div className='productInfo'>
<p>{info.title_en}</p>
<div className='consumerComments'>
<div className='productRating'>
<img src='https://www.digikala.com/statics/img/png/star-yellow.png'></img>
 
  <p>4.3</p>
  <p>(1253)</p>
</div>
<div><span> . </span></div>
<div className='productRating'>
  <p>1000 دیدگاه</p>
</div>
<div><span> . </span></div>

<div className='productRating'>
  <p>326 پرسش</p>
</div>
</div>
<div className='consumerComments'>
<div className='productRating'>
  <p><LikeOutlined /></p>

  <p>82%  از خریداران این محصول را پیشنهاد کرده اند .</p>
</div>

</div>
<div className='consumerComments'>
<h3> رنگ : {value}</h3>
</div>
<div className='consumerComments'>
<Radio.Group onChange={onChange} value={value} optionType="button"
        buttonStyle="solid">
<Radio value={'آبی'} style = {{backgroundColor:"blue",borderRadius:"20px",marginRight:"5px"}}></Radio>

        <Radio value={'سبز'} style = {{backgroundColor:"green",borderRadius:"20px",marginRight:"5px"}}></Radio>

        <Radio value={'خاکستری'} style = {{backgroundColor:"grey",borderRadius:"20px",marginRight:"5px"}}></Radio>
</Radio.Group>
</div>

 {/* <h6>
  {info.default_variant.rank}
</h6>
<h6>
  {info.default_variant.rate}
</h6>  */}
  </div>
</div>
<div>
  <div>
    <p>
    salam
    </p>
  </div>
</div>
</div>
       </div>

    </div> )}
  </div>
  
    </div>
  )
}
