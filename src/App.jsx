import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Data from './component/Data.json';
import SelectedBeast from './component/SelectedBeast ';
import Form from 'react-bootstrap/Form'
import { isValidElement } from "react";



class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        show: false,
                        description: '',
                        src: '',
                        title: '',
                        numOfclick: 0,
                        numerOfHonrs: Data

                }
        };
        handleopen = () => {
                this.setState({
                        show: true


                })
        };

        handleClose = () => {
                this.setState({
                        show: false


                })
        };

        getTheData = (title, src, description, numOfclick) => {
                this.setState({
                        title: title,
                        src: src,
                        description: description,
                        numOfclick: this.props.numOfclick,

                })

        };
        getTheNumberOfHorns = (event) => {
                let theHorns = event.target.value;
                let filteringThaData = Data.filter((item) => {
                        if (item.horns == theHorns) { return true; }
                        if (theHorns === 'all') { return true; }


                })
                this.setState({
                        numerOfHonrs: filteringThaData
                })


        }
        render() {
                return (<>


                        <Header />
                        <Form.Label>Select the number of horns</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={this.getTheNumberOfHorns} >
                                <option value="all">all</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="100">Wawwww</option>

                        </Form.Select>
                        <Main data={this.state.numerOfHonrs}

                                handleopen={this.handleopen}
                                getTheData={this.getTheData}
                        />
                        <SelectedBeast
                                show={this.state.show}
                                handleClose={this.handleClose}
                                description={this.props.description}
                                src={this.state.src}
                                title={this.state.title}
                                numOfclick={this.props.numOfclick}


                        />
                        <Footer />


                </>)



        }
}
export default App;