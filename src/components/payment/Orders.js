import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "../../stylesheet/payment/order.css";
import { useStateValue } from "../../StateProvider";
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
      <h1>order placed</h1>
      <p>your order has been placed.</p>
    </div>
  );
}

export default Orders;
