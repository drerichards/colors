import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import './Palette.css'
import 'rc-slider/assets/index.css'

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
                <Slider defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel} />
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
