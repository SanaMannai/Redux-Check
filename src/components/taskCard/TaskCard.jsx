import React from "react";

const TAskCard = ({ data }) => {
  return (
    <div className="task--card">
      {data.status == "0" && <div className={`status--icon done`}></div>}
      {data.status == "1" && <div className={`status--icon not`}></div>}
      <p>{data.title}</p>
    </div>
  );
};

export default TAskCard;
