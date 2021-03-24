import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import emanticcss from 'semantic-ui-css'
const data=["https://awgikyrvip.cloudimg.io/v7/_media_/media/image/21/c5/9f/_FrontImage_58323_600x600.png","https://awgikyrvip.cloudimg.io/v7/_media_/media/image/24/85/d9/_74490_FrontImage_47024_600x600.png",'https://www.cdiscount.com/pdt2/0/1/s/1/300x300/36689001s/rw/puma-baskets-rs-0-sound-blanc-bleu-rouge-mixte.jpg']
const customStyle = {
    card: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        height: "400px",
        content: "",
        clear: "both",
        display: "table",
        
        },
        Content : {
            textAlign: 'center',
        },
        column: {
            float: "left",
            width: "30%",
            padding: "5px",
            
          }   
}

const CardExampleCard = () => {
    return(
     
      <div >
          {data.map((elm,i)=>{
              return(
                  <div key={i} style={customStyle.column} >
              <Image  style={customStyle.card} src={elm} alt="Card image cap"   />
         
              
              
        <Card.Content style={customStyle.Content}>title: ADIDAS
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        </div>
          )})}
     



        {data.map((elm,i)=>{
            return(
            <div key={i} style={customStyle.column} >
         <Image  style={customStyle.card} src={elm} alt="Card image cap"   />

    
    
        <Card.Content style={customStyle.Content}>title: ADIDAS
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
        <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
            Matthew is a musician living in Nashville.
            </Card.Description>
        </Card.Content>
        </div>
    )})}
</div>
    )
}
  



export default CardExampleCard;