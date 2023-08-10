import Navbar from "./Navbar";
import Home from "./Home";
import Error from "./Error";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
