import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { name, background } = this.props
        const { copied } = this.state

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='colorbox'>
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
                    <div className={`copy-msg ${copied && "show"}`} >
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <button className="copy-btn">Copy</button>
                    </div>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}