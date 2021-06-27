import React, { useEffect, useState } from "react";
import "../App.css";
import { db } from "../config";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    db.collection("cart")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (querySnapshot) {
        setCart(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            img: doc.data().img,
            brand: doc.data().brand,
            name: doc.data().name,
            price: doc.data().price,
            size: doc.data().size,
          }))
        );
      });
  };
  console.log(cart);

  return (
    <div>
      <h2>Cart</h2>
      <div className="product-list">
        {cart.map((data) => {
          return (
            <div className="product" key={data.id}>
              <img className="product-img" src={data.img} alt={data.name} />
              <div className="product-info">
                <p className="brand">{data.brand}</p>
                <p className="name">{data.name}</p>
                <p className="price">₹{data.price}</p>
                <p className="size">Size : {data.size}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
