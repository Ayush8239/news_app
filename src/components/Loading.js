import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='text-center' >
                <div className="spinner-border text-success mx-1" role="status"></div>
                <div className="spinner-border text-danger mx-1" role="status"></div>
                <div className="spinner-border text-warning mx-1" role="status"></div>
            </div>
        )
    }
}
