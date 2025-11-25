import React from "react";

const TodoItem = ({ itemName , date }) => { 
  return (
    <div className="container">
 
      <div className="row my-row"> 
        <div className="col-6">
            {itemName}
        </div>

        <div className="col-4">
            {date}
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>

      </div>


    </div>
  );
};

export default TodoItem;
