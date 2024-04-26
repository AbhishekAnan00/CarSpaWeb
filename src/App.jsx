import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Service from "./components/Service";
import ServiceType from "./pages/ServiceType";
import Login from "./Profile/Login";
import Signup from "./Profile/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import {History} from "./components/History";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home /> }
        />
        <Route path="/servicetype" element={<ServiceType />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/history" element={ <History /> } /> 
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

// element={ authUser ? <History /> : <Navigate to={"/login"} />}