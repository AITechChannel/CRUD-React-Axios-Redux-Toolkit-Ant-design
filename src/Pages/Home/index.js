import React, { useEffect } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";
import taskApi from "../../api/taskApi";
import ContentTask from "../../components/ContentTask";
import { useDispatch } from "react-redux";
import taskSlice, { fetchApi } from "../../Redux/sliceReducer/taskSlice";
function Home() {
  // const api = new TodoistApi("c0ee4bff926b44214d3c6d88d54e102862a17ad2");
  const dispatch = useDispatch();
  useEffect(() => {
    // try {
    //   const testGet = async () => {
    //     const params = {};
    //     const res = await taskApi.getData("projects");
    //     console.log(res);
    //   };
    //   testGet();
    // } catch (error) {}
    dispatch(fetchApi());
  }, []);
  return (
    <div>
      <ContentTask />
    </div>
  );
}

export default Home;
