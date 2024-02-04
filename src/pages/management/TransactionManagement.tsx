import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { OrderItemType, OrderType } from "../../types";

import shoePng from "../../assets/puma-shoes.png";
import { Link } from "react-router-dom";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: shoePng,
    _id: "asdasd",
    quantity: 4,
    price: 2000
  },
];

const TransactionManagement = () => {

  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "#77 Black Street",
    city: "Neward",
    state: "Nevada",
    country: "India",
    pinCode: 110085,
    status: "Processing",
    subTotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    totalAmount: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "wqedsd"
  });

  const { name, address, city, country, state, pinCode, subTotal, shippingCharges, tax, discount, totalAmount, status } = order;

  const updateStatusHandler = () => {
    setOrder(prev => ({
      ...prev, status: prev.status === "Processing" ? "Shipped" : "Delivered"
    }));
  };

  return <div className="admin-container">
    <Sidebar />
    <main className="product-management">
      <section style={{
        padding:"2rem"
      }}>
        <h2>Order Items</h2>
        {
          order.orderItems.map((orders) => (
            <ProductCard {...orders} />
          ))
        }
      </section>

      <article className="shipping-info-card">
        <h1>Order Info</h1>
        <h5>User Info</h5>
        <p>Name: {name}</p>
        <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}.`}</p>
        <h5>Amount Info</h5>
        <p>Sub Total: ${subTotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>Discount: ${discount}</p>
        <p>Total Amount: ${totalAmount}</p>
        <h5>Status Info</h5>
        <p>Status: {" "}
          <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>{status}</span>
        </p>

        <button onClick={updateStatusHandler}>Process Status</button>
      </article>
    </main>
  </div >
};

const ProductCard = ({ name, photo, price, _id, quantity }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X {quantity} = ${price * quantity}</span>
  </div>
);

export default TransactionManagement;