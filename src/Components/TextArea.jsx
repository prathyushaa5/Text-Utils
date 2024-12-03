import React, { useState } from "react";

const TextArea = (props) => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function toupper() {
    if (text.length > 0) setText(text.toUpperCase());
    props.showAlert("Converted to upper case", "success");
  }

  function tolower() {
    if (text.length > 0) setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  }

  function tocapital() {
    if (text.length > 0) {
      let words = text
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      setText(words);
    }
    props.showAlert("Capitalized words", "success");
  }

  function capitalfirst() {
    if (text.length > 0) setText(text.charAt(0).toUpperCase() + text.slice(1));
    props.showAlert("Capitalized first word", "success");
  }

  function removespaces() {
    if (text.length > 0) setText(text.split(/\s+/).join(""));
    props.showAlert("Removed spaces", "success");
  }

  function clear() {
    setText("");
    props.showAlert("Cleared", "success");
  }

  function copytoclip(){
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  }
  function len() {
    let n = text.length;
    let length = 0;
    for (let i = 0; i < n; i++) {
      if (text.charAt(i) !== " ") {
        length++;
      }
    }
    return length;
  }

  function word() {
    let wordlen = 0;
    let sentence = text;
    sentence.split(/\s+/).map((word) => wordlen++);
    return wordlen;
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 text-${
        props.color === "gray" ? "white" : "gray"
      }-900 bg-${props.color}-900`}
    >
      <div className="shadow-xl rounded-lg p-8 w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Text Manipulation Tool
        </h1>

        <textarea
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg shadow-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
          placeholder="Write something here..."
          value={text}
          onChange={handleChange}
        ></textarea>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={toupper}
          >
            Uppercase
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={tolower}
          >
            Lowercase
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-bold rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={tocapital}
          >
            Capitalize Words
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={capitalfirst}
          >
            Capitalize First Word
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={removespaces}
          >
            Remove Spaces
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={copytoclip}
          >
            Copy to Clipboard
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-bold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-800 focus:outline-none transition-transform transform hover:scale-105"
            onClick={clear}
          >
            Clear
          </button>
        </div>

        <div className="mt-6 w-full text-center">
          <p className="text-lg font-medium shadow-md px-4 py-2 bg-gray-100 rounded-lg">
            {text || "Your manipulated text will appear here..."}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {len()} letters | {word()} words
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
