import EmojiPicker from "@emoji-mart/react"; // Importing the EmojiPicker component from emoji-mart library
import { useState } from "react"; // Importing useState hook for managing the component's state

// EmojiButton component for adding emoji functionality to the editor
const EmojiButton = ({ editor }) => {
  const [isPickerOpen, setPickeropen] = useState(false); // State to track whether the emoji picker is open or closed

  // Function to handle emoji selection
  const handleEmojiSelect = (emoji) => {
    // Insert the selected emoji into the editor's content
    editor.chain().focus().insertContent(emoji.native).run();
    // Close the emoji picker after selecting an emoji
    setPickeropen(false);
  };

  return (
    <div className="emoji-button-container">
      {/* Button to toggle the emoji picker visibility */}
      <button
        className="emoji-button"
        onClick={() => {
          setPickeropen((prev) => !prev); // Toggle the emoji picker state
        }}
      >
        🙂 {/* Emoji symbol displayed on the button */}
      </button>

      {/* Conditional rendering: Show the emoji picker only if isPickerOpen is true */}
      {isPickerOpen && (
        <div className="emoji-picker-container">
          <EmojiPicker
            theme="light" // Setting the light theme for the emoji picker
            onEmojiSelect={handleEmojiSelect} // Callback function when an emoji is selected
          />
        </div>
      )}
    </div>
  );
};

export default EmojiButton; // Exporting the EmojiButton component
