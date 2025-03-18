import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import ScrollTo from "../../components/ScrollTo/ScrollTo";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
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
