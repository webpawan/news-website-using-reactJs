import React from "react";

const Pagination = () => {
  return (
    <div className="  d-flex justify-content-center my-2">
      <ul class="pagination  ">
        <li class="page-item">
          <a class="page-link" href="/">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
