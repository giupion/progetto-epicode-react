import React, { Component } from 'react';
import Key from '../password';

class GalleriaUnoComp extends Component {

    state = {
      data: null,
      loading: true,
      error: null,
    };
  


  componentDidMount() {
    const api = "http://www.omdbapi.com/?apikey="+Key+"&s=harry%20potter";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
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
          
          <div className="carousel-container">
            {data.Search.map((item) => (
              <div className="carousel-slide" key={item.imdbID}><img src={item.Poster} alt={item.Title} /></div>
            ))}      
        </div>      
        )}
      </div>
    );
  }
}

export default GalleriaUnoComp;
