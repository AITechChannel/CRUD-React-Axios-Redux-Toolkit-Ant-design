import React, { useEffect } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";
import crudAPi from "../../api/crudAPi";
import ContentTask from "../../components/ContentTask";
function Home() {
  const api = new TodoistApi("c0ee4bff926b44214d3c6d88d54e102862a17ad2");
  useEffect(() => {
    try {
      const testGet = async () => {
        const params = {};
        const res = await crudAPi.getData("projects");

        console.log(res);
      };

      testGet();
    } catch (error) {}
  }, []);
  return (
    <div>
      <ContentTask />
    </div>
  );
}

export default Home;
