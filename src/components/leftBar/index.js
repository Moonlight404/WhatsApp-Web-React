import React from 'react';
import './style.css';
import Contact from '../Contact'

import Contatos from '../../contatos.json'

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePhoto: false
    }
  }
  handleClick() {
    this.setState(state => ({
      changePhoto: !state.changePhoto
    }));
  }
  render(){
    return <div>
      <div className="leftBar">
        <div className={"changeAvatar "+ (this.state.changePhoto ? 'ativo' : 'hidden')}>
          <span className="back" onClick={() => { this.handleClick() }}>
          <i className="fas fa-chevron-left"></i>     Voltar</span>
          <div className="avatar">
            <img src="https://jornalggn.com.br/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"/>
          </div>
        </div>
        <div className="header">
          <div className="avatar" onClick={() => { this.handleClick() }}>
            <img src="https://jornalggn.com.br/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"/>
          </div>
          <div className="name">
            
          </div>
        </div>
        <div className="contatos">
         {Contatos.map((contato, index) => (
        <li key={index}>
          <Contact
          name={contato.name} avatar={contato.avatar}></Contact>
        </li>
        ))}
        </div>
      </div>
    </div>
  };
}

export default LeftBar;
