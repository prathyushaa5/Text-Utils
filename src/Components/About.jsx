import React from 'react';

const About = (props) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 text-${props.color === "gray" ? "white" : "gray"}-900 bg-${props.color}-900`}
    >
      {/* About Section */}
      <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          About Text Manipulation Tool
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-lg font-medium  mb-8 leading-relaxed">
          Welcome to the Text Manipulation Tool! This tool allows you to perform various text transformations
          quickly and easily. Whether you need to convert text to uppercase, lowercase, capitalize words, 
          or remove unnecessary spaces, this tool can help. You can also clear the text or get the count of letters and words.
        </p>

        {/* Features List */}
        <div className="space-y-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Features:</h2>
          <ul className="list-disc pl-6">
            <li><strong>Uppercase:</strong> Converts all text to uppercase.</li>
            <li><strong>Lowercase:</strong> Converts all text to lowercase.</li>
            <li><strong>Capitalize Words:</strong> Capitalizes the first letter of each word in the text.</li>
            <li><strong>Capitalize First Word:</strong> Capitalizes only the first letter of the first word.</li>
            <li><strong>Remove Spaces:</strong> Removes all spaces from the text.</li>
            <li><strong>Clear Text:</strong> Clears the text from the text area.</li>
            <li><strong>Character Count:</strong> Displays the total number of non-space characters.</li>
            <li><strong>Word Count:</strong> Displays the total number of words in the text.</li>
          </ul>
        </div>

        {/* Description Paragraph */}
        <div className="mt-6 text-center">
          <p className="text-lg leading-relaxed">
            This tool is designed to help you work efficiently with text in various scenarios. 
            Whether you're writing, editing, or coding, it's a versatile solution to quickly manipulate your text.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Go Back to Text Area
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
