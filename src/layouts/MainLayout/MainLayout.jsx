import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import ScrollTo from "../../components/ScrollTo/ScrollTo";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
  return (
    <div tabIndex={-1} className="min-h-screen flex flex-col bg-[#fff]">
      <ScrollTo />
      <Header />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
