import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getTournamentData } from "../../rest-api/index";
import Market from "../Market";
import { useMemo } from "react";
import "./style.scss";

const Tournament = () => {
  const tournamentId = useSelector((state) => state.tournament.tournamentId);
  const tournamentData = getTournamentData(tournamentId);
  const { data } = useQuery(["tournamentData", tournamentId], tournamentData);
  const matches = useMemo(() => {
    return data?.Matches || [];
  }, [data]);
  return (
    <div className="tournament-wrapper">
      <div className="tournament-wrapper__header">
        <div className="tournament-wrapper__header__left">
          <div className="tournament-wrapper__header__left__game title">
            Footbal
          </div>
          <div className="tournament-wrapper__header__left__league title">
            All Leagues
          </div>
        </div>
        <div className="tournament-wrapper__header__right">
          <span className="tournament-wrapper__header__right__text title">
            Match Result
          </span>
          <span className="tournament-wrapper__header__right__text title">
            Total Goals
          </span>
          <span className="tournament-wrapper__header__right__text title">
            Goals Handicap 3 Way
          </span>
        </div>
      </div>
      {data && (
        <div className="tournament-wrapper__odds">
          <div className="tournament-wrapper__odds__block">
            <span className="tournament-wrapper__odds__block__item">1</span>
            <span className="tournament-wrapper__odds__block__item">X</span>
            <span className="tournament-wrapper__odds__block__item">2</span>
          </div>
        </div>
      )}
      <div>
        {matches.length ? (
          matches.map((elem, i) => (
            <Market
              i={i}
              time={elem.Md}
              team1={elem.Hn}
              team2={elem.An}
              elem={elem}
              key={i}
              markets={elem.Markets}
            />
          ))
        ) : (
          <span className="loading">Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Tournament;
