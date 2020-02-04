import React from 'react';

// Стили
import './App.css';

// Компоненты
import ContentComponent from './components/table/Content';

const AppComponent = (): any => {
  return (
    <div className="wrapper">
      <div className="header"></div>
      <div className="side-nav"></div>
      <div className="content">
        <ContentComponent />
      </div>
    </div>
  );
}

export default AppComponent;
