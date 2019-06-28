import React from 'react';
import AgeForm from './AgeForm.js'
import Welcome from './Welcome.js'
import Failure from './Failure.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date()
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.years = Array.from(Array(100), (x, index) => index + (this.date.getFullYear() - 100)).reverse()

    this.state = {
      display: "form",
      userMonth: 0,
      userYear: "",
      isChecked: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.userYear < this.year - 21) {
      this.setState({display: "welcome"})
    } else if (this.state.userYear === this.year - 21 && this.state.userMonth <= this.month) {
      this.setState({display: "welcome"})
    } else {
      this.setState({display: "failure"})
    }
  }

  handleMonthChange = (e) => {
    this.setState({userMonth: parseInt(e.target.value)})
  }

  handleYearChange = (e) => {
    this.setState({userYear: parseInt(e.target.value)})
  }

  toggleCheck = () => {
    this.setState({isChecked: !this.state.isChecked})
  }

  render () {
    const options = this.years.map(year => {
      return <option key={year} value={year}>{year}</option>
    })
    const display = this.state.display

    if (display === "form") {
      return (
        <AgeForm
          options={options}
          userMonth={this.state.userMonth}
          userYear={this.state.userYear}
          isChecked={this.state.isChecked}
          handleSubmit={this.handleSubmit}
          handleMonthChange={this.handleMonthChange}
          handleYearChange={this.handleYearChange}
          toggleCheck={this.toggleCheck}
          />
      )
    } else if (display === "welcome") {
      return <Welcome />
    } else if (display === "failure") {
      return <Failure />
    }
  };
}

export default App;
