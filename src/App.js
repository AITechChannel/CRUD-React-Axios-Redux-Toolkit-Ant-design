import "./App.scss";
import CustomLayout from "./layouts/CustomLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const publicRoutes = [
  { path: "/", component: Home },
  // { path: "*", component: NotFound },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((e, i) => {
          const Page = e.component;
          return (
            <Route
              key={i}
              path={e.path}
              element={
                <CustomLayout>
                  <Page />
                </CustomLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
