import "./style.scss";
import "../../index.css";

const Button = ({ text, background, width, icon, onClick, disabled }) => {
  const buttonStyles = {
    width: width,
    background: background,
  };

  return (
    <button
      style={buttonStyles}
      className="btn"
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <i className={icon}></i> : text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
