import React from 'react';
import './App.css';

function AgeForm(props) {
  return(
    <div className="App">
      <div className="App-container">
        <h3>Welcome to</h3>
        <h1>OTHER HALF</h1>
        <p>Are you 21 or older?</p>
        <form onSubmit={e => props.handleSubmit(e)}>
          <select value={props.userMonth} onChange={e => props.handleMonthChange(e)}>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <select value={props.userYear} onChange={e => props.handleYearChange(e)}>
            {props.options}
          </select><br/>
          <label>
            Remember Me
            <input
              name="rememberMe"
              type="checkbox"
              value={props.isChecked}
              onChange={props.toggleCheck} />
          </label><br/>
          <input type="submit" value="Enter" />
        </form>
        <p>I am not of legal drinking age</p>
      </div>
    </div>
  )
}

export default AgeForm;
