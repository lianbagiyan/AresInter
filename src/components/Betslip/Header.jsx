import "./style.scss";
import trashIcon from "../../images/trash.svg";
import { removeAllBetslip } from "../../redux/actions/betslip-tickets";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const BetslipHeader = () => {
  const dispatch = useDispatch();

  const handleRemoveAll = useCallback(() => {
    dispatch(removeAllBetslip());
  }, [dispatch]);

  return (
    <div className="betslip__header">
      <span className="betslip__header__title">Ticket</span>
      <div className="betslip__header__img">
        <img src={trashIcon} alt="trash-icon" onClick={handleRemoveAll} />
      </div>
    </div>
  );
};

export default BetslipHeader;
