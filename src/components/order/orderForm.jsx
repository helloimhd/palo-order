import React from 'react';

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

const

// display the form and let order component handle the change and submit
class OrderForm extends React.Component {
    render() {
        return (
            <div>
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
                            pattern="[8-9]{1}[0-9]{7}"
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
                        <label>Postal Address:</label>
                        <input
                            className="form-control"
                            name="address"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Add to cart</button>
                </form>
            </div>
        )
    }
}  // end of order form

export default OrderForm;