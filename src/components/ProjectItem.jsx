import { useState } from "react";

const ProjectItem = ({ img, title, projectInfo }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = (event) => {
    event.preventDefault();
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />

      {showMoreInfo && (
        <div className="absolute top-[100%] left-0 transform -translate-y-1/2 bg-white p-4 rounded-lg border border-gray-300">
          <h3 className="text-2xl font-bold text-[#001b5e] tracking-wider text-center mb-2">
            {title}
          </h3>
          <p className="text-[#001b5e] mb-2">{projectInfo}</p>
        </div>
      )}

      <div
        className="hidden group-hover:block absolute top-[50%] translate-y-[-50%]"
        onClick={handleMoreInfoClick}
      >
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
