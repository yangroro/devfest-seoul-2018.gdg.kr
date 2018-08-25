import React from 'react';

export default class Byline extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="byline">{this.props.author}</div>
    )
  }
}