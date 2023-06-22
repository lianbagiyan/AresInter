import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import BetslipEvent from "./BetslipEvent";
import {
  addBetslipTicket,
  removeBetslipTicket,
} from "../../redux/actions/betslip-tickets";
import { useCallback, useEffect, memo } from "react";
import { getBetslipData } from "../../rest-api";

const BetslipBody = () => {
  const dispatch = useDispatch();
  const oddId = useSelector((state) => state.match.matchId);
  const betslipTickets = useSelector((state) => state.betslip.betslipTickets);
  const betslipData = getBetslipData(oddId);
  const { data, isError } = useQuery(["betslipData", oddId], betslipData);
  const handleCloseEvent = useCallback(
    (id) => {
      dispatch(removeBetslipTicket(id));
    },
    [dispatch]
  );

  useEffect(() => {
    !isError && data && dispatch(addBetslipTicket(data?.Matches));
  }, [data, isError]);

  return (
    <>
      {betslipTickets?.length
        ? betslipTickets.map((elem, i) => (
            <BetslipEvent
              elem={elem}
              handleCloseEvent={handleCloseEvent}
              key={i}
            />
          ))
        : null}
      {betslipTickets?.length ? (
        <footer className="betslip__footer">
          <button className="betslip__footer__btn">PLACE 500 EUR</button>
        </footer>
      ) : null}
    </>
  );
};

export default memo(BetslipBody);
