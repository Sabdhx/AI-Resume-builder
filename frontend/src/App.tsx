import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CreateResume from "./Pages/CreateResume";
import Dashboard from "./Pages/Dashboard";
import UpdateResume from "./Pages/UpdateResume";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { useUser } from "@clerk/clerk-react";
import Headers from "./components/headers/Headers";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  // Redirect to SignIn if not signed in
  // if (!isSignedIn) {
  //   navigate("/SignIn");
  // }

  return (
    <Routes>
      {isSignedIn ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/CreateResume" element={<CreateResume />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/UpdateResume" element={<UpdateResume />} />
        </>
      ) : (
        <>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
          <Headers/>

      <App />
    </BrowserRouter>
  );
}
