import * as React from "react";
import Header from "../components/common/Headers/Header";
import Courses from "../components/route/home/courses/Courses";
import { Slider } from "../components/route/home/hero/Slider";
import Menu from "../components/route/home/menu/Menu";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Slider />
      <Menu />
      <Courses />
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
