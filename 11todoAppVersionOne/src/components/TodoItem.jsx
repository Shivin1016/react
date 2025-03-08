import React from "react";

const TodoItem = (props) => {
  return (
    <div className="container">
      <div class="row my-row">
        <div class="col-6">
            {props.itemName}
        </div>
        <div class="col-4">
            {props.date}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
