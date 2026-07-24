import React, { useEffect, useState } from "react";
import "../CSS/AdminReviews.css";
import axios from "axios";
import Dashsidebar from "./Dashsidebar";
import Swal from "sweetalert2";
import { FaTrash, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminReviews() {

    let [allreview, setreview] = useState([]);
    

    function getreview() {

        axios.get("https://backend-rn1o.vercel.app/allreviews").then((res) => {

            if (res.data.status) {

                setreview(res.data.myallreviews);

            }

        });

    }

    useEffect(() => {

        getreview();

    }, []);

    let deletereview = (id) => {

        Swal.fire({

            title: "Delete Review?",

            text: "You won't be able to revert this!",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                axios.post("https://backend-rn1o.vercel.app/deletereview", {

                    id: id

                }).then((res) => {

                    if (res.data.status) {

                        Swal.fire({

                            icon: "success",

                            text: "Review Deleted"

                        });

                        getreview();

                    }

                });

            }

        });

    };

    return (

        <div className="dashboard-layout">

            <Dashsidebar />

            <div className="dashboard-content">

               <div className="admin-review-page">

    <div className="admin-review-header">

        <div>

            <h1>Reviews</h1>

            <div className="admin-review-breadcrumb">

                <Link to={"/dash"}>
                    <span>Dashboard</span>
                </Link>

                / Reviews

            </div>

        </div>

    </div>

    <div className="admin-review-card">

        <div className="admin-review-table-responsive">

            <table className="admin-review-table">

                <thead>

                    <tr>

                        <th>Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {allreview.map((item) => (

                        <tr key={item._id}>

                           <td>{item.productName}</td>

                            <td>{item.name}</td>

                            <td>{item.email}</td>

                            <td>{item.review}</td>

                            <td
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "3px",
                                    marginTop: "24px"
                                }}
                            >

                                {[...Array(item.rating)].map((star, index) => (

                                    <FaStar
                                        key={index}
                                        className="admin-review-star"
                                    />

                                ))}

                            </td>

                            <td>

                                <button
                                    className="admin-review-delete-btn"
                                    onClick={() => deletereview(item._id)}
                                >

                                    <FaTrash />

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    </div>

</div>

            </div>

        </div>

    );

}