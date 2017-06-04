import React from 'react';
import request from 'request';

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'names': '',
      'isAttending': 'null',
      'dietRestricts': '',
      'comments': ''
    };
  }

  handleChange(fieldName, event) {
    this.setState({[fieldName]: event.target.value});
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('Submitting state:', this.state);

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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name(s):
          <input
            type="text"
            value={this.state['names']}
            onChange={this.handleChange.bind(this, 'names')}
          />
        </label>
        <br />
        <label>
          <select
            value={this.state['isAttending']}
            onChange={this.handleChange.bind(this, 'isAttending')}
          >
            <option value="null">(Can you make it?)</option>
            <option value="true">Accepts with hysterical pleasure</option>
            <option value="false">Declines with extreme regret</option>
          </select>
        </label>
        <br />
        <label>
          Dietary restrictions
          <input
            type="text"
            value={this.state['dietRestrict']}
            onChange={this.handleChange.bind(this, 'dietRestricts')}
          />
        </label>
        <br />
        <label>
          Additional Comments:
          <textarea
            value={this.state['comments']}
            onChange={this.handleChange.bind(this, 'comments')}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RsvpForm;
