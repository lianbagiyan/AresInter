import "./style.scss";
import "../../index.css";

const Button = ({ text, background, width, icon }) => {
  const buttonStyles = {
    width: width,
    background: background,
  };

  return (
    <div style={buttonStyles} className="btn">
      {icon ? <i className={icon}></i> : text}
    </div>
  );
};

export default Button;
