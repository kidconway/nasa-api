import React, { Component, Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'

import './style.css'

class AlertMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }
  renderAlert() {
    if(this.props.alert === 'error' && this.state.show){
      // Displays Error Alert
      const handleDismiss = () => this.setState({ show: false })
      return (
        <Alert variant="danger" onClose={handleDismiss}>
          <h3>Oh snap! You got an error!</h3>
          <p>
            Change this and that and try again. Maybe reload the page? Maybe throw your computer in the pool? Is that Jupiter? Isn't this supposed to be the ~Mars~ Rover? YES, but that's not what's causing the error.
          </p>
        </Alert>
      )
    } else if (this.props.alert === 'success' && this.state.show){
      // Displays Success Alert
      const handleDismiss = () => this.setState({ show: false })
      return(
        <Alert dismissible variant="success" onClose={handleDismiss}>
          <h3>Awww Yiss! You've successfully looked up pictures from the Mars Rover</h3>
          <p>
            It's been a hard week; Problem solving, slicing up APIs and error handling have been all consuming.  That dark day has ended because this app works.
          </p>
        </Alert>
      )
    }
  }

  render(){

    return(
      <Fragment>
        { this.renderAlert() }
      </Fragment>
    )
  }
}

export default AlertMessage
