import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


class HornedBeast  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            numOfclick:0
        }


    }
    countNumOfclick = () => {
        this.setState({
            numOfclick:this.state.numOfclick + 1
        })
    }
    render() {
        return (
        
<>
            

    <Col>
 <Card style={{ width: '24rem'  }} style={{ height: '27rem'  }} style={{ background: 'black'  }}  onClick={this.countNumOfclick}>
        <Card.Img variant="top" src= {this.props.imgUrl}  style={{ height: '18rem'  }}  />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description}
          </Card.Text>
          <Card.Text>
      Number of click :
        {this.state.numOfclick}
      </Card.Text>
        </Card.Body>
      </Card>



  </Col>
  
           
 </> 

        )
    }
}

export default HornedBeast  ;
 