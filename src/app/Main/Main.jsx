import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faShare,
  faBasketball,
  faBaseball,
  faBookmark as faBookmarkSolid,
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark as faBookmarkRegular,
  faThumbsUp as faThumbsUpRegular,
  faThumbsDown as faThumbsDownRegular
} from '@fortawesome/free-regular-svg-icons';
import {faBitcoin, faEthereum} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Main() {
  return (
    <main>
      <div className="main">
        <div className="main-center">
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論!!!</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-center-flex">
            <div className="vote">
              <FontAwesomeIcon icon={faThumbsUpRegular} size="lg" />
              <div>2.1k</div>
              <FontAwesomeIcon icon={faThumbsDownRegular} size="lg" />
            </div>
            <div className="post">
              <button>加入</button>
              <div className="post-info">
                <div className="post-info-topic">🚲 運動健身</div>
                <div className="post-info-span">
                  <span>‧</span>
                  <span>由 ignacio 發布</span>
                  <span>‧</span>
                  <span>4小時前</span>
                </div>
              </div>
              <div className="post-title">NBA季後賽激烈開打，到底最後誰會是冠軍，馬上加入進行討論</div>
              <div className="post-content">這邊是內容呈現的部分<br/>測試換行<br/>就是要換行<br/>繼續換行<br/>持續換行</div>
              <div className="post-footer">
                <div>
                  <FontAwesomeIcon icon={faComments} size="lg" />
                  <span>188條評論</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <span>分享</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmarkRegular} size="lg" />
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-side">
          <div className="main-side-topic">
            <p>熱門主題</p>
            <div>
              <FontAwesomeIcon icon={faBasketball} size="lg" />
              <a href="#">籃球</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faBaseball} size="lg" />
              <a href="#">棒球</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faBitcoin} size="lg" />
              <a href="#">比特幣</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faEthereum} size="lg" />
              <a href="#">以太幣</a>
            </div>
          </div>
          <div className="main-side-footer">
            <div className="flex">
              <a>用戶協議</a>
              <a>隱私政策</a>
            </div>
            <div>
              <a>內容政策</a>
              <a>版主行為準則</a>
            </div>
          </div>
          <div className="main-side-copyright">
            WellW ©2023 保留所有權利
          </div>
          <div className="main-side-back">
            <button>回到頂部</button>
          </div>
        </div>
      </div>
    </main>
  )
}
