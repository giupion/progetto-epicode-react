import React, { Component } from 'react';
import { Image,Button,Row ,Col,Card,ListGroup } from "react-bootstrap";

class MyBatman extends Component {

    state = {
      data: null,
      loading: true,
      error: null,
    };
  


  componentDidMount() {
    const api = "http://www.omdbapi.com/?apikey=1beafe10&s&s=batman";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
        console.log(data)
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    console.log(data)
    return (
      <div>

        {loading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {data && (
          
          <div className="carousel-container mb-5 me-5">
            {data.Search.map((item) => (
              <div className="carousel-slide  mb-5 me-5 "  key={item.imdbID} >
                <img src={item.Poster} alt={item.Title} style={{ width:"300px" ,height:"400px" }}   />
                </div>
            ))}      
        </div>      
        )}
      </div>
    );
  }
}

export default MyBatman;