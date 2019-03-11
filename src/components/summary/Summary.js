import './Summary.css';
import React from 'react';



class Summary extends React.Component {

  state = {
    totalValue: 400000.00,
    valueUsed: 0,
    valueRemaining: 0
  }

  constructor(props) {
    super(props);
 }

  getValueUsed = (obj) => {
    let sum = 0;
    obj.map(e => {
      sum = sum + e['amount']
    });
    this.setState({valueUsed: sum});
  }

  getValueRemaining = (total, used) => {
      return total + used;
  }

  componentDidMount () {
    this.getValueUsed(this.props.importedData, 'amount');
  }

  render() {
      return (
      <div className="summary">
        <h3>Perk Usage Summary</h3>
        <table className="table table-bordered">
          <thead>
              <tr>
                <th>Perk Issued</th>
                <th>Total Value/Units</th>
                <th>Value Used</th>
                <th>Remaining Value</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.importedData.length}</td>
              <td>{this.state.totalValue}</td>
              <td>{this.state.valueUsed}</td>
              <td>{`$${this.getValueRemaining(this.state.totalValue,this.state.valueUsed)}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
  }

}

export default Summary;