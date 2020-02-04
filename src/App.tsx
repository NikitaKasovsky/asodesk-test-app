import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/root/Navbar';
import { WrapperComponent } from './components/table/Wrapper';

const AppComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div>
        <Switch>
          <Route component={WrapperComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppComponent;
