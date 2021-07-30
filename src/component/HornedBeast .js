import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import SelectedBeast  from './SelectedBeast ';
import Button from 'react-bootstrap/Button'


class HornedBeast  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            numOfclick:0,
           
            

        }


    };
 
    countNumOfclick = () => {
        this.setState({
            numOfclick:this.state.numOfclick + 1
        })
    };
getselectedData=()=>{

    this.props.handleopen();
    this.props.getTheData(this.props.title,this.props.imgUrl,this.props.description,this.countNumOfclick());
 
}
   
    render() {
        return (
        
<div>
            

 
        <Col>

 <Card  style={{ width: '13rem'  }}   onClick={this.getselectedData}>
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
  


        </div>
        )
            }
}

export default HornedBeast  ;
 