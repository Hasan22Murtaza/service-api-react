import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { FanAuthGuard } from "./FanAuthGuard";
import { OrgAuthGuard } from "./OrgAuthGuard";

import FanLogin from './Components/FanLoginComponent';
import OrganizerLogin from './Components/OrganizerLoginComponent';

import FanEvents from './Components/FanEventsComponent';
import FanEvent from './Components/FanEventComponent';
import Profile from './Components/FanProfileComponent';

import Vanues from './Components/VanuesComponent';
import Vanue from './Components/VanueComponent';

import EventsList from './Components/Organizer/EventsListComponent';
import EventDetail from './Components/Organizer/EventDetailComponent';
import OrganizerSetting from './Components/Organizer/SettingComponent';
import OrganizerEmployees from './Components/Organizer/EmployeesComponent';

class App extends React.Component {

  render() {

    return (
      <div className="h-100">
          <>
              <Router>
                <Switch>
                  {/* Public routes */}
                <Route exact path="/" component={FanLogin} />
                <Route exact path="/organizer/login" component={OrganizerLogin} />

                {/* FanEvents routes */}
                <FanAuthGuard exact path="/fan/events" component={FanEvents} />
                <FanAuthGuard exact path="/fan/events/:id" component={FanEvent} />

                <FanAuthGuard exact path="/fan/vanues/" component={Vanues} />

                <FanAuthGuard exact path="/fan/vanues/:id" component={Vanue} />

                <FanAuthGuard exact path="/fan/profile" component={Profile} />

                {/* Organizer routes */}
                <OrgAuthGuard exact path="/organizer/events" component={EventsList} />
                <OrgAuthGuard exact path="/organizer/events/:id" component={EventDetail} />
                <OrgAuthGuard exact path="/organizer/setting" component={OrganizerSetting} />
                <OrgAuthGuard exact path="/organizer/employees" component={OrganizerEmployees} />
                <Redirect to="/" />
                </Switch>
              </Router>
          </>
      </div>
    );
  }
}
export default App;
