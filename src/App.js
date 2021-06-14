import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Access from "./components/Access";
import BarberProfile from "./components/BarberProfile";
import Barbers from "./components/Barbers";
import CaretakerProfile from "./components/CaretakerProfile";
import Caretakers from "./components/Caretakers";
import CarpenterProfile from "./components/CarpenterProfile";
import Carpenters from "./components/Carpenters";
import DoctorProfile from "./components/DoctorProfile";
import Doctors from "./components/Doctors";
import ElectricianProfile from "./components/ElectricianProfile";
import Electricians from "./components/Electricians";
import Error404 from "./components/Error404";
import GardenerProfile from "./components/GardenerProfile";
import Gardeners from "./components/Gardeners";
import HomePage from "./components/HomePage";
import MaidProfile from "./components/MaidProfile";
import Maids from "./components/Maids";
import Massagers from "./components/Massagers";
import Mechanics from "./components/Mechanics";
import MemberDashActivity from "./components/MemberDashActivity";
import MemberDashboard from "./components/MemberDashboard";
import MemberDashHome from "./components/MemberDashHome";
import MemberDashProfile from "./components/MemberDashProfile";
import Painters from "./components/Painters";
import Plumbers from "./components/Plumbers";
import UnderConstruction from "./components/UnderConstruction";
import UserDashActivity from "./components/UserDashActivity";
import UserDashboard from "./components/UserDashboard";
import UserDashHome from "./components/UserDashHome";
import UserDashProfile from "./components/UserDashProfile";
import UserDashServices from "./components/UserDashServices";
import MassagerProfile from "./components/MassagerProfile";
import MechanicsProfile from "./components/MechanicsProfile";
import PainterProfile from "./components/PainterProfile";
import PlumberProfile from "./components/PlumberProfile";
import MemRegistrationPage from "./components/MemRegistrationPage";
import Terms from "./components/Terms";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/get-access" component={Access} />
          <Route path="/member/registration" component={MemRegistrationPage} />
          <Route exact path="/user/dashboard" component={UserDashboard} />
          <Route path="/user/dashboard/home" component={UserDashHome} />
          <Route
            exact
            path="/user/dashboard/services"
            component={UserDashServices}
          />
          <Route
            exact
            path="/user/dashboard/services/doctors"
            component={Doctors}
          />
          <Route
            exact
            path="/user/dashboard/services/doctors/:id"
            component={DoctorProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/plumbers"
            component={Plumbers}
          />

          <Route
            exact
            path="/user/dashboard/services/plumbers/:id"
            component={PlumberProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/carpenters"
            component={Carpenters}
          />
          <Route
            exact
            path="/user/dashboard/services/carpenters/:id"
            component={CarpenterProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/electricians"
            component={Electricians}
          />
          <Route
            exact
            path="/user/dashboard/services/electricians/:id"
            component={ElectricianProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/barbers"
            component={Barbers}
          />
          <Route
            exact
            path="/user/dashboard/services/barbers/:id"
            component={BarberProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/painters"
            component={Painters}
          />

          <Route
            exact
            path="/user/dashboard/services/painters/:id"
            component={PainterProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/gardeners"
            component={Gardeners}
          />
          <Route
            exact
            path="/user/dashboard/services/gardeners/:id"
            component={GardenerProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/mechanics"
            component={Mechanics}
          />
          <Route
            exact
            path="/user/dashboard/services/mechanics/:id"
            component={MechanicsProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/caretakers"
            component={Caretakers}
          />
          <Route
            exact
            path="/user/dashboard/services/caretakers/:id"
            component={CaretakerProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/maids"
            component={Maids}
          />
          <Route
            exact
            path="/user/dashboard/services/maids/:id"
            component={MaidProfile}
          />
          <Route
            exact
            path="/user/dashboard/services/massagers"
            component={Massagers}
          />
          <Route
            exact
            path="/user/dashboard/services/massagers/:id"
            component={MassagerProfile}
          />
          <Route path="/user/dashboard/activity" component={UserDashActivity} />
          <Route path="/user/dashboard/profile" component={UserDashProfile} />
          <Route path="/member/dashboard" component={MemberDashboard} />
          <Route path="/member/dashboard/home" component={MemberDashHome} />
          <Route
            path="/member/dashboard/activity"
            component={MemberDashActivity}
          />
          <Route
            path="/member/dashboard/profile"
            component={MemberDashProfile}
          />
          <Route path="/terms-and-conditions" component={Terms} />
          <Route
            path="/page-under-construction"
            component={UnderConstruction}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
