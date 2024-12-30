import { Extension } from "@tiptap/core"; // Importing the base Extension class from Tiptap

// Creating a custom Emoji extension for Tiptap
const EmojiExtension = Extension.create({
    // Name of the extension
    name: "emoji",

    // Adding custom commands for the extension
    addCommands() {
        return {
            // Defining a new command called 'insertEmoji'
            insertEmoji: (emoji) => ({ commands }) => {
                // This command inserts the provided emoji into the editor's content
                return commands.insertContent(emoji);
            },
        };
    },
});

export default EmojiExtension; // Exporting the EmojiExtension 
