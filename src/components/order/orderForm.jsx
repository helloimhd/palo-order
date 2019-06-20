import React from 'react';
//import styles from './style.css'

// array of obj to do map - for the value of no. of copies
const noOfCopies = [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10}
]

// number of select tag depends on number of photos? for now just hardcode
const noOfSelect = [
    {ref: 1, name: "photoOne"},
    {ref: 2, name: "photoTwo"},
    {ref: 3, name: "photoThree"},
    {ref: 4, name: "photoFour"},
    {ref: 5, name: "photoFive"},
]

// display the form and let order component handle the change and submit
class OrderForm extends React.Component {

    render() {
        // 10 times
        let optionTag = noOfCopies.map(obj => {
            return <option>{obj.value}</option>
        })

        // 5 times
        let selectTag = noOfSelect.map(obj => {
            return <div className="form-group">
                    <label>Number of copies for #{obj.ref}</label>
                    <select name={obj.name} onChange={this.props.handleChange} className="form-control" required>
                        {optionTag}
                    </select>
                    </div>
        })
        return (
            <div className="formContainer">
                <h1>Your Order: </h1>

                <form autoComplete="off" onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            className="form-control"
                            name="lastName"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            className="form-control"
                            name="firstName"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            className="form-control"
                            type="tel"
                            name="phone"
                            // pattern="[8-9]{1}[0-9]{7}"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Country: </label>
                        <select name="country" onChange={this.props.handleChange} className="form-control">
                            <option value="SG">SG</option>
                            <option value="HK">HK</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Postal Address:</label>
                        <input
                            className="form-control"
                            name="address"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    {selectTag}

                    <div className="buttonContainer">
                        <button type="submit" className="cartButton">Add to cart</button>
                    </div>
                </form>
            </div>
        )
    }
}  // end of order form

export default OrderForm;