import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { SITE_NAME } from "../../utils/seo";
import { Helmet } from "react-helmet-async";

const AppLayout = () => {
  return (
    <>
 <Helmet>
        <title>{SITE_NAME}</title>
      </Helmet>
      
      <div className="h-screen">
        <Header />
        {/* <div className="animate-fade-in-scale"> */}
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
