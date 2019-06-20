import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
        this.handleOrder = this.handleOrder.bind(this);
    }

    //on click, go to gallery page
    handleOrder() {
        this.props.history.push({
            pathname: "/gallery"
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Order your souvenirs of Phuket</h1>

                <div className="buttonContainer">
                    <button onClick={this.handleOrder}>Order now!</button>
                </div>
            </React.Fragment>

        )
    }
} // end of HOMe

export default withRouter(Home);