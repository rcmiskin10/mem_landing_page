import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import {Route, Switch, BrowserRouter,} from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const styles = {
  container: {
    width: '100%',
  }
};

class App extends Component {
  render() {
    
    return (
      <div >
        
        <BrowserRouter>
        <div>
          <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'App',
}), withWidth())(App);