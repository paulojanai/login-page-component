import React from 'react'
import Login from './components/Login/index'
import logo from './assets/logo.png'
import illustration from './assets/illustration.png'

const paletteColorsTurquoise= {
  White: "#FFFFFF",
  DarkTurquoise	: "#0CC9D2",
  Turquoise: "#40E0D0",
  BoxTurquoise: "#8ef0f24d",
  Gainsboro: "#D3D3D3",
  DarkGray: "#A9A9A9",
  Gray: "#808080",
  DimGray: "#52565B",
  BlackBlue: "#222831",
  DarkBlackBlue: '#171e29'
}

function App() {
  return (
    <Login
      logo={logo}
      illustration={illustration}
      nameCompany="library"
    />
  );
}

export default App;
