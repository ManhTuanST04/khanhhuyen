import "./App.css";
// react-router components
// import { BrowserRouter as Router, Route, Navigate, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Ticket from "./component/Ticket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/ticket' element={<Ticket />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    // 	<Home/>
    // </div>
  );
}

export default App;
