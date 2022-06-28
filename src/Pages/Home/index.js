import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContentTask from "../../components/ContentTask";
import { getAllProject } from "../../Redux/sliceReducer/projectsSlice";
function Home() {
  return (
    <div>
      <ContentTask />
    </div>
  );
}

export default Home;
