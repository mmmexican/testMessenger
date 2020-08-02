import React from 'react';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table menu-table" >
          <div className="row">
            <div className="cell menu-cell">
              <a>Регистрация</a>
            </div>
            <div className="cell menu-cell">
                <a> Войти</a>
            </div>
            <div className="cell menu-cell">
                <a> Об авторах</a>
            </div>
          </div>
        </div>
      </header>
      <div className="table app-content ">
hello world
      </div>
    </div>
  );
}

export default App;
