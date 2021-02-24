import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li key={this.props.id}>{this.props.name}</li><button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </div>
    );
  }
};


export default Band;
