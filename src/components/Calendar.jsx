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

  renderHeader(){
    const dateFormat = "MMMM YYYY"

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            arrow_back
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            arrow_forward
          </div>
        </div>
      </div>
    )
  }

  renderDays() {
    const dateFormat = "dddd"
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)

    for(let i=0; i < 7; i++){
      days.push(
        <div className="col col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div> 
      )
    }

    return <div className="days row">{days}</div>
  }

  renderCells(){
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    
    const dateFormat = "D";
    const rows = [];
    
    let days = [];
    let day = startDate;
    let formattedDate = "";
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++){
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className={`col cell ${
            !dateFns.isSameMonth(day, monthStart)
            ? "disabled"
            : dateFns.isSameDay(day, selectedDate) ? "selected" : "" }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        )
        day = dateFns.addDays(day, 1)
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = []
      // debugger
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    })
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