import React, { Component } from 'react'
import Navbar from './Navbar';
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const { level } = this.state
        const colorBoxes = this.props.palette.colors[level].map(color =>
            <ColorBox background={color.hex} name={color.name} key={color.hex} />
        )

        return (
            <div className="palette">
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
