'use client'

import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faPersonWalking, faCoins, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useState } from "react";

export default function Sidebar() {
  const menusArray = [
    {
      name: "體育",
      icon: faPersonWalking,
      star: faStarRegular,
      isFavorite: false
    },
    {
      name: "區塊鏈",
      icon: faCoins,
      star: faStarRegular,
      isFavorite: false
    }
  ];
  const [menus, setCurrentStarIcon] = useState(menusArray);
  const favoriteClick = async (index: number) => {
    const updateMenus = [...menus];
    updateMenus[index].star = updateMenus[index].isFavorite ? faStarRegular : faStarSolid;
    updateMenus[index].isFavorite = !updateMenus[index].isFavorite;
    setCurrentStarIcon(updateMenus);
  }

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
          <div className="menu">喜愛的</div>
            {menus.map((menu, index) => {
              if (menu.isFavorite) {
                return (<div key={index} className="menu-collapse-item">
                  <FontAwesomeIcon icon={menu.icon} size="lg"/>
                  <a href="#">{menu.name}</a>
                  <FontAwesomeIcon icon={menu.star} size="lg" onClick={() => favoriteClick(index)}/>
                </div>);
              }
            })}
          <div className="menu">討論區</div>
            {menus.map((menu, index) => (
              <div key={index} className="menu-collapse-item">
                <FontAwesomeIcon icon={menu.icon} size="lg" />
                <a href="#">{menu.name}</a>
                <FontAwesomeIcon icon={menu.star} size="lg" onClick={() => favoriteClick(index)} />
              </div>
            ))}
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
