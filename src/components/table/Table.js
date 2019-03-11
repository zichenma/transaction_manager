import './Table.css';
import React from 'react';
import Items from '../items/Items';



class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedData : [],
      importedData : []
    };
 }

 componentDidMount () {
  this.setState({searchedData : this.props.searchedData});
  this.setState({importedData : this.props.importedData});
 }

  render() {
    if (this.state.importedData.length === 0) {
        return null;
    }
    const  items = this.props.importedData.map(item => {
      return  <Items key={item.id}  
              date={item.date}
              beneficiary={item.beneficiary}
              des={item.des}
              id={item.id}
              amount={item.amount}
              />
    })
    return (
      <div className="tran-table">
      <table className="table table-bordered">{items}</table>
      </div>
    )
  }

}

export default Table;