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
                <Route exact path="/fan/events" component={FanEvents} />
                <Route exact path="/fan/events/:id" component={FanEvent} />

                <Redirect to="/" />
                </Switch>
              </Router>
          </>
      </div>
    );
  }
}
export default App;
