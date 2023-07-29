import { Suspense } from "react";
import Routes from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Reuseable/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
