import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
class Model extends react.Component{
    render(){
        return(
            <>


<Modal show={this.props.show} onHide={this.props.handleClose} 
 >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={this.props.countNumOfclick}>
            <img src={this.props.img} alt={this.props.title} style={{ width: '15rem'  }} style={{ height: '18rem'  }}/>

           <p>{this.props.description}</p>
        <p>
            Number of click :💖{this.props.numOfclick}
            </p>
  </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>
            Close
          </Button>
         </Modal.Footer>
      </Modal>


            </>
        )
    }
}

export default Model;