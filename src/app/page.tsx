import Sidebar from "./Sidbar/Sidbar.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

export default function Home() {
  return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar/>
          <Main />
        </div>
      </div>
  )
}
