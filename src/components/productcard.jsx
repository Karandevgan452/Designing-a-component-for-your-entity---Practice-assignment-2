import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage =
    "https://www.apple.com/newsroom/images/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/article/Apple-iPhone-16e-hero-250219_inline.jpg.large.jpg";
  const productName = "Iphone16-e";
  const productPrice = "$1100";

  return (
    <div>
      <img
      style={{width: "200px"}}
        src={productImage}
        alt='image'
      />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
