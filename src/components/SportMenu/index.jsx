import './style.scss'
import { useQuery } from 'react-query'
import { getSportData } from '../../rest-api/index'
import { sportIcons } from '../../constants/sportIcons'
import { useCallback, useMemo, useState } from 'react'
import noImage from '../../images/sport-icons/football.svg'

import { setSportId } from '../../redux/actions/sport-id'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const SportMenu = () => {
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0)
  const sportData = getSportData()
  const { data } = useQuery('sportData', sportData)
  const getImgSrc = (imgName) => require(`../../images/sport-icons/${imgName}`)

  const updateSportId = useCallback(
    (newSportId) => {
      dispatch(setSportId(newSportId))
    },
    [dispatch]
  )

  const handleClick = useCallback(
    (index, id) => {
      setActiveIndex(index)
      updateSportId(id)
    },
    [updateSportId]
  )

  const sports = useMemo(() => {
    if (!data?.['S']) {
      return []
    }
    return data?.['S'] || []
  }, [data])

  return (
    <div className="sport-menu">
      {sports.map((elem, i) => (
        <Link to={`/${elem.Id}`} key={i}>
          <div
            className={`sport-menu__item ${
              activeIndex === i ? 'sport-menu__item--active' : ''
            }`}
            key={i}
            onClick={() => {
              handleClick(i, elem.Id)
            }}
          >
            {sportIcons[elem.Slug] ? (
              <img
                className="sport-menu__item__img"
                src={getImgSrc(sportIcons[elem.Slug])}
                alt="sport img"
              />
            ) : (
              <img
                className="sport-menu__item__img"
                src={noImage}
                alt="sport img"
              />
            )}
            <span className="sport-menu__item__count">{elem.C}</span>
          </div>{' '}
        </Link>
      ))}
    </div>
  )
}

export default SportMenu
