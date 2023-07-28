import { Suspense } from "react";

import Routes from "./route";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
