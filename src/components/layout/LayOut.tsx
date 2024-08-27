import * as React from "react";
import MainHeader from "../../components/common/Headers/MainHeader";
import StickyHeader from "../../components/common/Headers/StickyHeader";
import Footer from "../../components/common/footer/Footer";
import Extra from "../../components/route/home/extra/Extra";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <StickyHeader />
      <main>{children}</main>
      <Extra />
      <Footer />
    </div>
  );
};

export const Head = () => <title>Notice</title>;

export default Layout;
