import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Service from "./components/Service";
import ServiceType from "./pages/ServiceType";
import Login from "./Profile/Login";
import Signup from "./Profile/Signup";
import Logout from "./Profile/Logout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicetype" element={<ServiceType />} />
        <Route path="/service" element={<Service />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </>
  );
}

export default App;
