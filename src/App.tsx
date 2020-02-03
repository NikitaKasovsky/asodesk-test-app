import React from 'react';

// Стили
import './App.css';

// Компоненты
import ContentComponent from './table/Content';

const AppComponent = (): any => {
  // Уткнулся в проблему с корсами, решил пока что отложить
  // useEffect(() => {
  //   fetch('https://app.asodesk.com/api/us/demo/data-stats', {
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       'Content-Length': '200',
  //       'X-Custom-Header': 'ProcessThisImmediately'
  //     },
  //     redirect: 'follow',
  //     referrer: 'no-referrer'
  //   })
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, [])

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
