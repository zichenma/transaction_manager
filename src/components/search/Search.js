import './Search.css';
import React from 'react';


class Search extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      term: '',
      importedData : []
    };
 }

 componentDidMount () {
  this.setState({importedData : this.props.importedData});
 }

 onFormSubmit = (event) => {
    event.preventDefault();
    let importedData = this.state.importedData;
    let input = this.state.term.toLowerCase();
    let res = importedData.filter(e => {
      return e.id.toString().includes(this.state.term) 
      || e.date.includes(input)
      || e.owner.toLowerCase().includes(input)
      || e.city.toLowerCase().includes(input)
      || e.state.toLowerCase().includes(input)
      || e.beneficiary.toLowerCase().includes(input)
      || e.des.toLowerCase().includes(input)
      || e.amount.toString().includes(input)
      || e.isActivated.toString().toLowerCase().includes(input)
    })
    this.props.onSubmit(res);
  }

  render() {
      return (
      <div className="search">
      <form onSubmit={this.onFormSubmit}>
      <input type="text" value={this.state.term} 
      onChange={e => this.setState({term : e.target.value})}
      placeholder="Press Enter to search"
       />
      </form>
      </div>
      )
  }
}

export default Search;