import React from 'react';
import './style.css';

function App(props) {
  return (
      <div className="contact">
          <div className="avatar">
            <img src="https://jornalggn.com.br/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"/>
          </div>
          <span className="name">
              { props.name }
          </span>
      </div>
  );
}

export default App;