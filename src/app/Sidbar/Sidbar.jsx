import './Sidebar.css';
import Image from 'next/image';
import IconHome from '../../../public/icon/icon-home.png';
import IconFire from '../../../public/icon/icon-fire.png';

export default function Sidbar() {
  return (
    <aside>
      <div className="side">
        <div className="side-menu">
          <div className="menu">摘要</div>
          <a href="#" className="menu-single-item">
            <Image src={IconHome} alt="home"/>
            <span>首頁</span>
          </a>
          <a href="#" className="menu-single-item">
            <Image src={IconFire} alt="fire"/>
            <span>熱門</span>
          </a>
          <div className="menu">最近的</div>
          <div className="menu-collapse-item">
            <a href="#">🚲 運動健身</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu">主題</div>
          <div className="menu-collapse-item">
            <a href="#">🥗 飲食</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu-collapse-item">
            <a href="#">🚲 運動健身</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu-collapse-item">
            <a href="#">🐈 寵物</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu-collapse-item">
            <a href="#">💼 求職</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu-collapse-item">
            <a href="#">📱 自媒體</a>
            <i className="arrow down"></i>
          </div>
          <div className="menu-collapse-item">
            <a href="#">💪 健康知識</a>
            <i className="arrow down"></i>
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
