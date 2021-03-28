import React, { Component } from 'react'
import Card from "./Card.jsx"
import Carousel from "react-elastic-carousel"
import data from "./data.json"
import OutfitCard from "./OutfitCard.jsx";
import Form from './Form.jsx';
 class Related extends Component {
    constructor(props){
        super(props)
        this.state={
            be: 0,
            tabData:[],
            related : {}      
        }
       
    }
    deleteimage(id){
        const {tabData,test}=this.state
       tabData.filter((e,i)=>{
            if(id===e.id){
                var array=[]
           delete tabData[i]
              array.push(tabData)
             
          this.setState({array})
        }
        })
        }

    passData(num, data){
        // console.log(data, num )
       if(num==1){ 
           var newData = this.state.tabData;
        //    console.log('newdata before',newData)
           if (newData.length>0){
            //    console.log('dho ',newData.length)
               var x = true
               for (var i = 0; i<newData.length;i++){
                //    console.log(i)
                   if (newData[i].id===data.id){
                      x= false    
           }
               }
               if (x === true){
                   newData.push(data)
               }
            }
            else {
                newData.push(data)
                // console.log("pushed")
            }
        //    console.log('all data after mapping',newData)
        this.setState({be:num, related: data, tabData:newData})
        
      

        }
    }
    
    
    render() {
        const breakPoints = [
            { width:1, itemsToShow:3},
       
          ];
   
        return (
            
            <div>
                <h1 className='title'>RELATED PRODUCT</h1>
                 <Carousel breakPoints={breakPoints}>
                       {data.map((element,index)=>{
                     return   <Card passData={(v, s)=>{this.passData(v , s)}} related={element} key={index}/>
                       })}
                 </Carousel> 
                 <Form mydata={this.state.related}/>

                 <h1 className='title'>Your Outfit</h1>
                 <Carousel breakPoints={breakPoints}>
               {this.state.tabData.map(e=>
               <div key={e.id}>
               <OutfitCard be={this.state.be} delete={()=>this.deleteimage(e.id)} data={e}/>
               </div>
              
                )}
                {console.log("laaaa" , this.state.related)}
                 </Carousel>
            </div>
        )
    }
}
export default Related;