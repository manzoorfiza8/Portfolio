import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/Home" },
    { name: "ABOUT", link: "/About" },
    { name: "SKILLS", link: "/Skills" },
    { name: "PROJECTS", link: "/Project" },
    { name: "CONTACT", link: "/Contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <> 
   <nav
  className={`fixed w-full  dark:bg-dark top-0 z-[999] ${
    sticky ? "bg-white/60 text-blue-900" : "text-white"
  }`}
>
  <div className="flex items-center  justify-between">
    <div className="mx-7 ml-20 text-3xl">
      <h4 className="text-black-4xl uppercase font-bold">
        F<span className="text-cyan-700 text-3xl">iza</span>
      </h4>
    </div>
    <div
      className={`${
        sticky ? "md:bg-white/0 bg-white" : "bg-white"
      } text-blue-900 text-bold-2xl md:block hidden px-4 py-2 font-medium rounded-bl-full`}
    >
      {/* dark:text-white */}
      <ul className="flex items-center gap-1 py-2 text-lg">
        {menuLinks?.map((menu, i) => (
          <li key={i} className="px-6 hover:text-cyan-600">
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
       
      </ul>
    </div>
    <div
      onClick={() => setOpen(!open)}
      className={`z-[999] ${
        open ? "text-blue-900" : "text-gray-100"
      } text-bold-3xl md:hidden m-5`}
    >
      <ion-icon name="menu"></ion-icon>
    </div>
    <div
      className={`md:hidden text-blue-900 text-bold-6xl absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
    >
      <ul className="flex flex-col justify-center text-bold-8xl h-full gap-10 py-2 text-lg">
        {menuLinks?.map((menu, i) => (
          <li
            onClick={() => setOpen(false)}
            key={i}
            className="px-6 hover:text-cyan-600"
          >
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
    </div>
   
  </div>
</nav>


    </>
  );
};

export default Navbar;