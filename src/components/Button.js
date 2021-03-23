import React from 'react';
import PropTypes from 'prop-types';
import { GoPlusSmall as IconPlus } from 'react-icons/go';

const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={
          props.variant === 'success' ? 'btn btn-success' : 'add-button'
        }
      >
        {props.variant === 'success' ? null : <IconPlus />}
        <span>{props.text}</span>
      </button>
    </>
  );
};
/*
 * TODO: Create the Button component
 *
 * Requirements:
 * - Must be named Button
 * - Must be a function component
 * - Should render a <button> element
 * - Should render a <span> element inside the <button> for the text
 * - Should render an optional icon (from react-icons) before the text
 *
 * Tips:
 * - You can use the 'btn' and 'btn-success' CSS classes for styling
 *
 */

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'editor']),
};

export default Button;
