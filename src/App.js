import './App.css';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer"
import AboutDev from './components/AboutDev';
import EmployeeDetails from './components/Services/EmployeeDetails';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/aboutdev" exact element={<AboutDev />} />
          <Route path="/services/employeedetails" exact element={<EmployeeDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
