import React from 'react';
import request from 'request';
import {
  Button,
  Checkbox,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Radio
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'names': '',
      'isAttending': null,
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
        url:'http://localhost:5000',
        form: {
          ...this.state
        }
      })
      .on('response', (response) => {
        console.log('Successfully submitted:', response.request);
      })
  }

  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="formControlsNames"
            type="text"
            label="Name(s)"
            placeholder="Enter your (and your guest's) names"
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter a contact email address"
          />

          <FormGroup>
            <Radio name="radioGroup">
              Accepts with hysterical pleasure
            </Radio>
            <Radio name="radioGroup">
              Declines with extreme regret
            </Radio>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Comments</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter additional comments" />
          </FormGroup>

          <Button type="submit">
            Submit
          </Button>
        </form>

        <hr/>

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
            <input
              type="radio"
              name="isAttending"
              value={true}
              checked={this.state.isAttending === "true"}
              onChange={this.handleChange.bind(this, 'isAttending')}
            />
              Accepts with hysterical pleasure
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="isAttending"
              value={false}
              checked={this.state.isAttending === "false"}
              onChange={this.handleChange.bind(this, 'isAttending')}
            />
              Declines with extreme regret
          </label>
          <br />

          <label>
            Dietary restrictions:
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
      </div>
    );
  }
}

export default RsvpForm;
