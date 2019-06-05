import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (
            <div style={{ background }} className='colorbox'>
                <div className='copy-container'>
                    <button className="copy-btn">Copy</button>
                </div>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <span className="see-more">More</span>
            </div>
        )
    }
}