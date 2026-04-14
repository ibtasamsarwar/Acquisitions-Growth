import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CaseStudyGBP from './pages/CaseStudyGBP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/case-study-gbp" element={<CaseStudyGBP />} />
    </Routes>
  );
}

export default App;
