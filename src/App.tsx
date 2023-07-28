import { Suspense } from "react";

import Routes from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Reuseable/Loader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
