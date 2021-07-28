import React from 'react';
import HornedBeast  from './HornedBeast '
import 'bootstrap/dist/css/bootstrap.min.css';
import  Data from './Data.json';
import Row from 'react-bootstrap/Row'



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
        data: Data,
  
    }

}

// formFun=(event)=>{
//     event.preventDefault();
//     this.setState({

//         valu1:event.target.name.value,
//         valu2:event.target.name.value,
//         valu3:event.target.name.value,
//         valu4:event.target.name.value,




//     })
// }
    



 render(){


        return(
            <>


{/* <Form.Select aria-label="Default select example">

                     <option name='valu1' value="1">One</option>
                        <option name='valu2' value="2">Two</option>
                        <option name='valu3' value="3">Three</option>
                        <option name='valu4' value="100">Wawwwww</option> 
</Form.Select> */}

 





<Row xs={1} md={3} className="g-4">


{

this.state.data.map(item=>{
                     return(
                        
                        <HornedBeast
        
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
        
                        />
                    )
                     })
                    }
                </Row>
         
    
                {/* <Theform/> */}
            </>
                    
        )


    
  
    }
}


export default Main;