import SideNavBar from "../components/SideNavBar";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/projectCard";
function SingleProject() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <SideNavBar />
      <ProjectCard data={data} />
    </>
  );
}

export default SingleProject;
