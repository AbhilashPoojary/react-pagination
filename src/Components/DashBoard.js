import React, { useState } from "react";
import { contenItems } from "../MensData";
import ProductCart from "./ProductCart";
import Pagination from "./Pagination";

export default function DashBoard() {
  const [posts] = useState(contenItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <h1>Welcome to Dashboard</h1>
      <div className='row'>
        {currentPosts.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
