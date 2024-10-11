import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultation";
import LandingPage from "./Components/Landing_Page/Landing_page";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
