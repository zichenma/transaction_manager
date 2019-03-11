import './Filter.css';
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import DatePicker from "react-datepicker";




class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      importedData : [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.setState({importedData : this.props.importedData});
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
      //console.log(this.state.importedData);
      return (
      <div className="filter">
      <div>Start: </div>
      <DatePicker
        selected={this.state.startDate}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeStart}
      />
      <div>End: </div>
      <DatePicker
        selected={this.state.endDate}
        selectsEnd
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeEnd}
      />
      </div>
      )
  }

}

export default Filter;