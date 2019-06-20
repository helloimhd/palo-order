import React from 'react';
import {withRouter} from 'react-router-dom';

// display input details - get state from order
class SummaryOrder extends React.Component {
    render() {
        console.log(this.props.location.state)
        return (
            <div>
kdaljad
            </div>
        )
    }
} // end of summary order

export default withRouter(SummaryOrder);