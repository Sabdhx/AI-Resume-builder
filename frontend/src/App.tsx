import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CreateResume from "./components/CreateAndUpdate/CreateResume";
import Dashboard from "./components/Dashboard/Dashboard";
import UpdateResume from "./components/CreateAndUpdate/UpdateResume";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { useUser } from "@clerk/clerk-react";
import Headers from "./components/headers/Headers";
import Home from "./components/Home/Home";

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
