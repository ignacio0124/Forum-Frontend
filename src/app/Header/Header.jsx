import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">WellW</a>
      <a href="#" className="logo-mobile">W</a> {/*手機版*/}
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        <input type="text" placeholder="搜尋 WellW"/>
      </div>
      <div className="header-right">
        <div>
          <FontAwesomeIcon icon={faEarthAmericas} size="lg" />
          <p>▼</p>
        </div>
        <button>下載APP</button>
        <div>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <i className="arrow down"></i>
        </div>
      </div>
    </header>
  )
}
