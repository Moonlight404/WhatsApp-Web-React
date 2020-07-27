import React from 'react';
import './style.css';
import chat from "../Chating";

class Contact extends React.Component {
  handleClick() {
    this.setState.chat(state => ({
      chating: true
    }));
  }
  render(props){
    return <div className="contact"
        onClick={() => { this.handleClick() }}
        >
        <div className="avatar">
          <img src="https://jornalggn.com.br/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"/>
        </div>
        <span className="name">
           { this.props.name }
        </span>
    </div>
  };
}

export default Contact;
