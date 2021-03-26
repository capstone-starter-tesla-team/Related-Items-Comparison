
import React, { Component } from 'react'

import StarsRating from 'stars-rating'

class Cardproduct extends Component {
  constructor(props) {
    super(props)
    this.state={
   
    }
  }
 

  render() { 
    return (
      <div>
       
      <div className="card-product">
        <div>
       
          
          <img className="card-image" src={this.props.related.image}></img>
        </div>
        <div className="card-category">
          <a> {this.props.related.category}</a>
        </div>
        <div className="card-title">
        {this.props.related.name}
        
        <span className="card-price">
      
        <br />
       ${this.props.related.price}
        <br />
        </span>
        <span>
        <StarsRating
        rating={(5)}
        starRatedColor="orange"
        starDimension="15px"
        starSpacing="1px"
        numberOfStars={5}
        name="rating"
      />
      </span>
       </div>
      
      </div>
     
    </div>
     
    )
  }
}
export default Cardproduct;



  

  