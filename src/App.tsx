import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/root/Navbar';
import { WrapperComponent } from './components/table/Wrapper';
import { ExploreComponent } from './components/explore/Explore';
import { Intro } from './components/root/Intro';

const AppComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container">
        <Switch>
          <Route component={Intro} path="/" exact />
          <Route component={WrapperComponent} path="/stats" />
          <Route component={ExploreComponent} path="/explore:keyword" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppComponent;
