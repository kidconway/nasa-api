import React, { Component, Fragment } from "react";
import Alert from "react-bootstrap/Alert";

import "../style.css";

// I built it like this to allow for multiple Alerts.  If this were a registration form, for example, it would allow placing messages in different places.

class AlertMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  renderAlert() {
    if (this.props.alert === "error" && this.state.show) {
      // Displays Error Alert
      return (
        <Alert variant="danger" className="row">
          <h3>Oh snap! You got an error!</h3>
          <p>
            Change this and that and try again. Maybe reload the page? Maybe
            throw your computer in the pool? Is that Jupiter? Isn't this
            supposed to be the ~Mars~ Rover? YES, but that's not what's causing
            the error.
          </p>
        </Alert>
      );
    } else if (this.props.alert === "success" && this.state.show) {
      // Displays Success Alert
      const handleDismiss = () => this.setState({ show: false });
      return (
        <Alert dismissible variant="success" onClose={handleDismiss}>
          <h3>
            Awww Yiss! You've successfully looked up pictures from the Mars
            Rover
          </h3>
          <p>
            Space: the final frontier. These are the photos of the Curiosity
            Mars Rover. Its continuing mission: to explore strange new worlds,
            to seek out new life and new civilizations, to boldly go where no
            one has gone before*.
          </p>
          <hr />
          <footer className="text-left text-muted">
            <small>
              *So far it has just explored Mars. No future plans to explore
              other planets.
            </small>
          </footer>
        </Alert>
      );
    }
  }

  render() {
    return <Fragment>{this.renderAlert()}</Fragment>;
  }
}

export default AlertMessage;
