import React, { Component } from 'react'
import Card from "./Card.jsx"
import Carousel from "react-elastic-carousel"
import data from "./data.json"
export default class Related extends Component {
    constructor(props){
        super(props)
       
    }
    
    render() {
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 1, itemsToShow: 2 },
            { width: 1, itemsToShow: 3 },
            { width: 1, itemsToShow: 4 },
          ];
        return (
            <div>
                <h1 className='title'>RELATED PRODUCT</h1>
                 <Carousel breakPoints={breakPoints}>
                       {data.map((element,index)=>{
                     return   <Card related={element} key={index}/>
                       })}
              
                 </Carousel>
                
            </div>
        )
    }
}
