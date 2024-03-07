import { FaGithub, FaLinkedin } from "react-icons/fa";
import douglasImg from "../assets/douglas.jpg";

const Main = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src={douglasImg}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center text-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Douglas Van Der Merwe
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 ml-4 text-gray-800">
            I am the one who takes on the tasks that everyone avoids and gets them done.
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full" >
            <FaGithub
              className="cursor-pointer"
              size={20}
              onClick={() =>
                handleLinkClick("https://www.github.com/DouglasVDM/")
              }
            />
            <FaLinkedin
              className="cursor-pointer"
              size={20}
              onClick={() =>
                handleLinkClick(
                  "https://www.linkedin.com/in/douglas-van-der-merwe-b4552467/"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
