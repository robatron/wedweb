import React from 'react';
import request from 'request';
import {
  Button,
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FieldGroup
            id="formControlsNames"
            label="Name(s)"
            onChange={this.handleChange.bind(this, 'names')}
            placeholder="Enter your (and your guest's) names"
            type="text"
            value={this.state['names']}
          />

          <FormGroup>
            <Radio
              checked={this.state.isAttending === 'true'}
              name="radioGroup"
              onChange={this.handleChange.bind(this, 'isAttending')}
              value="true"
            >
              Accepts with hysterical pleasure
            </Radio>
            <Radio
              checked={this.state.isAttending === 'false'}
              name="radioGroup"
              onChange={this.handleChange.bind(this, 'isAttending')}
              value="false"
            >
              Declines with extreme regret
            </Radio>
          </FormGroup>

          <FieldGroup
            id="formControlsDiet"
            label="Dietary restrictions"
            onChange={this.handleChange.bind(this, 'dietRestricts')}
            placeholder="Enter your (and/or your guest's) dietary restrictions"
            type="text"
            value={this.state['dietRestrict']}
          />

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Comments</ControlLabel>
            <FormControl
              componentClass="textarea"
              onChange={this.handleChange.bind(this, 'comments')}
              placeholder="Enter additional comments"
              value={this.state['comments']}
            />
          </FormGroup>

          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default RsvpForm;
