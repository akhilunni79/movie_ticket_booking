import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectSeat from "./Theatreview";
import Homescreen from "./Homescreen";
import BookingDetails from "./BookingDetails";
let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let seatArray = [];
alphabetArray.forEach(alphabet => numberArray.forEach(number => seatArray.push(alphabet + number)));
// console.log("seatArray", seatArray);
alphabetArray.forEach(alphabet => {
  if (alphabet === "H" || alphabet === "I" || alphabet === "J") return "platinum";
  else if (alphabet === "E" || alphabet === "F" || alphabet === "G") return "gold";
  else return "silver";
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTickects: false,
      theatreView: false,
      userdetailFlag: false,
      showTimeToggle: false,
      AllSeats: seatArray,
      reservedSeats_3PM: [],
      reservedSeats_6PM: [],
      reservedSeats_9PM: [],
      seatClass: "silver",

      availableSeats_3PM: seatArray,
      availableSeats_6PM: seatArray,
      availableSeats_9PM: seatArray,
      // globalReserved: { _3PM: [], _6PM: [], _9PM: [] },
      _3PM: [],
      _6PM: [],
      _9PM: [],
      booked: { noOfSeats: 1, showTime: "" },
      // bookedDetails: [{ _3PM: [] }, { _6PM: [] }, { _9PM: [] }],
      userCredintials: { name: "", phone_no: "", email: "", reservedSeats: [] }
    };
    this.toggleBookTicket = this.toggleBookTicket.bind(this);
    this.toggleNOofSeats = this.toggleNOofSeats.bind(this);
    this.incrementNoOfSeats = this.incrementNoOfSeats.bind(this);
    this.decrementNoOfSeats = this.decrementNoOfSeats.bind(this);
    this.selectSeat = this.selectSeat.bind(this);
    this.changeBtnColor = this.changeBtnColor.bind(this);
    this.setunsetuserDetailFlag = this.setunsetuserDetailFlag.bind(this);
    this.setunsetTheatreview = this.setunsetTheatreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.unsetShowtimeToggle = this.unsetShowtimeToggle.bind(this);
    this.selectSeatClass = this.selectSeatClass.bind(this);
    this.FalseDetailFlag = this.FalseDetailFlag.bind(this);
  }
  toggleBookTicket() {
    // console.log("AllSeat", this.state.AllSeats);
    this.setState({
      bookTickects: !this.state.bookTickects
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        userCredintials: { ...this.state.userCredintials, [name]: value }
      },
      () => {
        console.log("userCredintials:", this.state.userCredintials);
      }
    );
  }
  selectSeatClass(event) {
    const seatType = event.target.id;
    this.setState(
      {
        seatClass: seatType
      },
      () => {
        console.log("seatClass:", this.state.seatClass);
      }
    );
  }
  decrementNoOfSeats() {
    if (this.state.booked.noOfSeats !== 1) {
      this.setState(
        {
          booked: { ...this.state.booked, noOfSeats: this.state.booked.noOfSeats - 1 }
        },
        () => {
          console.log("no of seats:", this.state.booked.noOfSeats);
        }
      );
    }
  }
  selectSeat() {
    if (this.state.seatClass === "") {
      alert("Select SeatClass");
    } else if (this.state.booked.noOfSeats === 0) {
      alert("please select at least 1 seat");
    } else {
      this.setState({
        theatreView: !this.state.theatreView
      });
    }
  }
  FalseDetailFlag(event) {
    event.preventDefault();
    this.setState({
      userdetailFlag: !this.state.userdetailFlag,
      userCredintials: { ...this.state.userCredintials, name: "", phone_no: "", email: "" }
    });
  }
  unsetAllFlags(event) {
    event.preventDefault();
    const { name, phone_no, email, reservedSeats } = this.state.userCredintials;
    alert(`Deatils\nName:${name}\nPhone no:${phone_no}\nEmail:${email}\nReserved Seat:${reservedSeats}`);
    if (this.state.booked.showTime === "3PM") {
      let tempArray = [...this.state._3PM];
      tempArray.push(this.state.userCredintials);
      this.setState(
        {
          _3PM: tempArray,
          bookTickects: !this.state.bookTickects,
          showTimeToggle: !this.state.showTimeToggle,
          theatreView: !this.state.theatreView,
          userdetailFlag: !this.state.userdetailFlag,
          booked: { ...this.state.booked, noOfSeats: 1 },
          userCredintials: { name: "", phone_no: "", email: "", reservedSeats: [] }
        },
        () => {
          console.log("_3PM", this.state._3PM);
          let tempReservedArray = [];
          this.state._3PM.map(item => {
            item.reservedSeats.map(element => {
              return tempReservedArray.push(element);
            });
          });
          this.setState(
            {
              reservedSeats_3PM: tempReservedArray
            },
            () => console.log("reservedSeats_3PM", this.state.reservedSeats_3PM)
          );
        }
      );
    } else if (this.state.booked.showTime === "6PM") {
      let tempArray = [...this.state._6PM];
      tempArray.push(this.state.userCredintials);
      this.setState(
        {
          _6PM: tempArray,
          bookTickects: !this.state.bookTickects,
          showTimeToggle: !this.state.showTimeToggle,
          theatreView: !this.state.theatreView,
          userdetailFlag: !this.state.userdetailFlag,
          booked: { ...this.state.booked, noOfSeats: 1 },
          userCredintials: { name: "", phone_no: "", email: "", reservedSeats: [] }
        },
        () => {
          console.log("_6PM", this.state._6PM);
          let tempReservedArray = [];
          this.state._6PM.map(item => {
            item.reservedSeats.map(element => {
              return tempReservedArray.push(element);
            });
          });
          this.setState(
            {
              reservedSeats_6PM: tempReservedArray
            },
            () => console.log("reservedSeats_6PM", this.state.reservedSeats_6PM)
          );
        }
      );
    } else if (this.state.booked.showTime === "9PM") {
      let tempArray = [...this.state._9PM];
      tempArray.push(this.state.userCredintials);
      this.setState(
        {
          _9PM: tempArray,
          bookTickects: !this.state.bookTickects,
          showTimeToggle: !this.state.showTimeToggle,
          theatreView: !this.state.theatreView,
          userdetailFlag: !this.state.userdetailFlag,
          booked: { ...this.state.booked, noOfSeats: 1 },
          userCredintials: { name: "", phone_no: "", email: "", reservedSeats: [] }
        },
        () => {
          console.log("_9PM", this.state._9PM);
          let tempReservedArray = [];
          this.state._9PM.map(item => {
            item.reservedSeats.map(element => {
              return tempReservedArray.push(element);
            });
          });
          this.setState(
            {
              reservedSeats_9PM: tempReservedArray
            },
            () => console.log("reservedSeats_9PM", this.state.reservedSeats_9PM)
          );
        }
      );
    }
  }

  setunsetTheatreview() {
    if (this.state.booked.showTime === "3PM") {
      let tempArray = [...this.state.availableSeats_3PM];

      this.state.userCredintials.reservedSeats.forEach(item => {
        tempArray.push(item);
      });
      this.setState({
        seatClass: this.state.seatClass,
        // booked: { ...this.state.booked, noOfSeats: 0 },
        userCredintials: { ...this.state.userCredintials, name: "", phone_no: "", email: "", reservedSeats: [] },
        theatreView: !this.state.theatreView,
        availableSeats_3PM: tempArray
      });
    } else if (this.state.booked.showTime === "6PM") {
      let tempArray = [...this.state.availableSeats_6PM];

      this.state.userCredintials.reservedSeats.forEach(item => {
        tempArray.push(item);
      });
      this.setState({
        seatClass: this.state.seatClass,

        //   booked: { ...this.state.booked, noOfSeats: 0 },
        userCredintials: { ...this.state.userCredintials, name: "", phone_no: "", email: "", reservedSeats: [] },
        theatreView: !this.state.theatreView,
        availableSeats_6PM: tempArray
      });
    } else if (this.state.booked.showTime === "9PM") {
      let tempArray = [...this.state.availableSeats_9PM];

      this.state.userCredintials.reservedSeats.forEach(item => {
        tempArray.push(item);
      });
      this.setState({
        seatClass: this.state.seatClass,

        //   booked: { ...this.state.booked, noOfSeats: 0 },
        userCredintials: { ...this.state.userCredintials, name: "", phone_no: "", email: "", reservedSeats: [] },
        theatreView: !this.state.theatreView,
        availableSeats_9PM: tempArray
      });
    }
  }
  unsetShowtimeToggle() {
    this.setState({
      showTimeToggle: !this.state.showTimeToggle,
      seatClass: this.state.seatClass,
      booked: { ...this.state.booked, noOfSeats: 1 }
    });
  }
  incrementNoOfSeats() {
    if (this.state.booked.noOfSeats < 9) {
      this.setState(
        {
          booked: { ...this.state.booked, noOfSeats: this.state.booked.noOfSeats + 1 }
        },
        () => {
          console.log("no of seats:", this.state.booked.noOfSeats);
        }
      );
    } else {
      alert("Maximum 9 seats can be selected");
    }
  }
  setunsetuserDetailFlag() {
    this.state.userCredintials.reservedSeats.length === 0
      ? alert("Select at least 1 seat")
      : this.setState({
          userdetailFlag: !this.state.userdetailFlag
        });
  }
  changeBtnColor(seatNo) {
    console.log(seatNo, "seatNo");
    if (this.state.booked.showTime === "3PM") {
      if (this.state.userCredintials.reservedSeats.indexOf(seatNo) > -1) {
        this.setState(
          {
            availableSeats_3PM: this.state.availableSeats_3PM.concat(seatNo),

            userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.reservedSeats_3PM && this.state.userCredintials.reservedSeats.filter(element => element !== seatNo) }
          },
          () => console.log("userCredintials.reservedSeats", this.state.userCredintials.reservedSeats, "availableSeats_3PM", this.state.availableSeats_3PM)
        );
      } else {
        if (this.state.booked.noOfSeats !== this.state.userCredintials.reservedSeats.length) {
          this.setState(
            {
              userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.userCredintials.reservedSeats.concat(seatNo) },
              availableSeats_3PM: this.state.availableSeats_3PM.filter(element => element !== seatNo)
            },
            () => console.log("userCredintials.reservedSets", this.state.userCredintials, "availableSeats_3PM", this.state.availableSeats_3PM)
          );
        }
      }
    } else if (this.state.booked.showTime === "6PM") {
      if (this.state.userCredintials.reservedSeats.indexOf(seatNo) > -1) {
        this.setState(
          {
            availableSeats_6PM: this.state.availableSeats_6PM.concat(seatNo),

            userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.reservedSeats_6PM && this.state.userCredintials.reservedSeats.filter(element => element !== seatNo) }
          },
          () => console.log("userCredintials.reservedSeats", this.state.userCredintials.reservedSeats, "availableSeats_6PM", this.state.availableSeats_6PM)
        );
      } else {
        if (this.state.booked.noOfSeats !== this.state.userCredintials.reservedSeats.length) {
          this.setState(
            {
              userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.userCredintials.reservedSeats.concat(seatNo) },
              availableSeats_6PM: this.state.availableSeats_6PM.filter(element => element != seatNo)
            },
            () => console.log("userCredintials.reservedSets", this.state.userCredintials, "availableSeats_6PM", this.state.availableSeats_6PM)
          );
        }
      }
    } else if (this.state.booked.showTime === "9PM") {
      if (this.state.userCredintials.reservedSeats.indexOf(seatNo) > -1) {
        this.setState(
          {
            availableSeats_9PM: this.state.availableSeats_9PM.concat(seatNo),

            userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.reservedSeats_9PM && this.state.userCredintials.reservedSeats.filter(element => element !== seatNo) }
          },
          () => console.log("userCredintials.reservedSeats", this.state.userCredintials.reservedSeats, "availableSeats_9PM", this.state.availableSeats_9PM)
        );
      } else {
        if (this.state.booked.noOfSeats !== this.state.userCredintials.reservedSeats.length) {
          this.setState(
            {
              userCredintials: { ...this.state.userCredintials, reservedSeats: this.state.userCredintials.reservedSeats.concat(seatNo) },
              availableSeats_9PM: this.state.availableSeats_9PM.filter(element => element != seatNo)
            },
            () => console.log("userCredintials.reservedSets", this.state.userCredintials, "availableSeats_9PM", this.state.availableSeats_9PM)
          );
        }
      }
    }
  }
  toggleNOofSeats(event) {
    const { name, value } = event.target;
    this.setState(
      {
        booked: { ...this.state.booked, [name]: value },
        showTimeToggle: true
      },
      () => {
        console.log("booked.showTime:", this.state.booked.showTime);
      }
    );
  }

  render() {
    return (
      <div className="App">
        {/* {console.log(" bookTickects", this.state.bookTickects)}
        {console.log(" theatreView", this.state.theatreView)}
        {console.log("  userdetailFlag", this.state.userdetailFlag)}
        {console.log(" showTimeToggle", this.state.showTimeToggle)} */}
        <header className="App-header">BookMyShow</header>
        <div className="container  justify-content-center">
          {this.state.theatreView && this.state.userdetailFlag === false ? (
            <SelectSeat
              seatClass={this.state.seatClass}
              hoverMessage={this.state.hoverMessage}
              userCredintials={this.state.userCredintials}
              reservedSeats_3PM={this.state.reservedSeats_3PM}
              reservedSeats_6PM={this.state.reservedSeats_6PM}
              reservedSeats_9PM={this.state.reservedSeats_9PM}
              AllSeats={this.state.AllSeats}
              _3PM={this.state._3PM}
              _6PM={this.state._6PM}
              _9PM={this.state._9PM}
              setunsetTheatreview={() => this.setunsetTheatreview()}
              setunsetuserDetailFlag={() => this.setunsetuserDetailFlag()}
              booked={this.state.booked}
              changeBtnColor={seatNo => this.changeBtnColor(seatNo)}
            />
          ) : this.state.userdetailFlag ? (
            <BookingDetails userCredintials={this.state.userCredintials} handleChange={event => this.handleChange(event)} unsetAllFlags={event => this.unsetAllFlags(event)} FalseDetailFlag={event => this.FalseDetailFlag(event)} />
          ) : (
            <Homescreen
              seatClass={this.state.seatClass}
              selectSeat={() => this.selectSeat()}
              selectSeatClass={event => this.selectSeatClass(event)}
              unsetShowtimeToggle={() => this.unsetShowtimeToggle()}
              decrementNoOfSeats={() => this.decrementNoOfSeats()}
              incrementNoOfSeats={() => this.incrementNoOfSeats()}
              showTimeToggle={this.state.showTimeToggle}
              bookTickects={this.state.bookTickects}
              booked={this.state.booked}
              toggleBookTicket={() => this.toggleBookTicket()}
              toggleNOofSeats={event => this.toggleNOofSeats(event)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
