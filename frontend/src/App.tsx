import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { useUser } from "@clerk/clerk-react";
import Headers from "./components/headers/Headers";
import Home from "./components/Home/Home";
import SpecificResume from "./components/Dashboard/components/edit/SpecificResume";
import MyResumeDownload from "./my-resume/[resumeId]/view";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  // Redirect to SignIn if not signed in
  if (!isSignedIn) {
    navigate("/SignIn");
  }

  return (
    <Routes>
      {isSignedIn ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/Dashboard/resume/:id/edit"
            element={<SpecificResume />}
          />
          <Route
            path="/Dashboard/resume/:id/edit"
            element={<SpecificResume />}
          />
           <Route
            path="/my-resume/:id/view"
            element={<MyResumeDownload />}
          />
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
      <Headers />

      <App />
    </BrowserRouter>
  );
}
