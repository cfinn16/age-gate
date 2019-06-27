import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date()
    this.month = this.date.getMonth()
    this.years = Array.from(Array(100), (x, index) => index + (this.date.getFullYear() - 100)).reverse()

    this.state = {
      userMonth: "",
      userYear: ""
    };
  }

  handleMonthChange = (e) => {
    this.setState({userMonth: e.target.value})
  }

  handleYearChange = (e) => {
    this.setState({userYear: e.target.value})
  }

  render () {
    const options = this.years.map(year => {
      return <option value={year}>{year}</option>
    })

    return (
      <div className="App">
        <div className="App-container">
          <h3>Welcome to</h3>
          <h1>OTHER HALF</h1>
          <p>Are you 21 or older?</p>
          <form>
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
            </select>
          </form>
          <button>Enter</button>
          <p>I am not of legal drinking age</p>
        </div>
      </div>
    )
  };
}

export default App;
