import { Carousel } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Space, Spin} from 'antd'
import { setLoading } from "../redux/actions/products";
const contentStyle = {
  width: "100%",
  color: "#fffff",
  height: "400px",
  textAlign: "center",
  background: "#44fe9f",
};

export default function Carouse() {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios("/v1/")
      .then((response) => setimages(response.data.data.header_banners))
      .finally(() => setIsLoading(false));
  }, []);

  return (

    <div>
          {isLoading ? (<Space>
            <Spin></Spin>
          </Space>
      
    ):(
      <div>
      <Carousel autoplay>
        {images.map((img) => (
          <div key={img.id}>
            <img
              style={contentStyle}
              src={img.image}
              alt="images not loading"
            ></img>
          </div>
        ))}
      </Carousel>
    </div>
    )}
    
    </div>
  );
}
