
import './App.css'
import MyNav from './components/MyNav'
import MyDropdown from './components/MyDropdown.jsx'
import MySpiderman from './components/MySpiderman'
import MyFooter from './components/MyFooter'
import MyBatman from './components/MyBatman'
import MyIronMan from './components/MyIronMan'
import {  Dropdown } from './components/MyIronMan.jsx';
import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";


function App() {
  return (
    <div className="mio">
      <MyNav/>
      <MyDropdown />
     
      <Row className="mb-5 me-5 row d-flex flex-row">
                <Col xs={3} md={3} lg={3} className="mb-5 me-5 ">
      <MySpiderman   />
      </Col>
      <Col xs={3} md={3} lg={3} className="mb-5 me-5 " >
      <MyBatman  />
      </Col>
      <Col xs={3} md={3} lg={3} className="mb-5 me-5 " >
      <MyIronMan  />
      </Col>
              </Row>
  
      <MyFooter />
  </div>
  )
}

export default App