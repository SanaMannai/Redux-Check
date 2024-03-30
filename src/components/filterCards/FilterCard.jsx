import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";

const FilterCard = ({ setFilterTask, handleFilter }) => {
  return (
    <div className="search">
      <input type="search" name="" id="" placeholder="Search Your Task..." onChange={(e) => setFilterTask(e.target.value)} />
      <div className="searchIcon" onClick={handleFilter}>
        <IoMdSearch />
      </div>
    </div>
  );
};

export default FilterCard;
