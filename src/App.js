import React from 'react'
import Login from './components/Login/index'
import logo from './assets/logo.png'
import illustration from './assets/illustration.png'
import theme from './themes/theme'

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
