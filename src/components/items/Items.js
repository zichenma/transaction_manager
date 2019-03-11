import './Items.css';
import React from 'react';

class Items extends React.Component {

  constructor(props) {
    super(props);
 }

  render() {
      return (
      <tbody className="tran-Items">
            <tr>
              <td>{this.props.date}</td>
              <td>{this.props.beneficiary}<br/>
                  Des: {this.props.des} No.{this.props.id}
              </td>
              <td>{this.props.amount}</td>
            </tr>
      </tbody>
      )
  }

}

export default Items;