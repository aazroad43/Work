import { Outlet } from "react-router-dom";
import Header from "./Header";
  
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;