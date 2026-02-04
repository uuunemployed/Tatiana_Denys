import { Route, HashRouter as Router, Routes } from "react-router";
import App from "./App";
import { HomePage } from "./modules/HomePage/HomePage";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
