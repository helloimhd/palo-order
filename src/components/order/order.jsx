import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './style.css'
import OrderForm from './orderForm'


// order will handle the change of input and submit from orderform
class Order extends React.Component {
    constructor() {
        super();
        this.state = {
            //pre-selected country if on change then change
            country: "SG",

            // pre selected option
            photoOne: 0,
            photoTwo: 0,
            photoThree: 0,
            photoFour: 0,
            photoFive: 0

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } // end of constructor

    handleChange(e) {
        const name = e.target.name;
        console.log(e.target.value);
        this.setState({
            //name refers to the inputs name
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: "/summaryOrder",
            state: this.state
        })
    }

    render() {
        return (
            <React.Fragment>
                <OrderForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
        )
    }
}  // end of order

export default withRouter(Order);