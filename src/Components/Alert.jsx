import React from 'react';

export default function Alert(props) {
  // Function to capitalize the first letter of a word
  const capitalize = (word) => {
    if (!word) return ''; // Handle cases where word might be null or undefined
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    props.alert && (
      <div
        className={`bg-${
          props.alert.type === 'success' ? 'green' : 'red'
        }-100 border border-${
          props.alert.type === 'success' ? 'green' : 'red'
        }-400 text-${
          props.alert.type === 'success' ? 'green' : 'red'
        }-700 px-4 py-3 rounded relative`}
        role="alert"
      >
        <strong className="font-bold">{capitalize(props.alert.type)}:</strong>
        <span className="block sm:inline"> {props.alert.msg}</span>
      </div>
    )
  );
}
