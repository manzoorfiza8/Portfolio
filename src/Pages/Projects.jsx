import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/w2.jpg";
import project2 from "../assets/p1.jpg";
import project3 from "../assets/p1.jpg";
import project4 from "../assets/package.jpg";
import project5 from "../assets/p1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from '../Components/Navbar'
import { Autoplay, Pagination } from "swiper/modules"


const Project = () => {
  const projects = [
    {
      img: project1,
      name: "weather Forecast App",
      github_link: "https://github.com/manzoorfiza8/Weather_APP.git",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "Trip  tonic",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <>
    <Navbar />
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600 ">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                  <a
  href={project_info && project_info.github_link ? project_info.github_link : '#'}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
>
  Github
</a>
<a
  href={project_info && project_info.live_link ? project_info.live_link : '#'}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
>
  Live Demo
</a>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
    </section>
    </>
  );
};

export default Project;