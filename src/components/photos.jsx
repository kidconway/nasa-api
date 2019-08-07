import React, { Component, Fragment } from 'react'
import '../style.css'

class Photos extends Component {

  // Renders photos onto cards dynamically
  renderPhotos() {
    if(this.props.photos){
      const photo = this.props.photos.map(p => {
        return (
            <div className="card bg-dark mt-3 mr-3 d-flex justify-content-center" key={p.id}>
              <img className="card-img-top" src={p.img_src ? ( p.img_src) : "./image-not-found.png"} alt='null' />
              <div className="card-body">
                <table className="table-responsive no-wrap">
                  <tbody>
                    <tr>
                      <td>Camera Name:</td>
                      <td>{p.camera.full_name}</td>
                    </tr>
                    <tr >
                      <td>Earth Date:</td>
                      <td>{p.earth_date}</td>
                    </tr>
                    <tr>
                      <td>Mars Sol:</td>
                      <td>{p.sol}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        )
      })
      return(
        <div className='row'>
          { photo }
        </div>)
    }
  }

  render(){
      return (
        <Fragment>
          {this.renderPhotos()}
        </Fragment>
       )
    }
}

export default Photos
