import "./style.scss";
import dayjs from "dayjs";
import tnIcon from "../../images/tn-icon.svg";
import { useDispatch } from "react-redux";
import { setMatchId } from "../../redux/actions/match-id";
import { useCallback } from "react";

const Market = ({ i, time, team1, team2, markets }) => {
  const dispatch = useDispatch();
  const formatDate = (dateString, format) => {
    const date = dayjs(dateString);
    return date.format(format);
  };

  const matchResult = Object.values(markets)[0];

  const handleOddClick = useCallback(
    (id, i) => {
      dispatch(setMatchId(id));
    },
    [dispatch]
  );

  return (
    <div className={`tnMarkets ${i % 2 === 0 ? "tnMarkets--even" : ""}`}>
      <div className="tnMarkets__block">
        <div className="tnMarkets__date">
          <span className="tnMarkets__date__day">
            {formatDate(time, "DD MMMM")}
          </span>
          <span className="tnMarkets__date__time">
            {formatDate(time, "HH:mm")}
          </span>
        </div>
        <div className="tnMarkets__teams">
          <span className="tnMarkets__teams__name">{team1}</span>
          <span className="tnMarkets__teams__name">{team2}</span>
          <div className="tnMarkets__teams__info">
            <img
              src={tnIcon}
              alt={"Tn-Icon"}
              className="tnMarkets__teams__info__img"
            />
            <span className="tnMarkets__teams__info__text">Some Text</span>
          </div>
        </div>
      </div>
      <div className="tnMarkets__coefficient">
        <div className="tnMarkets__coefficient__odds">
          {matchResult.map((elem, i) => (
            <span
              key={i}
              className="tnMarkets__coefficient__odds__block"
              onClick={() => handleOddClick(elem.Id)}
            >
              {elem.OddsValue}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
