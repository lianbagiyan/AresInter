import "./style.scss";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { getSportData } from "../../rest-api/index";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { setTournamentId } from "../../redux/actions/tournament-id";
import { countriesInfo } from "../../constants/countries";
import arrowClose from "../../images/arrow-close.svg";
import countryIcon from "../../images/countries-logo.svg";
import arrowOpen from "../../images/arrow-open.svg";

const Countries = () => {
  const dispatch = useDispatch();
  const sportData = getSportData();
  const navigate = useNavigate();
  const { data } = useQuery("sportData", sportData);
  const sportId = useSelector((state) => state.sport.sportId);
  const [openedCompetitions, setOpenedCompetitions] = useState([0]);

  const handleCountryClick = useCallback(
    (index) => {
      if (openedCompetitions.includes(index)) {
        setOpenedCompetitions(
          openedCompetitions.filter((itemIndex) => itemIndex !== index)
        );
      } else {
        setOpenedCompetitions([...openedCompetitions, index]);
      }
    },
    [openedCompetitions]
  );
  const handleCompetitionClick = useCallback(
    (id, i) => {
      dispatch(setTournamentId(id));
    },
    [dispatch]
  );

  const countries = useMemo(() => {
    if (!data?.["S"]) {
      return [];
    }
    return data["S"].filter((item) => item.Id === sportId)[0]?.Ct || [];
  }, [data, sportId]);

  const countryFlags = {};

  countriesInfo.forEach((el) => {
    countryFlags[el.slug] = el.alpha2.toLowerCase();
  });

  useEffect(() => {
    if (countries.length) {
      dispatch(setTournamentId(countries[0].Trn[0].Id));
      navigate(`/${sportId}/${countries[0].Id}/${countries[0].Trn[0].Id}`);
    }
  }, [countries, sportId]);

  return (
    <div className="countries">
      <div className="countries__tabs">
        <span>All</span>
        <span>Today</span>
        <span>3 Hour</span>
        <span>3 Day</span>
      </div>
      <div className="countries__wrapper">
        <div className="countries__wrapper__header">
          <img src={countryIcon} className="countries__wrapper__header__img" />
          <span className="countries__wrapper__header__title">Countries</span>
        </div>
        <div className="countries__wrapper__list">
          <div className="countries__wrapper__list__header">
            {countries.map((elem, i) => (
              <Link to={`/${sportId}/${elem.Id}/`} key={i}>
                <div key={i}>
                  <div
                    className="countries__wrapper__list__header__item"
                    onClick={() => handleCountryClick(i)}
                  >
                    <div className="countries__wrapper__list__header__item__info">
                      <img
                        src={`https://flagcdn.com/${
                          countryFlags[elem.Slug] || "pl"
                        }.svg`}
                        width="20"
                        alt="country flag"
                      />
                      <span className="countries__wrapper__list__header__item__info__name">
                        {elem.N}
                      </span>
                    </div>
                    <img
                      src={
                        openedCompetitions.includes(i) ? arrowOpen : arrowClose
                      }
                      alt="arrow"
                    />
                  </div>
                  {openedCompetitions.includes(i) &&
                    elem.Trn.map((trn, i) => (
                      <Link to={`/${sportId}/${elem.Id}/${trn.Id}`} key={i}>
                        <div
                          className="countries__wrapper__list__competitions"
                          onClick={() => handleCompetitionClick(trn.Id, i)}
                          key={i}
                        >
                          <div className="countries__wrapper__list__competitions__item">
                            <div className="countries__wrapper__list__competitions__item__info">
                              {trn.N}
                            </div>
                            <div className="countries__wrapper__list__competitions__item__count">
                              {trn.C}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
