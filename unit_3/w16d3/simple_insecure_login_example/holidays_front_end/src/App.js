import React from "react";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import NewForm from "./components/NewForm.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
// import ballons from './images/two-balloon-icons-68911.png'
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
    (data) => {
      return data.json();
    },
    (err) => console.log(err)
  )
  .then(
    (parsedData) => console.log(parsedData),
    (err) => console.log(err)
  );

class App extends React.Component {
  state = {
    holidays: [],
    // currentUser: "Hi",
  };

  getHolidays = () => {
    fetch(baseURL + "/holidays")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ holidays: parsedData }),
        (err) => console.log(err)
      );
  };

  handleAddHoliday = (holiday) => {
    const copyHolidays = [...this.state.holidays];
    copyHolidays.unshift(holiday);
    this.setState({
      holidays: copyHolidays,
      name: "",
    });
  };

  handleSignUp = (username, password) => {
    console.log(username, password);
    fetch(baseURL + "/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          currentUser: resJson.username,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  handleSignIn = (username, password) => {
    console.log(username, password);
    fetch(baseURL + "/sessions", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          currentUser: resJson.username,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        {/* Check if user is logged in: */}
        {this.state.currentUser ? (
          // User is logged in, show holidays app:
          <>
            <NewForm
              baseURL={baseURL}
              handleAddHoliday={this.handleAddHoliday}
            />
            <table>
              <tbody>
                {this.state.holidays.map((holiday) => (
                  <tr key={holiday._id}>
                    <td> {holiday.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          // Not logged in, show login form:
          <>
            <SignIn handleSignIn={this.handleSignIn} />
            <SignUp handleSignUp={this.handleSignUp} />
          </>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getHolidays();
  }
}

export default App;
