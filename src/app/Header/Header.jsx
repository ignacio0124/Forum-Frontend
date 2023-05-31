import './Header.css';
import Image from 'next/image';
import IconSearch from '../../../public/icon/icon-search.png';
import IconLanguage from '../../../public/icon/icon-language.png';
import IconAvatar from '../../../public/icon/icon-avatar.png';

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">WellW</a>
      <a href="#" className="logo-mobile">W</a> {/*手機版*/}
      <div className="search">
        <Image src={IconSearch} alt="search"/>
        <input type="text" placeholder="搜尋 WellW"/>
      </div>
      <div className="header-right">
        <div>
          <Image src={IconLanguage} alt="language"></Image>
          <p>▼</p>
        </div>
        <button>下載APP</button>
        <div>
          <Image src={IconAvatar} alt="avatar"></Image>
          <i className="arrow down"></i>
        </div>
      </div>
    </header>
  )
}
