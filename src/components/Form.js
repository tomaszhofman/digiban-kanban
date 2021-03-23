import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Icons
import { IoMdClose as CancelIcon } from 'react-icons/io';
// Components
import Button from './Button';

/*
 * TODO: Create the Form component
 *
 * Requirements:
 * - Must be named Form
 * - Must be a class component
 * - Should implement all the methods defined below
 * - Should render a form element
 * - Should either render an input or a textarea element
 * - Should render a submit button
 * - Should render a cancel icon (optional)
 *
 * Tips:
 * - You can use the 'form' and 'form-*' CSS classes for styling
 *
 */

class Form extends Component {
  constructor(props) {
    super(props);

    // Refs to access form and control input/textarea DOM nodes
    this.formRef = React.createRef();
    this.controlRef = React.createRef();

    // TODO: Define your state properties here
    this.state = {
      text: '',
    };

    // TODO: Bind your class methods here
    // ...
  }

  // TODO: implement the componentDidMount lifecycle method to set focus on the form control element.
  // Tips:
  // - Call the `focus` method on the control ref node `this.controlRef.current`
  componentDidMount() {
    this.controlRef.current.focus();
  }

  // TODO: implement the handleOnChangeText event handler.
  // Tips:
  // - Use the `this.setState` method to update the text value of the control from
  handleOnChangeText = (event) => {
    this.setState({ text: event.target.value });
  };

  // TODO: implement the handleOnSubmit event handler.
  // Tips:
  // - Use the `preventDefault` method to prevent the default action
  // - Call the `this.props.onClickSubmit` method to submit the text
  // - Clean up the control form value using `this.setState`
  handleOnSubmit = (event) => {
    this.props.onClickSubmit(this.state.text);
    this.setState({ text: '' });
  };

  // TODO: implement the handleOnKeyDown event handler.
  // Tips:
  // - Use the `key` attribute from the event to check if the user has pressed "Enter" on the keyboard
  // - Call the `this.handleOnSubmit` if the user pressed "Enter"
  handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleOnSubmit();
    }
  };

  // TODO: render the Form UI.
  render() {
    return (
      <form ref={this.formRef} className={`form form-${this.props.type}`}>
        {/* render form control: input or textarea */}
        <input
          className="form-input"
          ref={this.controlRef}
          onChange={this.handleOnChangeText}
          onKeyDown={this.handleOnKeyDown}
          type="text"
          value={this.state.text}
          placeholder={this.props.placeholder}
        />
        <div className="form-actions">
          <Button variant="success" text="Add List" icon={CancelIcon} />

          {/* <button className="btn btn-success">
            <span>Add list</span>
          </button> */}
          <span className="form-cancel-action">
            <CancelIcon onClick={this.props.onClickCancel} />
          </span>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  initialValue: '',
  placeholder: '',
  buttonText: '',
  onClickSubmit: () => null,
  onClickCancel: () => null,
};

Form.propTypes = {
  type: PropTypes.oneOf(['list', 'card', 'editor']).isRequired,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  onClickSubmit: PropTypes.func,
  onClickCancel: PropTypes.func,
};

export default Form;
