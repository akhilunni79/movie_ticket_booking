import React from "react";

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.nameInput.focus();
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3>Fill the Details</h3>
          <form onSubmit={event => this.props.unsetAllFlags(event)}>
            <div className="row ">
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <label>Name</label>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input
                  type="text"
                  ref={input => {
                    this.nameInput = input;
                  }}
                  value={this.props.userCredintials && this.props.userCredintials.name}
                  onChange={this.props.handleChange}
                  name="name"
                  placeholder="Type your Name"
                  required
                />
              </div>
            </div>
            <div className="row py-2 ">
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <label>Phone no</label>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input type="text" value={this.props.userCredintials && this.props.userCredintials.phone_no} onChange={this.props.handleChange} name="phone_no" maxLength="10" placeholder="XXXXXXXXXX" required />
              </div>
            </div>
            <div className="row py2">
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <label>Email</label>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input type="email" value={this.props.userCredintials && this.props.userCredintials.email} onChange={this.props.handleChange} name="email" placeholder="example@gmail.com" required />
              </div>
            </div>
            <div className="row  py-2">
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <label>Seat Selected</label>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <input type="text" value={this.props.userCredintials.reservedSeats} disabled />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <button className="btn btn-danger btn-lg" onClick={this.props.FalseDetailFlag} style={{ marginLeft: "38px" }}>
                Cancel
              </button>
              <button type="submit" className="btn btn-success btn-lg ml-3 btnBook">
                Book
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BookingDetails;
