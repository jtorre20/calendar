import React, { Component } from "react";
import dateFns from "date-fns";

class Calendar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date()
    }

  }

  renderHeader = () => {
    const dateFormat = "MMMM YYYY"

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            Previous Month
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            Next Month
          </div>
        </div>
      </div>
    )
  }

  renderDays = () => {
    const dateFormat = "dddd"
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)

    for(let i=0; i < 7; i++){
      days.push(
        <div className="col col-center">
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div> 
      )
    }

    return <div className="days row">{days}</div>
  }

  renderCells = () => {

  }

  onDateClick = day => {

  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }


  render() {
    return (
      <div className="calendar">
        {/* <div>Header</div> */}
        {this.renderHeader()}
        {/* <div>Days</div> */}
        {this.renderDays()}
        {/* <div>Cells</div> */}
        {this.renderCells()}
      </div>
    )
  }
    
}

export default Calendar