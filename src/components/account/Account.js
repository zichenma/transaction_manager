import './Account.css';
import React from 'react';
import Summary from '../summary/Summary'
import Filter from '../filter/Filter';
import Search from '../search/Search';
import Table from '../table/Table';



class Account extends React.Component {

  state = {
    importedData : [],
    isActivated : null,
    exportedData : []
  }


  getActivatedText = isActivated => {
    let text = '';
    if (this.props.transData[0].isActivated) {
      text = isActivated === true ? 'Does Not Expire' : 'Expire';
    }
    return text;
  }

  componentDidMount () {
    this.setState({importedData : this.props.transData});
    this.setState({isActivated : this.props.transData[0].isActivated});
  }

  onSearchSubmit = (expData) => {
    console.log(expData);
    if (expData.length > 0) {
      this.setState({exportedData : expData});
    }
  }

  render() {
      if (this.state.importedData.length == 0) {
        return null;
      }
      return (
      <div className="account panel panel-defaul">
        <div className="line"></div>
        <div className="panel-heading">
          <h3 style={{float:'left', display:'inline'}}>{`${this.props.name} Detail`}</h3>
          <h3 style={{float:'right', display:'inline'}}>{this.getActivatedText(this.state.isActivated)}</h3>
        </div>
        <div className="panel-body"></div>
        <div className="panel-footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam, saepe ut delectus assumenda vitae mollitia similique ipsum magnam quos aliquid maxime, harum soluta. Repellat deserunt illo magni, totam porro quos eos qui dignissimos corporis veritatis recusandae placeat similique! Vitae delectus consequuntur aut deserunt? Aliquam labore obcaecati quaerat facere tenetur.</div>
        <div className="line"></div>
        <div className="panel-heading">
          <Summary importedData={this.state.importedData}/>
        </div>
        <div>
        <h3 style={{ marginTop: '150px'}}>Recent transactions</h3>
        </div>
        <div className="search-filter">
          <Filter importedData={this.state.importedData}/>
          <Search importedData={this.state.importedData} onSubmit={this.onSearchSubmit} />
        </div>
        <Table searchedData={this.state.exportedData} importedData={this.state.importedData}/>
      </div>
      )
  }
}

export default Account;