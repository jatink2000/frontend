import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiSearch,
    FiMoreVertical,
} from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";


import "../CSS/Customer.css";
import axios from "axios";
import Dashsidebar from "./Dashsidebar";
import Swal from "sweetalert2";

const Customer = () => {
    let [myusers, setusers] = useState([])

    function getusers() {
        axios.get("https://backend-rn1o.vercel.app/allusers").then((res) => {
            if (res.data.status) {
                setusers(res.data.myallusers)
            }
            else {
                console.log("not  users")
            }
        })
    }

    useEffect(() => {
        getusers()
    }, [])


    // delete customer --------

     let dltcustomer = (dltcus) => {
    axios.post("https://backend-rn1o.vercel.app/deletecustomer", { dltcus }).then((res) => {
      if (res.data.status) {

        Swal.fire({
          icon: "success",
          text: "Customer Deleted"
        }).then(() => {
          window.location.reload()
        })

      }
    })
  }





    return (
        <>
            <div className="dashboard-layout">

                <Dashsidebar />

                <div className="dashboard-content">
                    <div className="customer-page">

                        {/* ================= HEADER ================= */}

                        <div className="customer-header">

                            <div className="customer-header-left">

                                <h1>Customers</h1>

                                <div className="customer-breadcrumb">

                                 <Link to={"/dash"}> <span>Dashboard</span></Link>

                                    <span>/</span>

                                    <span>Customers</span>

                                </div>

                            </div>


                        </div>

                        {/* ================= CARD ================= */}

                        <div className="customer-card">

                            {/* SEARCH */}

                            <div className="customer-top">

                                <div className="customer-search">

                                    <FiSearch className="search-icon" />

                                    <input
                                        type="text"
                                        placeholder="Search Customers"
                                    />

                                </div>

                            </div>

                            {/* TABLE */}

                            <div className="table-wrapper">

                                <table className="customer-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                <input type="checkbox" />
                                            </th>

                                            <th>Name</th>

                                            <th>Email</th>

                                         

                                            <th>Phone</th>

                                            <th>Action</th>

                                        </tr>

                                    </thead>

                                    <tbody>
                                        {myusers.map((item) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>{item.firstname}</td>
                                                        <td>{item.email}</td>
                                                        
                                                        <td>{item.phone }</td>

                                                        <td>

                                                            {/* <button className="action-btn edit-action">
                                                                <FaEdit />
                                                            </button> */}

                                                            <button className="action-btn delete-action"  onClick={()=>dltcustomer(item)} >
                                                                <FaTrash />
                                                            </button>

                                                        </td>

                                                    </tr>

                                                </>
                                            )
                                        })}





                                    </tbody>

                                </table>

                            </div>

                            {/* ================= FOOTER ================= */}

                            <div className="customer-footer">

                                <div className="entries">

                                    Showing 1 to 10 of 10 entries

                                </div>

                                <div className="pagination">

                                    <button>Previous</button>

                                    <button className="active">1</button>

                                    <button>2</button>

                                    <button>Next</button>

                                </div>

                            </div>

                        </div>

                    </div></div></div>
        </>
    );
};

export default Customer;