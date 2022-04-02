import { Routes as ReactRoutes, Route } from "react-router-dom";
import Explorer from "./components/explorer";
import Search from "./components/search";
import EditorLayout from "./layouts/editor-layout";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<EditorLayout />}>
        <Route index element={<Explorer />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
