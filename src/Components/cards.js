import { Card, Carousel } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { unstable_batchedUpdates } from "react-dom";
const { Meta } = Card;
const contentStyle = {
  color: "#fffff",
  width: "240px",
  height: "240px",
  textAlign: "center",
  background: "#44fe9f",
};

function Cards() {
  const [maindata, setData] = useState([]);
  useEffect(() => {
    axios("/v1/").then((response) =>
      setData(response.data.data.best_selling_products.products)
    );
  }, []);
  return (
    <div className="parent">
      <div className="child">
        <Carousel
          slidesToShow={5}
          autoplay
          style={{ backgroundColor: "#ef394e" }}
        >
          {maindata.map((data) => (
            <div className="Cards" key={data.id}>
              <Card
                hoverable
                style={{ width: 240, height: 400, overflow: "hidden" }}
                cover={<img alt="example" src={data.images.main.url} />}
              >
                <Meta
                  title={data.title_fa}
                  description={data.data_layer.brand}
                />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Cards;
