import React from 'react';
import './style.css';
import chat from "../Chating";

class Contact extends React.Component {
  handleClick() {
    
  }
  render(props){
    return <div className="contact"
        onClick={() => { this.handleClick() }}
        >
        <div className="avatar">
          <img src={this.props.avatar}/>
        </div>
        <span className="name">
           { this.props.name }
        </span>
    </div>
  };
}

export default Contact;
