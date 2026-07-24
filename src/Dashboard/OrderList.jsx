import React, { useEffect, useState } from "react";
import "../CSS/AdminOrderList.css";
import Dashsidebar from "./Dashsidebar";
import axios from "axios";
import { FaEllipsisV } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AdminOrderList() {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();


const location = useLocation();
   useEffect(()=>{

    getOrders();

},[location]);

    function getOrders() {

        axios.get("https://backend-rn1o.vercel.app/orders").then((res) => {

            if (res.data.status) {

                setOrders(res.data.myorders);

            }

        });

    }

    return (
        <>
            <div className="dashboard-layout">
                <Dashsidebar />

                <div className="dashboard-content">


                    <h1>Order List</h1>

                    <div className="order-top">

                        <input
                            type="text"
                            placeholder="Search"
                            className="order-search"
                        />

                        <select className="order-filter">

                            <option>All Status</option>

                            <option>Processing</option>

                            <option>Completed</option>

                            <option>Cancel</option>

                        </select>

                    </div>

                    <div className="order-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>Image</th>

                                    <th>Order Name</th>
                                    <th>Customer</th>

                                    <th>Date</th>

                                    <th>Items</th>

                                    <th>Status</th>

                                    <th>Amount</th>

                                    <th></th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    orders.map((item) => (

                                        <tr key={item._id}>

                                            <td>

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="order-img"
                                                />

                                            </td>

                                            <td>

                                                <div>

                                                    <h4>{item.orderNo}</h4>

                                                    <p>{item.Title}</p>

                                                </div>

                                            </td>
                                            <td>{item.customerName}</td>

                                            <td>{item.date}</td>

                                            <td>{item.quantity}</td>

                                            <td>

                                                <span
                                                    className={
                                                        item.status === "Completed"
                                                            ? "completed"

                                                            : item.status === "Cancel"
                                                                ? "cancel"

                                                                : "processing"
                                                    }
                                                >

                                                    {item.status}

                                                </span>

                                            </td>

                                            <td>

                                                ₹{item.SalePrice * item.quantity}

                                            </td>

                                            <td>
                                                <FaEye
                                                    className="eye-icon"
                                                    onClick={() =>
                                                        navigate("/OrderSingle", {
                                                            state: {
                                                                orderNo: item.orderNo
                                                            }
                                                        })
                                                    }
                                                />


                                            </td>



                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>



                </div>
            </div>

        </>

    );

}