import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faPersonWalking, faCoins, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Sidebar() {
  return (
    <aside>
      <div className="side">
        <div className="side-menu">
          <div className="menu">摘要</div>
          <a href="#" className="menu-single-item">
            <FontAwesomeIcon icon={faHouse} size="lg" />
            <span>首頁</span>
          </a>
          <a href="#" className="menu-single-item">
            <FontAwesomeIcon icon={faFire} size="lg" />
            <span>熱門</span>
          </a>
          <div className="menu">收藏的</div>
          <div className="menu-collapse-item">
            <a href="#"></a>
          </div>
          <div className="menu">討論區</div>
          <div className="menu-collapse-item">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <a href="#">體育</a>
            <FontAwesomeIcon icon={faStarRegular} size="lg" />
          </div>
          <div className="menu-collapse-item">
            <FontAwesomeIcon icon={faCoins} size="lg" />
            <a href="#">區塊鏈</a>
            <FontAwesomeIcon icon={faStarRegular} size="lg" />
          </div>
        </div>
        <hr />
        <div className="side-footer">
          <p>創建帳戶關注你喜歡的社群並與大家開啟討論。</p>
          <button>加入WellW</button>
        </div>
      </div>
    </aside>
  )
}
