import React from 'react';
import {withRouter} from 'react-router-dom';
//import styles from './style.css'

// display input details - get state from order
class SummaryOrder extends React.Component {
    render() {
        console.log(this.props.location.state)
        const details = this.props.location.state;
        return (
            <div className="formContainer">
                <h1>Summary of your Order: </h1>
                <div className="indvDetailContainer">
                    <label>Last Name:</label>
                    <p>{details.lastName}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>First Name:</label>
                    <p>{details.firstName}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Phone Number:</label>
                    <p>{details.phone}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Country:</label>
                    <p>{details.country}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Email:</label>
                    <p>{details.email}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Last Name:</label>
                    <p>{details.lastName}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Postal Address:</label>
                    <p>{details.address}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Number of copies for #1</label>
                    <p>{details.photoOne}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Number of copies for #2:</label>
                    <p>{details.photoTwo}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Number of copies for #3:</label>
                    <p>{details.photoThree}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Number of copies for #4:</label>
                    <p>{details.photoFour}</p>
                </div>

                <div className="indvDetailContainer">
                    <label>Number of copies for #5:</label>
                    <p>{details.photoFive}</p>
                </div>
            </div>
        )
    }
} // end of summary order

export default withRouter(SummaryOrder);