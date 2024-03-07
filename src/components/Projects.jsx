import ProjectItem from "./ProjectItem";
import mayfieldImg from "../assets/mayfield-tennis-club.jpg";
import redstorImg from "../assets/redstor.jpg";
import freecodecampImg from "../assets/freecodecamp.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        My main focus is to add value. Achieved by solving problems that may or
        may not have been identified. This involves contributing to open source projects,
        adding chapters to YouTube videos, joining traininees on projects where
        help is needed, etc.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={redstorImg}
          title="Redstor"
          projectInfo="Added timestamps to most recent YouTube video"
        />
        <ProjectItem
          img={freecodecampImg}
          title="FreeCodeCamp"
          projectInfo="Onboarded as contributor on their open source project and Added timestamps to YouTube videos"
        />
        <ProjectItem
          img={mayfieldImg}
          title="Mayfield Tennis Club"
          projectInfo="Built a court booking app for the club. Minimum Viable Product almost ready for user testing"
        />
      </div>
    </div>
  );
};

export default Projects;
