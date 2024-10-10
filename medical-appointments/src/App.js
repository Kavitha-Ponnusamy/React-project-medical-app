import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
