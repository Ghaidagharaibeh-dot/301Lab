import React from 'react';

class HornedBeast  extends React.Component {
    render() {
        return (
            <>
            <h2 className='thetitlename'> {this.props.thetitle} </h2>
            <img src={this.props.imges}/>
            <p className='thedescription'> {this.props.description} </p>


            </>

        )
    }
}

export default HornedBeast  ;
 