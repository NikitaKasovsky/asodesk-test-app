import React, { useEffect } from 'react';

// Стили
import './App.css';

// Компоненты
import ContentComponent from './table/Content';

const AppComponent = (): any => {
  // Уткнулся в проблему с корсами, решил пока что отложить
  useEffect(() => {
    fetch('https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Host': 'hq.asodesk.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '20000',
        'Connection': 'keep-alive'
      },
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error(err))
  }, [])

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
