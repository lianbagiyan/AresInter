import './style.scss'
import Countries from '../Countries/index'
import Tournament from '../Tournament/index'
import SportMenu from '../SportMenu/index'

const Sportsbook = () => (
  <div className="sport-wrapper">
    <div className="sport-wrapper__content">
      <div className="sport-wrapper__content__countries">
        <Countries />
      </div>
      <div className="sport-wrapper__content__tns">
        <Tournament />
      </div>
    </div>
    <div className="sport-wrapper__footer">
      <SportMenu />
    </div>
  </div>
)

export default Sportsbook
