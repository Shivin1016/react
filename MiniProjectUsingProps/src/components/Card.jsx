import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.logo}
          alt={props.company}
        />
        <button>
          Save <Bookmark size={15} />{" "}
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.post}</span>
        </h3>
        <h2>{props.role}</h2>
        <div className="period">
          <p>{props.tag1}</p>
          <p>{props.tag2}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
