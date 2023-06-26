import "./style.scss";
import "../../index.css";
import { useState } from "react";

const Menu = ({ items, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="menu" style={style}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`menu__item ${
            activeIndex === i ? "menu__item-active" : ""
          }`}
          onClick={() => {
            setActiveIndex(i);
          }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default Menu;
