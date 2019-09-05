import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import { MenuItem, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex' }
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeFormat(e) {
        this.setState({ format: e.target.value })
    }
    render() {
        const { level, changeLevel } = this.props
        return (
            <header className="navbar">
                <div className="logo">
                    <a href="/">React Color Picker</a>
                </div>
                <div className="slider">
                    <span>Level: {level}</span>
                    <Slider defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel} />
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #000</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(0, 0, 0)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(0, 0, 0, 1)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}
