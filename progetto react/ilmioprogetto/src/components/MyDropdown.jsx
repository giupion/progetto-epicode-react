import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap';
function MyDropdown() {
  return (
    <Container className='d-flex flex-row'>
    <Dropdown>
     
       <h1>TV-SHOWS</h1>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
  );
}

export default MyDropdown;
