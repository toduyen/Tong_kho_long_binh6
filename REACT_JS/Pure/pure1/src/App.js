import React, { Component } from 'react';
import NotePure from './Components/NotePure';
import Pure from './Components/Pure';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Tuan4'
    }
  }
  changeState = () => {
    this.setState({
      data: 'Tuan2'
    })
  }
  render() { 
    return (
     <>
     <Pure data={this.state.data}/>
     <NotePure data={this.state.data}/>
     <div>
        <button onClick={() => this.changeState()}>Pure</button>
      </div>
     </>
    );
  }
}
 
export default App;