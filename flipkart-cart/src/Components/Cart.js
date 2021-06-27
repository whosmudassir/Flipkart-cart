import React, { useEffect, useState } from "react";
import "../App.css";
import { db } from "../config";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);

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
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-list">
        {cart.map((data) => {
          return (
            <div className="cart" key={data.id}>
              <hr />
              <div className="cart-info">
                <img className="cart-img" src={data.img} alt={data.name} />
                <div className="cart-text">
                  {" "}
                  <p className="brand">{data.brand}</p>
                  <p className="cart-name">{data.name}</p>
                  <p className="price">₹{data.price}</p>
                  <p className="size">Size : {data.size}</p>
                  <button
                    onClick={() => {
                      db.collection("cart").doc(data.id).delete();
                    }}
                  >
                    Remove
                  </button>
                  <button>-</button>x<button>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* total */}

      <div>
        <h2>Total</h2>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Cart;
