import React from "react";

const Noteitem = (props) => {
  return (
    <div className="card col-md-3 mx-1">
      <div className="card-body ">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{props.title}</h5>
          <i class="fa-solid fa-trash-can mx-2"></i>
          <i class="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Noteitem;
