import React, { Component } from 'react';
import Palette from './components/Palette'
import seedColors from './scripts/seedColors'
import { generatePalette } from './scripts/colorHelpers'

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palette {...seedColors[7]} />
      </div>
    );
  }
}

export default App;
