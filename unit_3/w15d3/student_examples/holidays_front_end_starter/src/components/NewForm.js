import React from "react";

class NewForm extends React.Component {
  state = {
    name: "",
    test:'this is test'
  };

  handleSubmit = event => {
      event.preventDefault()
      // Send the data to the server
      fetch(this.props.baseURL + '/holidays', {
          // calls the http://localhost:3003/holidays POST route
          // holidays.post("/",)
          method: 'POST',
          body: JSON.stringify({
              name: this.state.name
          }),
          headers: {'Content-Type': 'application/json'}
      })
      // server responses with json
      .then( res => res.json())
      .then(resJson => {
        // add the received data to state in App
        // aka...lifting state
        this.props.handleAddHoliday(resJson)
        // this clears the form
        this.setState({name:''})
      }).catch (error => console.error({'Error': error}))

  }

  handleChange = event => {
    this.setState({
        // object shorthand
        [event.target.id]:event.target.value,
        // the above translates into the below
        // name:event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="add a holiday"
        />
        <input type="submit" value="Add a Reason to Celebrate" />
      </form>
    );
  }
}

export default NewForm;
