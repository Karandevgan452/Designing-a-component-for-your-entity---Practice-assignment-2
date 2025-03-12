import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage =
    "https://www.apple.com/newsroom/images/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/article/Apple-iPhone-16e-hero-250219_inline.jpg.large.jpg";
  const productName = "Iphone16-e";
  const productPrice = "$1100";

  return (
    <div className="border p-4 rounded shadow-md w-64 text-center">
      <img
      style={{width: "200px"}}
        src={productImage}
        alt='image'
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold mb-1">{productName}</h2>
      <p className="text-gray-700 mb-2">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
