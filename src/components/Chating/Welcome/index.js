import React from 'react';
import './style.css';

import WelcomeImage from '../../../intro.jpg';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePhoto: false
    }
  }
  render(){
    return <div className="chating">
        <div className="center">
            <div className="svg-welcome">
                <img src={WelcomeImage}/>
            </div>
        </div>
    </div>
  };
}

export default Welcome;
