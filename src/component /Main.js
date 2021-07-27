import React from 'react';
import HornedBeast  from './HornedBeast '
// import 'bootstrap/dist/css/bootstrap.min.css';
import  Data from './Data.json';
import Row from 'react-bootstrap/Row'




class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
        data: Data
  
    }
}



// clickOnCardFun =() =>{
//     this.setState({
        

//     })
//   }

    render(){

        // console.log(this.state)

        return(
            <>

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
    

            </>
                    
        )


    
  
    }
}


export default Main;