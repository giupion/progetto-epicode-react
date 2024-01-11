
import './App.css'
import MyNav from './components/MyNav'
import MyDropdown from './components/MyDropdown.jsx'
import MyFilms from './components/MyFilms'
import MyFooter from './components/MyFooter'


import {Container}   from 'react-bootstrap'


function App() {
  return (
    <div className="mio">
      <MyNav/>
      <MyDropdown />
      <MyFilms   />
      <MyFooter />
  </div>
  )
}

export default App