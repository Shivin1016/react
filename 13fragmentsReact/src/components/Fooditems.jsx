import React from "react";
import styles from "./Fooditems.module.css";
const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className={`${styles["s-item"]} list-group-item`} key={item}>
          <span className={`${styles["s-span"]}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default Fooditems;
