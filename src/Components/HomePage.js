import React from "react";
import Carouse from "./carousel";
import Products from "./products";
import Cards from "./cards";
import Ads from "./ads";

export default function HomePage() {
  return (
    <div>
      <Carouse />
      <Products />
      <Cards />
      <Ads />
    </div>
  );
}
