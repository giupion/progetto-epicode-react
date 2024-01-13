
import './App.css'
import MyNav from './components/MyNav'
import MyDropdown from './components/MyDropdown.jsx'
import MySpiderman from './components/MySpiderman'
import MyFooter from './components/MyFooter'
import MyBatman from './components/MyBatman'
import {  Dropdown } from "react-bootstrap";
import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";


function App() {
  return (
    <div className="mio">
      <MyNav/>
      <MyDropdown />
      <Container >
      <Row>
                <Col xs={4} md={4} lg={4}>
      <MySpiderman   />
      </Col>
      <Col xs={4} md={4} lg={4}>
      <MyBatman  />
      </Col>
              </Row>
      </Container>
      <MyFooter />
  </div>
  )
}

export default App