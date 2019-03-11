import './App.css';
import React from 'react';
import Profile from '../profile/Profile';
import Account from '../account/Account';
import service from '../../service';


class App extends React.Component {

  state = {transactions : []};

  getTransactions = async () => {
    const response = await service.get('/transactions');
    this.setState({ transactions: response.data });
  }

  componentDidMount () {
    this.getTransactions();
  }

  getFirstName () {
    if (this.state.transactions[0]) {
      return this.state.transactions[0]['owner'].split(' ')[0];
    }
  }
  
  render() {
    if (this.state.transactions.length == 0) {
      return null;
    }
    return (
    <div className="app">
      <h1>{`${this.getFirstName()} Detail`}</h1>
      <div className="app-content">
        <Profile />
        <Account name={this.getFirstName()} transData={this.state.transactions}/>
      </div>
    </div>
    )
  }
}

export default App;