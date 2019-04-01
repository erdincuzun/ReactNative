import React, { Component } from 'react';
import propTypes from 'prop-types';

class App01 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React!
      </h1>
    );
  }
}

class App02 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React 2!
      </h1>
    );
  }
}

class App03 extends Component {
  render() { return (
  <div className="test">
    <App02 />
    <App01 />
  </div>
  );
  }
}

function MerhabaFunc(props) {
  return <h1>Merhaba, {props.ad} {props.soyad}</h1>;
}

const element = <MerhabaFunc ad="Erdinç" soyad="Uzun" />;

class App04 extends Component {
  render() { return (
    element
  );
  }
}
  
class App05 extends Component {
  render() { return (
    <h1 style={{
      backgroundColor: this.props.renk ? 'red' : 'white',
      fontSize: this.props.boyut + 'px'
    }}>Merhaba2, {this.props.ad} {this.props.soyad}</h1>
  );
  }
}

App05.propTypes = { 
  ad: propTypes.string.isRequired,
  soyad: propTypes.string,
  renk: propTypes.bool,
  fontSize: propTypes.number
};

App05.defaultProps = { 
  ad: "Erdinç",
  soyad: "Uzun",
  renk: true,
  fontSize: 20
};


class App06 extends Component {
  render() { return (
    <div style={{
      backgroundColor: this.props.renk ? 'red' : 'white',
      fontSize: this.props.boyut + 'px'
    }}>Merhaba2, {this.props.ad} {this.props.soyad}
     <div className="test">{this.props.children}</div>
    </div>
  );
  }
}

App06.propTypes = { 
  ad: propTypes.string.isRequired,
  soyad: propTypes.string,
  renk: propTypes.bool,
  fontSize: propTypes.number,
  children: propTypes.node.isRequired
};

class App07 extends Component {
  render() { return (
    <App06 ad= "Erdinç" soyad= "Uzun" renk={false} fontSize={30}>
    <p>Deneme</p>
    </App06>
  );
  }
}

class App08 extends Component {
  handleClick() {
    console.log('Tıklandı...');
  }

  render() { return (
    <button onClick={this.handleClick}>
        Tıkla
    </button>
  );
  }
}

class App09 extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    //Bu bağlama(binding), `this`'in callback çalışmasını sağlamak için gereklidir.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class App10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), cnt: 10};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      cnt: this.state.cnt - 1
    });
    if (this.state.cnt === 0)
    this.componentWillUnmount()
  }

  render() {
    return (
      <div>
        <h1>Bir bileşenin yaşam döngüsü!</h1>
        <h2>Saat: {this.state.date.toLocaleTimeString()}</h2>
        <h3>Geri sayım: {this.state.cnt}</h3>
      </div>
    );
  }
}

export {App01, App02, App03, App04, App05, App06, App07, App08, App09, App10} 
export default App10;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;