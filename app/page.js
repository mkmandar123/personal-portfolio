import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
    return [
        {
             url: 'https://www.youtube.com/embed/931-zuulV50?si=glTAAOQFmgvTn06-'
        },
        {
             url: 'https://www.youtube.com/embed/1-mxLGY8_9I?si=LrcqEh__IeyjUPtP'
        },
        {
             url: 'https://www.youtube.com/embed/C696KQGqqvU?si=TyuA5cn2nZFJWp7L'
        },
        {
             url: 'https://www.youtube.com/embed/BDoQwRQ8_WU?si=Pr2-BIiAQL_0jGVI'
        },
        {
             url: 'https://www.youtube.com/embed/xJTvxqreyog?si=sPdUrjYtQXZi6QxJ'
        },
        {
             url: 'https://www.youtube.com/embed/x1KuE1A0G5M?si=yffNUNXEu0X7yfZF'
        },

    ];
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs}/>
    </>
  )
};
