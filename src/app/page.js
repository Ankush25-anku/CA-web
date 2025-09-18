import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "../../components/carousel/Carousel";
import Facts from "../../components/facts/Facts";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Project from "../../components/project/project";
import Blog from "../../components/blog/Blog";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact from "../../components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Facts />
      <About />
      <Services />
      <Project />
      <Blog />
      <Team />
      <Testimonial />
      <Contact />
    </div>
  );
}
