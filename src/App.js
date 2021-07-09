import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import FanLogin from './Components/FanLoginComponent';
import OrganizerLogin from './Components/OrganizerLoginComponent';

import FanEvents from './Components/FanEventsComponent';
import FanEvent from './Components/FanEventComponent';

import Vanues from './Components/VanuesComponent';
import Vanue from './Components/VanueComponent';

import EventsList from './Components/Organizer/EventsListComponent';
import EventDetail from './Components/Organizer/EventDetailComponent';


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
                <Route exact path="/fan/events" component={FanEvents} />
                <Route exact path="/fan/events/:id" component={FanEvent} />

                <Route exact path="/fan/vanues/" component={Vanues} />

                <Route exact path="/fan/vanues/:id" component={Vanue} />

                {/* Organizer routes */}
                <Route exact path="/organizer/events" component={EventsList} />
                <Route exact path="/organizer/events/:id" component={EventDetail} />

                <Redirect to="/" />
                </Switch>
              </Router>
          </>
      </div>
    );
  }
}
export default App;
