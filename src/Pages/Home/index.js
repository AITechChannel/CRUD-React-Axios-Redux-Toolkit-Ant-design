import React, { useEffect } from "react";
import crudAPi from "../../api/crudAPi";
function Home() {
  useEffect(() => {
    try {
      const testGet = async () => {
        const res = await crudAPi.getData();

        console.log(res);
      };

      testGet();
    } catch (error) {}
  }, []);

  const handleGetData = () => {};
  return (
    <div>
      This content home page
      <button onClick={handleGetData}>Get data</button>
    </div>
  );
}

export default Home;
