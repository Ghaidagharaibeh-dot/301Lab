import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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
            
   <CardGroup>
  <Card  border="primary" style={{ width: '10rem' }} onClick={this.countNumOfclick} >
    <Card.Img variant="top" src= {this.props.imges}   />
    <Card.Body>
      <Card.Title>{this.props.thetitle}</Card.Title>
      <Card.Text>
          
        {this.props.description}
        

      </Card.Text>
      <Card.Text>
      Number of click :
        {this.state.numOfclick}
      </Card.Text>


    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated </small>
    </Card.Footer>
  </Card > 

//    {/* <Card border="primary" style={{ width: '10rem' }}  onClick={this.countNumOfclick} >
//     <Card.Img variant="top" src={this.props.imges2} />
//     <Card.Body>
//       <Card.Title>{this.props.thetitle2}</Card.Title>
//       <Card.Text>
//         {this.props.description2}
//         {this.state.numOfclick}

//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card border="primary" style={{ width: '10rem' }}  onClick={this.countNumOfclick}>
//     <Card.Img variant="top" src={this.props.imges3} />
//     <Card.Body>
//       <Card.Title>{this.props.thetitle3}</Card.Title>
//       <Card.Text>
//         {this.props.description}
//         {this.state.numOfclick}

//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>  */}
  
  </CardGroup> 
           
 </> 

        )
    }
}

export default HornedBeast  ;
 