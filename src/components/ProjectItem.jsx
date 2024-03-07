
const ProjectItem = ({ img, title, projectInfo }) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />

      <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] text-center">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-white mb-2">{projectInfo}</p>
        <a href="/"></a>
      </div>
    </div>
  );
};

export default ProjectItem;
