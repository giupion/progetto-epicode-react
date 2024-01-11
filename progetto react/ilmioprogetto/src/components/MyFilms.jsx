import React from 'react'
import {Component} from 'react'


export default class MyFilms extends Component {

componentDidMount = async () => {
    try {
     const response = await fetch("https://striveschool.herokuapp.com/api/reservation")
        if(response.ok) {
             const data = await response.json() 
             this.setState({ reservations: data })
   } else {
       console.log('error while fetching')}
   } catch(e) { console.log(e) }}

    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
