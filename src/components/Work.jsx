import React from "react";
import Nixon from "../assets/projects/Nixon.png";
import FoodOrder from "../assets/projects/FoodOrder.png";
import Nutrition from "../assets/projects/Nutrition.png";
import Glossary from "../assets/projects/Glossary.png";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink border-[#4a90e2]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Nixon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opascity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C# Application
              </span>
              <div className="pt-8 text-center">
                <a target="blank" href="http://kerimovmayil-001-site1.ctempurl.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/MayilKer/NixonFinalProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FoodOrder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opascity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a target="blank" href="https://mayilker.github.io/FoodOrderApp/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/MayilKer/FoodOrderApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Nutrition})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opascity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a target="blank" href="https://mayilker.github.io/WebSiteFood/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/MayilKer/WebSiteFood">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Glossary})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opascity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a target="blank" href="https://mayilker.github.io/Front-FinalProject/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/MayilKer/Front-FinalProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#4a90e2] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
