'use client'

import './Sidebar.css';
import { IconMapping } from "@/app/Library/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useEffect, useState } from "react";
import { getFamilies, setFavorite } from "@/app/Sidbar/SidebarAction";

export default function Sidebar() {
  const [menus, setCurrentStarIcon] = useState<any[]>([]);

  useEffect(() => {
    const data = getFamilies();

    data.then(response => {
      for (let i = 0; i < response.length; i++ ) {
        response[i].isFavorite ? response[i].star = faStarSolid : response[i].star = faStarRegular;
      }

      setCurrentStarIcon(response);
    });
  }, []);

  const favoriteClick = async (index: number, familyId: number) => {
    await setFavorite(familyId);

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
                  <FontAwesomeIcon icon={IconMapping(menu.name)} size="lg"/>
                  <a href="#">{menu.name}</a>
                  <FontAwesomeIcon icon={menu.star} size="lg" onClick={() => favoriteClick(index, menu.id)}/>
                </div>);
              }
            })}
          <div className="menu">討論區</div>
            {menus.map((menu, index) => (
              <div key={index} className="menu-collapse-item">
                <FontAwesomeIcon icon={IconMapping(menu.name)} size="lg" />
                <a href="#">{menu.name}</a>
                <FontAwesomeIcon icon={menu.star} size="lg" onClick={() => favoriteClick(index, menu.id)} />
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
