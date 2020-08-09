import React, {Component} from 'react';
import Registration from './Registration'
import Home from './Home'
import '../styles/index.css';
import '../styles/table.css';

class App extends Component{
  state = {
    activeForm: 'home',
  };

  render(){
    let Form = this.state.activeForm === 'registration' ? Registration : Home;
    return(
      <div className="App">
            <header className="App-header">
              <div className="table menu-table" >
                <div className="row">
                <div className="cell menu-cell" onClick={this.displayHome}>
                    <a>Home</a>
                  </div>
                  <div className="cell menu-cell" onClick={this.displayRegistration}>
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
              <Form/>
            </div>
      </div>
    );
  }

  displayRegistration = () => {
    this.setState({activeForm: 'registration'})
  }

  displayHome = () => {
    this.setState({activeForm: 'home'})
  }

}

export default App;
