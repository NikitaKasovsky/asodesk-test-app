import React from 'react';
import { useHistory } from 'react-router-dom';

export const ExploreComponent: React.FC = () => {
  const history = useHistory()

  return (
    <React.Fragment>
      <h1>Eplore tool</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
        vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
        voluptatum.
      </p>
      <button onClick={() => history.push('/stats')}>Вернуться назад</button>
    </React.Fragment>
  )
}
