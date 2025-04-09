import "./App.css"; // Importing the CSS file for styling
import { useEditor, EditorContent } from "@tiptap/react"; // Importing Tiptap editor hooks and components
import StarterKit from "@tiptap/starter-kit"; // Tiptap's basic extension set
import EmojiExtension from "./EmojiExtension"; // Custom Emoji Extension
import EmojiButton from "./EmojiButton"; // Button component for adding emojis
import test from "./test";
const App = () => {
  // Initializing the editor with necessary extensions and default content
  const editor = useEditor({
    extensions: [
      StarterKit, // Basic extensions like bold, italic, headings, etc.
      EmojiExtension, // Custom extension for handling emojis
    ],
    content: "<p>Hello, Welcome to TIPTAP Editor with custom Emoji Extension.</p>", // Default content of the editor
  });

  // If the editor is not ready, return null to avoid rendering issues
  if (!editor) {
    return null;
  }

  return (
    <div className="app-container">
      {/* Title of the editor */}
      <h1 className="editor-title">Tiptap Editor with custom Emoji extension</h1>

      {/* Toolbar with buttons for editor actions */}
      <div className="editor-toolbar">
        {/* Button to toggle bold text */}
        <button
          onClick={() => {
            editor.chain().focus().toggleBold().run(); // Toggle bold formatting
          }}
          disabled={!editor.can().chain().focus().toggleBold().run()} // Disable button if action can't be performed
          className="editor-button"
        >
          Bold
        </button>
        <test/>

        {/* Button to toggle italic text */}
        <button
          onClick={() => {
            editor.chain().focus().toggleItalic().run(); // Toggle italic formatting
          }}
          disabled={!editor.can().chain().focus().toggleItalic().run()} // Disable button if action can't be performed
          className="editor-button"
        >
          Italic
        </button>

        {/* Button to toggle H1 heading */}
        <button
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run(); // Toggle heading level 1
          }}
          className="editor-button"
        >
          H1
        </button>

        {/* Custom emoji button */}
        <EmojiButton editor={editor} />
      </div>
         
      {/* Editor content area */}
      <div className="tiptap-editor">
        <EditorContent editor={editor} /> {/* Renders the editable content */}
      </div>
    </div>
  );
};

export default App; // Exporting the App component
