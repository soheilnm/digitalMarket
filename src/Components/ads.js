import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products";
import { Space, Spin, Popover } from "antd";
import { ArrowLeftOutlined, BellOutlined } from "@ant-design/icons";

function Ads() {
  const dispatch = useDispatch();
  const data = {};

  const products = useSelector((state) => state.product);
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      {isLoading ? (
        <Space>
          <Spin></Spin>
        </Space>
      ) : (
        <div>
          <div className="parent">
            <div className="children">
              <div className="children">
                <div>
                  <img
                    src="https://www.digikala.com/statics/img/png/amazing/fresh.png"
                    className="marketProduct"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://www.digikala.com/statics/img/svg/typography/fresh.svg"
                    className="marketAmazing"
                  ></img>
                </div>
                <div>
                  <div className="discount">
                    <div> تا %80 تخفیف</div>
                  </div>
                </div>
              </div>
              <div className="children">
                <div className="discountedProducts">
                  {products.fresh_incredible_products.products.map(
                    (product) => (
                      <div key={product.id} className="discountedProduct">
                        <Popover placement="bottom" content={product.title_fa}>
                          <img src={product.images.main.url}></img>
                        </Popover>
                      </div>
                    )
                  )}
                  <div>
                    <div className="flex moreProducts">
                      <a>
                        <span> بیش از 90 کالا</span>
                        <ArrowLeftOutlined />
                      </a>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="parent">
            <div className="child flex">
              {products.top_banners.map((topBanner) => (
                <div className="topBannerImageContainer" key={topBanner.id}>
                  <img src={topBanner.image} alt={topBanner.title}></img>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>دسته بندی کالاها </h1>
          </div>
          <div className="parent">
            <div className="products child">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="parent">
            <div className="products child">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Ads;
