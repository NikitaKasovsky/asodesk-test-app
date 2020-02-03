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
        <button onClick={() => this.setState({ isOpen: true })}>Open modal</button>

        {this.state.isOpen && <div className="modal">
          <div className="modal-container">
            <h1>Test</h1>
            <button onClick={() => this.setState({ isOpen: false })}>Close</button>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}
