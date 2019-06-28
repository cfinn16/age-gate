import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date()
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.years = Array.from(Array(100), (x, index) => index + (this.date.getFullYear() - 100)).reverse()

    this.state = {
      userMonth: 0,
      userYear: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.userYear < this.year - 21) {
      window.confirm("Welcome!")
    } else if (this.state.userYear === this.year - 21 && this.state.userMonth <= this.month) {
      window.confirm("Welcome!")
    } else {
      window.alert("Sorry, you can't visit yet!")
    }
  }

  handleMonthChange = (e) => {
    this.setState({userMonth: parseInt(e.target.value)})
  }

  handleYearChange = (e) => {
    this.setState({userYear: parseInt(e.target.value)})
  }

  render () {
    const options = this.years.map(year => {
      return <option key={year} value={year}>{year}</option>
    })

    return (
      <div className="App">
        <div className="App-container">
          <h3>Welcome to</h3>
          <h1>OTHER HALF</h1>
          <p>Are you 21 or older?</p>
          <form onSubmit={e => this.handleSubmit(e)}>
            <select value={this.state.userMonth} onChange={e => this.handleMonthChange(e)}>
              <option value={0}>January</option>
              <option value={1}>February</option>
              <option value={2}>March</option>
              <option value={3}>April</option>
              <option value={4}>May</option>
              <option value={5}>June</option>
              <option value={6}>July</option>
              <option value={7}>August</option>
              <option value={8}>Spetember</option>
              <option value={9}>October</option>
              <option value={10}>November</option>
              <option value={11}>December</option>
            </select>
            <select value={this.state.userYear} onChange={e => this.handleYearChange(e)}>
              {options}
            </select><br/>
            <input type="submit" value="Enter" />
          </form>
          <p>I am not of legal drinking age</p>
        </div>
      </div>
    )
  };
}

export default App;
