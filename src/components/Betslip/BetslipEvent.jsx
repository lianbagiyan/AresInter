import "./style.scss";
import closeIcon from "../../images/close-icon.svg";
import coefArrow from "../../images/coef-arrow.svg";

const BetslipEvent = ({ elem, handleCloseEvent }) => (
  <>
    <div className="betslip-event">
      <div className="betslip-event__teams">
        <span className="betslip-event__teams__text">
          {elem.HomeTeamName} - {elem.AwayTeamName}
        </span>
        <img
          src={closeIcon}
          alt="close icon"
          onClick={() => handleCloseEvent(elem.Id)}
        />
      </div>
      <div className="betslip-event__goals">
        <div className="betslip-event__goals__info">
          <span className="betslip-event__goals__info__text">
            {elem?.Odds?.[0]?.Market}
          </span>
          <span className="betslip-event__goals__info__coef">Under (2.5)</span>
        </div>
        <div className="betslip-event__goals__win-coef">
          <img src={coefArrow} alt="coef-arrow" />
          {elem?.Odds?.[0]?.Value}
        </div>
      </div>
    </div>
  </>
);

export default BetslipEvent;
