import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './App.css';

class App extends React.Component {

  state = {
    valid: null,
  }

  validate = (value) => {
    this.setState({valid:value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.valid === null) {
      return( alert('preencha a captcha'));
    }
    alert('dados enviados');
  }
  render(){
    return (
      <div className="App">
        <form  onSubmit={this.onSubmit}>
          <label>
            <input type="text"/>
            <button type="submit">enviar</button>
          </label>
  
          <ReCAPTCHA 
            sitekey="6LcHw-MUAAAAAEEz3oWreP8jpU4p3AHWcQvG4Un2" 
            onChange={this.validate} 
          />
  
        </form>
      </div>
    );
  }

  
}

export default App;
