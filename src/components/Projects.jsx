import ProjectItem from "./ProjectItem";
import mechanicalinkImg from "../assets/mechanicalink.jpg";
import redstorImg from "../assets/redstor.jpg";
import twitchImg from "../assets/twitch.jpg";
import freecodecampImg from "../assets/freecodecamp.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        My main focus is to add value. This is achieved by solving problems that may or may not have been identified. It comes in the form contributing to open source, adding chapters to YouTube videos, joining traininees on projects where help is needed. I'm constantly looking for opportunities to addvalue.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={redstorImg} title="Redstor" />
        <ProjectItem img={freecodecampImg} title="FreeCodeCamp" />
        <ProjectItem img={mechanicalinkImg} title="Mechanical Ink" />
        <ProjectItem img={twitchImg} title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
