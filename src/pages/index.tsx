import * as React from "react";
import Header from "../components/common/Headers/Header";
import StickyHeader from "../components/common/Headers/StickyHeader";
import Footer from "../components/common/footer/Footer";
import Courses from "../components/route/home/courses/Courses";
import { Slider } from "../components/route/home/hero/Slider";
import Insights from "../components/route/home/insights/Insights";
import Services from "../components/route/home/services/Services";
import WhyUs from "../components/route/home/whyus/WhyUs";

const IndexPage = () => {
  return (
    <main>
      <StickyHeader />
      <Header />
      <Slider />
      <Courses />
      <Services />
      <WhyUs />
      <Insights />
      <Footer />
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
