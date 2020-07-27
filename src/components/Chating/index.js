import React from 'react';
import './index.css';
import Welcome from './Welcome';

class Chating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chating: false
    }
  }
  render(){
    return <div className="chating">
        { !this.state.chating && <Welcome></Welcome> }
    </div>
  };
}

export default Chating;
