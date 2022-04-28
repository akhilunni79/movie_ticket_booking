import React from "react";
import "./App.css";

class SelectSeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverMessage: ""
    };
    this.seatHover = this.seatHover.bind(this);
    this.returnClassName = this.returnClassName.bind(this);
  }
  returnClassName(index, element) {
    if (this.props.seatClass === "silver") {
      return index >= 0 && index < 75
        ? this.props.booked.showTime === "3PM"
          ? this.props.reservedSeats_3PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1 "
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btnSilver m-1"
          : this.props.booked.showTime === "6PM"
          ? this.props.reservedSeats_6PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btnSilver m-1"
          : this.props.booked.showTime === "9PM"
          ? this.props.reservedSeats_9PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btnSilver m-1"
          : "noshow m-1"
        : this.props.booked.showTime === "3PM"
        ? this.props.reservedSeats_3PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn btn-dark m-1 disabled"
        : this.props.booked.showTime === "6PM"
        ? this.props.reservedSeats_6PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : this.props.booked.showTime === "9PM"
        ? this.props.reservedSeats_9PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : "noshow m-1";
    } else if (this.props.seatClass === "gold") {
      return index >= 75 && index < 120
        ? this.props.booked.showTime === "3PM"
          ? this.props.reservedSeats_3PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btn btn-warning m-1"
          : this.props.booked.showTime === "6PM"
          ? this.props.reservedSeats_6PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btn-warning m-1"
          : this.props.booked.showTime === "9PM"
          ? this.props.reservedSeats_9PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "available btn-warning m-1"
          : "noshow m-1"
        : this.props.booked.showTime === "3PM"
        ? this.props.reservedSeats_3PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn btn-dark m-1 disabled"
        : this.props.booked.showTime === "6PM"
        ? this.props.reservedSeats_6PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : this.props.booked.showTime === "9PM"
        ? this.props.reservedSeats_9PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : "noshow m-1";
    } else if (this.props.seatClass === "platinum") {
      return index >= 120 && index < 150
        ? this.props.booked.showTime === "3PM"
          ? this.props.reservedSeats_3PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "btnPlatinum  m-1"
          : this.props.booked.showTime === "6PM"
          ? this.props.reservedSeats_6PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "btnPlatinum m-1"
          : this.props.booked.showTime === "9PM"
          ? this.props.reservedSeats_9PM.indexOf(element) > -1
            ? "btn btn-danger reserved m-1"
            : this.props.userCredintials.reservedSeats.indexOf(element) > -1
            ? "btn btn-success m-1"
            : "btnPlatinum m-1"
          : "noshow m-1"
        : this.props.booked.showTime === "3PM"
        ? this.props.reservedSeats_3PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn btn-dark m-1 disabled"
        : this.props.booked.showTime === "6PM"
        ? this.props.reservedSeats_6PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : this.props.booked.showTime === "9PM"
        ? this.props.reservedSeats_9PM.indexOf(element) > -1
          ? "btn btn-danger reserved m-1 disabled"
          : this.props.userCredintials.reservedSeats.indexOf(element) > -1
          ? "btn btn-success m-1 disabled"
          : "available btn-dark m-1 disabled"
        : "noshow m-1";
    }
  }
  seatHover(seatNO) {
    if (this.props.booked.showTime === "3PM") {
      this.props._3PM.forEach(item => {
        if (item.reservedSeats.indexOf(seatNO) > -1) {
          this.setState({ hoverMessage: `${item.name}\n${item.email}\n${item.phone_no}` });
        }
      });
    } else if (this.props.booked.showTime === "6PM") {
      this.props._6PM.forEach(item => {
        if (item.reservedSeats.indexOf(seatNO) > -1) {
          this.setState({ hoverMessage: `${item.name}\n${item.email}\n${item.phone_no}` });
        }
      });
    } else if (this.props.booked.showTime === "9PM") {
      this.props._9PM.forEach(item => {
        if (item.reservedSeats.indexOf(seatNO) > -1) {
          this.setState({ hoverMessage: `${item.name}\n${item.email}\n${item.phone_no}` });
        }
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-center">
          <img src="./screen.jpg" width="700px" height="360px" alt="screen_img" />
        </div>
        <div className="MainDiv">
          <div className="row d-flex justify-content-center" style={{ maxWidth: "1100px", minWidth: "1100px" }}>
            {this.props.AllSeats.map((element, index) => {
              return (
                <button
                  key={element}
                  style={{ width: "62px", height: "50px", display: "inline-block" }}
                  title={
                    this.props.booked.showTime === "3PM" && this.props.reservedSeats_3PM.indexOf(element) > -1
                      ? this.state.hoverMessage
                      : this.props.booked.showTime === "6PM" && this.props.reservedSeats_6PM.indexOf(element) > -1
                      ? this.state.hoverMessage
                      : this.props.booked.showTime === "9PM" && this.props.reservedSeats_9PM.indexOf(element) > -1
                      ? this.state.hoverMessage
                      : null
                  }
                  onMouseOver={() => this.seatHover(element)}
                  onClick={() => this.props.changeBtnColor(element)}
                  className={this.returnClassName(index, element)}
                >
                  {element}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginBottom: "3rem" }}>
          <button className="btn btn-danger btn-lg" onClick={event => this.props.setunsetTheatreview(event)}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={this.props.setunsetuserDetailFlag} style={{ marginLeft: "38px" }}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default SelectSeat;
