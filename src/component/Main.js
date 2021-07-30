import React from 'react';
import HornedBeast  from './HornedBeast '
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
        data: this.props.data,
  
    }

}
 render(){


        return(
            <>
<Row xs={1} md={3} className="g-4">


{

this.props.data.map(item=>{
                     return(
                        
                        <HornedBeast
        
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                            handleopen={this.props.handleopen}
                            getTheData={this.props.getTheData}
                            numOfclick={this.props.numOfclick}

        
                        />
                    )
                     })
                    }
                </Row>
                     </>
                    
        )


    
  
    }
}


export default Main;