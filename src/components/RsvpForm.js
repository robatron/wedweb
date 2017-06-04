import React from 'react';
import request from 'request';

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A howdy was submitted: ' + this.state.value);
    event.preventDefault();
    request
      .get({
        url:'http://localhost:3000',
        form: {
          howdyTo: this.state.value
        }
      })
      .on('response', (response) => {
        console.log('Server response', response);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Howdy:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RsvpForm;
