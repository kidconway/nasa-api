import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'
import Photos from './photos'
import AlertMessage from './alerts'

import './style.css'

import moment from 'moment'

const initialState = {
  query: '',
  earth_date: null,
  alert: '',
  photos: []
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.startOver = this.startOver.bind(this)
  }

  // API Call
  search() {
    const base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
    const key = 'AKjgN2ndVp2kkWjsY1JA6t2i5zE8FbyAYW6dqGks'
    const fetch_url = `${base_url}earth_date=${this.state.query}&api_key=${key}`
    if (!this.state.query) {
      this.setState({alert:'error'})
    } else {
      fetch(fetch_url, {method: "GET"})
        .then(res => res.json())
        .then(json => {
          const photos = json.photos
          this.setState({photos, alert: 'success'})
      })
    }
  }

// Resets the query and photo array
  startOver() {
    this.setState(initialState)
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          {/* Yes I am aware that is a picture of Jupiter */}
          <img className="app-title mb-5 logo" src="./thats.not.mars.png" alt="null" />
        </div>
        <div className="app-body container">
          <FormGroup className='row justify-content-cneter d-block mx-0'>
            <InputGroup className='input'>
              <FormControl
                type='date'
                value={this.state.query}
                onChange={event => {
                  this.setState({query: event.target.value})
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.search()
                  }
                }}
                max={moment().format("YYYY-MM-DD")}
              />
              <span className='input-group-text bg-success' onClick={() => this.search()}>
                <i className="fas fa-search"></i>
              </span>
              <span className='input-group-text bg-danger' onClick={() => this.startOver()}>
                <i className="fas fa-redo-alt"></i>
              </span>
            </InputGroup>
          </FormGroup>
          <AlertMessage alert={this.state.alert}/>
          <Photos photos={ this.state.photos } className='justify-content-center'></Photos>
        </div>
      </div>
    )
  }
}

export default App
