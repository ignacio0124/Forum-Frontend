import Sidebar from "./Sidbar/Sidebar";
import Header from "./Header/Header";
import Main from "./Main/Main";

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
