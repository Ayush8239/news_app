import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,date , newsSource} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <span className=" badge bg-danger z-1 position-absolute top-0 end-0">{newsSource}</span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">{new Date (date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
      </div>
    )
  }
}
