import React from 'react';

// Стили
import './modals.css';

export default class SuggestionComponent extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Show {}</button>

        {this.state.isOpen && <div className="modal-shading">
          <div className="modal-container">
            <h1>Test</h1>
            <button onClick={() => this.setState({ isOpen: false })}>Close</button>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}
