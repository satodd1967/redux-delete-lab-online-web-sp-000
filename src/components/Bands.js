import React, { Component } from 'react';
import Band from './Band';
import { connect } from 'react-redux'

class Bands extends Component {

    render() {
      const bands = this.props.bands.map(band => {
          return <Band key={band.id} id={band.id} name={band.name} delete={this.props.delete} />
      })
        return(
        <div>
        {bands}
        </div>
        );
     }
};

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch({ type: "DELETE_BAND", id })
  })

// export default Bands;
export default connect(null, mapDispatchToProps)(Bands)