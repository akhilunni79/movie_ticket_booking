import React from "react";
import "./App.css";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "10%" }}>
        <div className="card" style={{ width: "100%", marginBottom: "3rem", border: "1px solid", maxWidth: 600 }}>
          <img src="./bigbrother.jpg" className="card-img-top" alt="Bigbrother_img" style={{ height: "554px" }} />
          <div className="card-body" style={{ marginBottom: "2rem" }}>
            <div className="container">
              {this.props.bookTickects ? (
                this.props.showTimeToggle ? (
                  <React.Fragment>
                    <h5 className="card-title">Select No Of Seats</h5>
                    <div className="row d-flex justify-content-center">
                      <button className={this.props.booked.noOfSeats === 1 ? "btn btn-primary btnDecrementDisable" : "btn btn-primary"} onClick={this.props.decrementNoOfSeats}>
                        -
                      </button>
                      <input type="text" id="txtBoxNoOfSeats" value={this.props.booked && this.props.booked.noOfSeats} min="0" max="9" />

                      <button className={this.props.booked.noOfSeats === 9 ? "btn btn-primary btnDecrementDisable" : "btn btn-primary"} onClick={this.props.incrementNoOfSeats}>
                        +
                      </button>
                    </div>
                    <div>
                      <p disabled="true" style={{ marginTop: 20 }}>
                        <b style={{ color: "red" }}>{this.props.booked.noOfSeats === 9 ? "Maximum 9 Seats Can be Selected" : null}</b>
                      </p>
                      <br />
                      <input type="radio" name="seatClass" id="platinum" onClick={event => this.props.selectSeatClass(event)} className="linkSeatClass" checked={this.props.seatClass === "platinum"} style={{ color: "red" }} />
                      <label for="PlatinumCheckbox" style={{ color: "blue", fontSize: "18px" }}>
                        Platinum
                      </label>
                      <input type="radio" name="seatClass" id="gold" onClick={event => this.props.selectSeatClass(event)} className=" linkSeatClass" checked={this.props.seatClass === "gold"} style={{ color: "red", marginLeft: "30px" }} />
                      <label for="GoldCheckbox" style={{ color: "green", fontSize: "18px" }}>
                        Gold
                      </label>
                      <input type="radio" name="seatClass" id="silver" onClick={event => this.props.selectSeatClass(event)} className="linkSeatClass" checked={this.props.seatClass === "silver"} style={{ color: "red", marginLeft: "30px" }} />
                      <label for="SilverCheckbox" style={{ color: "red", fontSize: "18px" }}>
                        Silver
                      </label>

                      <br />
                      <br />
                      <button className="btn btn-danger " onClick={this.props.unsetShowtimeToggle}>
                        Cancel
                      </button>
                      <button className="btn btn-success ml-4" style={{ paddingRight: "23px", paddingLeft: "23px" }} onClick={this.props.selectSeat}>
                        Ok
                      </button>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5 className="card-title">Show Times</h5>
                    <div className="row">
                      <div className="col-12 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <button name="showTime" className="btn btn-primary btnShowtime" value="3PM" onClick={event => this.props.toggleNOofSeats(event)}>
                          3 PM
                        </button>
                      </div>
                      <div className="col-12 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <button name="showTime" className="btn btn-primary btnShowtime" value="6PM" onClick={event => this.props.toggleNOofSeats(event)}>
                          6 PM
                        </button>
                      </div>
                      <div className="col-12 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <button name="showTime" className="btn btn-primary btnShowtime" value="9PM" onClick={event => this.props.toggleNOofSeats(event)}>
                          9 PM
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-4">
                      <button onClick={this.props.toggleBookTicket} className="btn btn-danger ">
                        Cancel
                      </button>
                    </div>
                  </React.Fragment>
                )
              ) : (
                <a href="#" className="btn btn-primary " onClick={this.props.toggleBookTicket}>
                  Book Tickets
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homescreen;
