import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import  Data from './Data.json';

class TheForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
        datajosn: Data,
    }

}
getData() {
    let dataArr = JSON.parse(JSON.stringify(this.props.datajosn));
    return dataArr;
  }
formFun = (event) => {
    
        event.preventDefault();
};
       render(){
        return(
            <>
  <Form.Select onSubmit={this.formFun} aria-label="Default select example">
  <option {{this.state.datajosn.horns === '1' ? value='one':}}>Open this select menu</option>
  <option value="1">one</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">Wawwwww</option> 

</Form.Select>
            </>
                    
        )
    }
}


// export default TheForm;
