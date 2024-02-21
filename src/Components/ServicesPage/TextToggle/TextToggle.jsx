import React, { useState } from 'react';
import './TextToggle.css'; // Import CSS file for styling

function TextToggle() {
  const [selectedText, setSelectedText] = useState("Text 1"); // Initially open "Text 1"

  const toggleContent = (text) => {
    setSelectedText(text === selectedText ? null : text);
  };

  return (
    <div>
      <div className="container">
        <div
          className={`team ${selectedText === "Text 1" ? 'active' : ''}`}
          onClick={() => toggleContent("Text 1")}
        >
          Creative Design
        </div>
        <div
          className={`team ${selectedText === "Text 2" ? 'active' : ''}`}
          onClick={() => toggleContent("Text 2")}
        >
         UI/UX
        </div>
        <div
          className={`team ${selectedText === "Text 3" ? 'active' : ''}`}
          onClick={() => toggleContent("Text 3")}
        >
        Digital Marketing
        </div>
        <div
          className={`team ${selectedText === "Text 4" ? 'active' : ''}`}
          onClick={() => toggleContent("Text 4")}
        >
          FullStack Development
        </div>
        <div
          className={`team ${selectedText === "Text 5" ? 'active' : ''}`}
          onClick={() => toggleContent("Text 5")}
        >
          Marketing Analysis
        </div>
      </div>

      <div className="underline-container">
        <div className={`underline ${selectedText ? 'active' : ''}`}></div>
      </div>

      <div className="content">
        {selectedText === "Text 1" && <div>Content related to Text 1</div>}
        {selectedText === "Text 2" && <div>Content related to Text 2</div>}
        {selectedText === "Text 3" && <div>Content related to Text 3</div>}
        {selectedText === "Text 4" && <div>Content related to Text 4</div>}
        {selectedText === "Text 5" && <div>Content related to Text 5</div>}
      </div>
    </div>
  );
}

export default TextToggle;
