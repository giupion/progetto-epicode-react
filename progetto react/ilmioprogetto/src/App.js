
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
      <Container className="d-flex">
      <Row className="mb-5 me-5 row">
                <Col xs={4} md={4} lg={4} className="mb-5 me-5 ">
      <MySpiderman   />
      </Col>
      <Col xs={4} md={4} lg={4} className="mb-5 me-5 " >
      <MyBatman  />
      </Col>
              </Row>
      </Container>
      <MyFooter />
  </div>
  )
}

export default App