import * as React from "react";
import Header from "../components/common/Headers/Header";
import Footer from "../components/common/footer/Footer";
import Courses from "../components/route/home/courses/Courses";
import Extra from "../components/route/home/extra/Extra";
import { Slider } from "../components/route/home/hero/Slider";
import Menu from "../components/route/home/menu/Menu";
import Partner from "../components/route/home/partner/Partner";
import Price from "../components/route/home/price/Price";
import Testimonials from "../components/route/home/testimonials/Testimonials";
import Video from "../components/route/home/video/Video";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Slider />
      <Menu />
      <Courses />
      <Partner />
      <Video />
      <Price />
      <Extra />
      <Testimonials />
      <Footer />
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
