import React, { useEffect, useState } from "react";

import "../CSS/Category.css";

import {
  FiSearch,
  FiMoreVertical,
  FiChevronDown,
} from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashsidebar from "./Dashsidebar";
import Swal from "sweetalert2";

const CategoryPage = () => {

  let [mycategory, setcategory] = useState([])
  const go = useNavigate();

  function getallcategory() {
    axios.get("https://backend-rn1o.vercel.app/AllCategory").then((res) => {
      if (res.data.status) {
        setcategory(res.data.myallcategory)
      }
      else {
        document.write("not a single category added")
      }
    })
  }
  // product length --------------------


let [allproduct, setAllproduct] = useState([]);

function getproduct() {
  axios.get("https://backend-rn1o.vercel.app/allproduct").then((res) => {
    if (res.data.status) {
      setAllproduct(res.data.myallproduct);
    }
  });
}







  useEffect(() => {
    getallcategory()
    getproduct()
  }, [])
// delete category------------
  let dltcategory = (dltcat) => {
    axios.post("https://backend-rn1o.vercel.app/deletecategory", { dltcat }).then((res) => {
      if (res.data.status) {

        Swal.fire({
          icon: "success",
          text: "Category Deleted"
        }).then(() => {
          window.location.reload()
        })

      }
    })
  }


  return (
    <div className="dashboard-layout">

      <Dashsidebar />

      <div className="dashboard-content">



        <div className="category-page">

          {/* ================= HEADER ================= */}

          <div className="category-header">

            <div className="category-title">

              <h1>Categories</h1>

              <div className="category-breadcrumb">

               <Link to={"/dash"}> <span>Dashboard</span></Link>

                <span>/</span>

                <span>Categories</span>

              </div>

            </div>

            <Link
              to={"/CategoryForm"}
              className="add-category-btn"
            >
              Add New Category
            </Link>

          </div>

          {/* ================= TABLE CARD ================= */}

          <div className="category-card">

            {/* TOP BAR */}

            <div className="category-topbar">

              <div className="search-box">

                <FiSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search Category"
                />

              </div>

              <div className="filter-box">

                <select>

                  <option>Status</option>

                  <option>Published</option>

                  <option>Unpublished</option>

                </select>

                <FiChevronDown className="select-icon" />

              </div>

            </div>

            {/* TABLE */}

            <div className="table-responsive">

              <table className="category-table">

                <thead>

                  <tr>

                    <th>
                      <input type="checkbox" />
                    </th>

                    <th>Icon</th>

                    <th>Name</th>

                    <th>Products</th>

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {mycategory.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>  <input type="checkbox" /></td>
                          <td><img src={item.image} /></td>
                          <td>{item.categoryName}</td>
                          <td>{  allproduct.filter((product) =>
      product.Category === item.categoryName
    ).length }</td>
                          <td>{item.status}</td>

                          <td>

                            <button className="action-btn edit-action"
                              onClick={() =>
                                go("/EditCategory", {
                                  state: item,
                                })
                              }

                            >
                              <FaEdit />
                            </button>

                            <button className="action-btn delete-action" onClick={() => dltcategory(item)}>
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

            <div className="table-footer">

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

        </div>
      </div></div>
  );
};

export default CategoryPage;