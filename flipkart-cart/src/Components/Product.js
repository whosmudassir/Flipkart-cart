import React, { useState, useEffect } from "react";
import { db } from "../config";
import firebase from "firebase";

const Product = ({ items, setCartNum, cartNum }) => {
  const handleCart = (id, img, brand, name, price, size) => {
    db.collection("cart").add({
      id: id,
      img: img,
      brand: brand,
      name: name,
      price: price,
      size: size,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div>
      <div className="product-list">
        {items.map((data) => {
          return (
            <div className="product" key={data.id}>
              <img className="product-img" src={data.img} alt={data.name} />
              <div className="product-info">
                <p className="brand">{data.brand}</p>
                <p className="name">{data.name}</p>
                <p className="price">₹{data.price}</p>
                <p className="size">Size : {data.size}</p>
                <button
                  onClick={() => {
                    handleCart(
                      data.id,
                      data.img,
                      data.brand,
                      data.name,
                      data.price,
                      data.size
                    );
                  }}
                  className="add-cart-btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
