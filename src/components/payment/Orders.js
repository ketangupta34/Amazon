import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "../../stylesheet/payment/order.css";
import { useStateValue } from "../../StateProvider";

import OrdersItem from "../payment/OrdersItem";

function Orders() {
  const { user } = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  console.log(orders);

  return (
    <div className="placedOrders">
      <div className="ordersHeader">
        <h3>Your Orders</h3>
        <div>
          <input type="text" placeholder="Search" className="orderSearch" />
          <button className="orderSearchButton">search order</button>
        </div>
      </div>
      <p className="noOfOrders">1 order placed</p>
      <OrdersItem />
      <OrdersItem />
    </div>
  );
}

export default Orders;
