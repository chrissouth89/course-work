import React from "react";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import NewForm from "./components/NewForm";
import Show from "./components/Show.js";
import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = process.env.REACT_APP_BASEURL;

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

fetch(baseURL + "/holidays")
  .then(
    data => data.json(),
    err => console.log("data", err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log("parsedData", err)
  );

class App extends React.Component {
  // store the data made via fetch
  state = {
    holidays: [],
    holiday: {}
  };

  getHoliday = holiday => {
    this.setState({ holiday });
  };

  // why use fat arrows here?...ans: to bind to the class
  getHolidays = () => {
    fetch(baseURL + "/holidays")
      .then(
        data => data.json(),
        err => console.log("data", err)
      )
      .then(
        parsedData =>
          // parsedData.sort((a,b) => a < b)
          this.setState({ holidays: parsedData }),
        err => console.log("parsedData", err)
      );
  };

  handleAddHoliday = holiday => {
    const copyHolidays = [...this.state.holidays];
    copyHolidays.unshift(holiday);
    this.setState({
      holidays: copyHolidays,
      name: ""
    });
  };

  deleteHoliday = id => {
    fetch(baseURL + "/holidays/" + id, {
      method: "DELETE"
    }).then(res => {
      // holidaysArr = [{}, {}]
      const holidaysArr = this.state.holidays.filter(holiday => {
        return holiday._id !== id;
      });
      this.setState({ holidays: holidaysArr });
    });
  };

  toggleCelebrated = holiday => {
    // holidays.put("/:id"
    fetch(baseURL + "/holidays/" + holiday._id, {
      method: "PUT",
      body: JSON.stringify({ celebrated: !holiday.celebrated }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resJson => {
        const copyHolidays = [...this.state.holidays];
        const findIndex = this.state.holidays.findIndex(
          holiday => holiday._id === resJson._id
        );
        copyHolidays[findIndex].celebrated = resJson.celebrated;
        this.setState({ holidays: copyHolidays });
      });
  };

  render() {
    console.log("App - render() - state", this.state);
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        <NewForm baseURL={baseURL} handleAddHoliday={this.handleAddHoliday} />
        <table>
          {/* Conditional logic option 1 */}
          {/* show the active holiday */}
          {/* {this.state.holiday
        ? <Show holiday={this.state.holiday} />
        : null } */}
          {/* Conditional logic option 2 */}
          {this.state.holiday && <Show holiday={this.state.holiday} />}

          <tbody>
            {this.state.holidays.map(holiday => (
              <tr
                key={holiday._id}
                onMouseOver={() => this.getHoliday(holiday)}
              >
                <td>{holiday.name}</td>
                <td>{holiday.likes}</td>
                <td
                    onDoubleClick={() => this.toggleCelebrated(holiday)}
                    className={holiday.celebrated ? "celebrated" : null}
                ><img src={ballons} alt="ballons" /></td>
                <td onClick={() => this.deleteHoliday(holiday._id)}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // compDidMount is a react LifeCycle method
  // this runs only once on mounting
  componentDidMount() {
    this.getHolidays();
  }
}

export default App;
