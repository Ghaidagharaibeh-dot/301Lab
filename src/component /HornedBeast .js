import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Model from './Model';
import Button from 'react-bootstrap/Button'


class HornedBeast  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            numOfclick:0,
            show:false,
            description:'',
            img:'',
            title:'',
            

        }


    };
 
    countNumOfclick = () => {
        this.setState({
            numOfclick:this.state.numOfclick + 1
        })
    };

    handleopen=()=>{
      this.setState({
        show:true
        

      })
    }
  
    handleClose=()=>{
      this.setState({
        show:false


      })
    }
  
    render() {
        return (
        
<div>
            

 
        <Col>

 <Card  style={{ width: '13rem'  }} style={{color:'white'}} style={{height:'27rem'}} style={{ background: 'black'}}   onClick={this.handleopen}>
 <Card.Title>{this.props.title}</Card.Title>

        <Card.Body onClick={this.countNumOfclick} >
        <Card.Img variant="top" src= {this.props.imgUrl}  style={{ height: '18rem'  }} name="img" />
          <Card.Text>
          {this.props.description}
          </Card.Text>
          <Card.Text>
            
        <p>
        Number of click : 💖{this.state.numOfclick}
        </p>
      </Card.Text>
      
        </Card.Body>
        
      </Card>
  </Col> 
  
<Model

show={this.state.show}
handleClose={this.handleClose}
handleopen={this.handleopen}
description= {this.props.description}
img={this.props.imgUrl}
title={this.props.title}
numOfclick={this.state.numOfclick}


  
/>




        </div> 

        )
            }
}

export default HornedBeast  ;
 