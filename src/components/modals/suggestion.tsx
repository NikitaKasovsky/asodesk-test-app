import React from 'react';

// Стили
import './modals.css';

interface SuggestionProps {
  suggestionsCount: number
}

export const SuggestionComponent: React.FC<any> = (props: SuggestionProps) => {
  const [state, setState] = React.useState({ isOpen: false })
  const { suggestionsCount } = props;

  return (
    <React.Fragment>
      <button onClick={() => setState({ isOpen: true })}>Show ({suggestionsCount})</button>

      {state.isOpen && <div className="modal-shading">
        <div className="modal-container">
          <h1>Test</h1>
          <button onClick={() => setState({ isOpen: false })}>Close</button>
        </div>
      </div>}
    </React.Fragment>
  )
}
