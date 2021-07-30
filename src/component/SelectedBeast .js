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
            <img src={this.props.src} alt={this.props.title} style={{ height: '18rem' ,width:'13rem'  }}/>

           <p>{this.props.description}</p>
        <p>
            Number of click :💖{this.props.countNumOfclick}
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