import React from "react";
import Navbar from '../Components/Navbar'
import aboutImg from "../assets/p1.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "1" },
    { text: "Completed Projects", count: "8" }
  ];
  return (
    <> 
    <Navbar />
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-700">About Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-zinc-900 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I'm a final year computer science student at UET, specializing in MERN stack development for
               modern and responsive web applications. Alongside C#, Python, and C++, I gained practical 
               experience at INTERNpak during my internship, contributing to real-world web projects. 
               I thrive in collaborative environments and prioritize continuous learning to stay updated
               with the latest tech trends. My enthusiasm for web development drives me to create impactful
              solutions in this dynamic industry. 
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-zinc-900">
                      {content.count}
                      <span className="text-blue-900">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={require("../assets/Resume.pdf")} download="Resume.pdf">
  <button className="btn-primary rounded-md border border-cyan-300 py-2 px-4 text-cyan-600 font-semibold shadow-md hover:bg-teal-600 hover:text-slate-50">
    Download Resume
  </button>
</a>


            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;