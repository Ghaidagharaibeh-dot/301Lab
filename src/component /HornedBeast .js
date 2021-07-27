import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class HornedBeast  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            numOfclick:0
        }


    };
 
    countNumOfclick = () => {
        this.setState({
            numOfclick:this.state.numOfclick + 1
        })
    };

    openModal = () => {
        this.setState({
          openModal: true
        })
    
    };
    closeModel = () => {
        this.setState(
            { openModal: false }
        )
    }; 
     
    
  
    render() {
        return (
        
<div>
            

 
        <Col>
 <Card style={{ width: '24rem'  }} style={{height:'27rem'}} style={{ background: 'black'}}  onClick={this.countNumOfclick} >
        <Card.Img variant="top" src= {this.props.imgUrl}  style={{ height: '18rem'  }}  />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>0
          {this.props.description}
          </Card.Text>
          <Card.Text>
      Number of click : 💖 onClick={this.countNumOfclick}
        {this.state.numOfclick}
      </Card.Text>
        </Card.Body>
        
      </Card>
  </Col> 
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{this.props.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
        
          {this.props.description}
          
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">{this.props.openModal}</Button>
    <Button variant="primary">{this.props.closeModel}</Button>
  </Modal.Footer>
</Modal.Dialog>
{/* <Button variant="primary" onClick={openModal}>
{this.props.openModal}
</Button>

<Modal
        show={openModal}
        onHide={this.closeModel}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.props.description}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModel}>
            clo
          </Button>
          
        </Modal.Footer>
      </Modal> */}


        </div> 

        )
            }
}

export default HornedBeast  ;
 