import React from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Sign-In/Sign-In";
import Plurality from "./pages/Plurality/Plurality";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/plurality" element={<Plurality />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
