import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Management from "./pages/Management";
import VicePrincipal from "./pages/VicePrincipal";
import AcademicActivities from "./pages/AcademicActivities";
import ExtraCircularActivities from "./pages/ExtraCircularActivities";
import Faculty from "./pages/Faculty";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import TeachingPosts from "./pages/TeachingPosts";
import NonTeachingPosts from "./pages/NonTeachingPosts";
import ApplicationForm from "./pages/ApplicationForm";
import RTIAct from "./pages/RTIAct";
import RTIPIODetails from "./pages/RTIPIODetails";
import RTIApplication from "./pages/RTIApplication";
import RTIAnnualReport from "./pages/RTIAnnualReport";
import Laboratory from "./components/facilities/Laboratory";
import Library from "./components/facilities/Library";
import Gymkhana from "./components/facilities/Gymkhana";
import Gymnasium from "./components/facilities/Gymnasium";
import PlayGround from "./components/facilities/PlayGround";
import Canteen from "./components/facilities/Canteen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/management" element={<Management />} />
        <Route path="/vice-principal" element={<VicePrincipal />} />
        <Route path="/activities/academic" element={<AcademicActivities />} />
        <Route path="/activities/extra-curricular" element={<ExtraCircularActivities />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruitment/teaching-posts" element={<TeachingPosts />} />
        <Route path="/recruitment/non-teaching-posts" element={<NonTeachingPosts />} />
        <Route path="/recruitment/application-form" element={<ApplicationForm />} />
        <Route path="/rti/act-2005" element={<RTIAct />} />
        <Route path="/rti/pio-details" element={<RTIPIODetails />} />
        <Route path="/rti/application" element={<RTIApplication />} />
        <Route path="/rti/annual-report" element={<RTIAnnualReport />} />
        <Route path="/facilities/laboratory" element={<Laboratory />} />
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/gymkhana" element={<Gymkhana />} />
        <Route path="/facilities/gymnasium" element={<Gymnasium />} />
        <Route path="/facilities/playground" element={<PlayGround />} />
        <Route path="/facilities/canteen" element={<Canteen />} />
      </Routes>
    </Router>
  );
}

export default App;