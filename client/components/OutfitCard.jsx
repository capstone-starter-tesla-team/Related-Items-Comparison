
import React, { Component } from 'react'

import StarsRating from 'stars-rating'

class Outfit extends Component {
  constructor(props) {
    super(props)
    this.state={
      tabData : [],
    
    }
  }
 
  
  showData(){
 
     if(this.props.be === 1){
       return (

        <div>
        <div className="card-product">
            <img className="card-image" src={this.props.data.image} ></img> 
    
        
          <div className="card-category">
            <a> {this.props.data.category}</a>
          </div>
          <div className="card-title">
          {this.props.data.name}
          <span className="card-price">
          <br />  
         ${this.props.data.price}
          <br />
          </span>
          <span>
          <StarsRating
          rating={5}
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

 
  render() { 
    //   console.log("hhhhh",this.props)
    return (
    
      <div>
 
          <div className='Delete' >
          {/* <i className="bi bi-person-x" onClick={()=>{this.props.Delete}}></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
</svg> */}
        <button  onClick={()=>this.props.delete()}>deleteee</button>
        
        </div>
        {this.showData()}
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" />

<div
  class="modal fade"
  id="exampleModalLong"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLongTitle"
  aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
          Modal title
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
   
    </div>
    )
  }
}

export default Outfit;

