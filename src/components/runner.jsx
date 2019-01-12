import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { toggle_run, reset } from '../actions/indexAction';

class Runner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standBy: false,
    };
  }

  render() {
    const { toggle_run, reset, running } = this.props;
    const { standBy } = this.state;
    return (
      <div className="flex-column runner-container">
        { running
          ? (
            <button className="runner" onClick={toggle_run}>
              <p>stop</p>
            </button>
          )
          : null}
        { !running ? (
          <button className="runner" onClick={toggle_run}>
            <p>start</p>
          </button>
        )
          : null}
        { standBy ? <button className="standBy runner"><p><FormattedMessage id="get_ready" /></p></button> : null }
        <span className="runner-reset" onClick={reset}><FormattedMessage id="reset" /></span>
      </div>
    );
  }
}

export default connect(
  state => ({
    running: state.running,
  }),
  dispatch => ({
    toggle_run: bindActionCreators(toggle_run, dispatch),
    reset: bindActionCreators(reset, dispatch),
  }),
)(Runner);
