import React from "react";
import Articles from "./components/Articles";
import Pagination from "./components/Pagination";
import SearchCom from "./components/SearchCom";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-auto ">
          <div className="mx-auto  ">
            <SearchCom />
            <Pagination />
            <Articles />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
