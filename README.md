# Tiptap Editor with Custom Emoji Extension

This project is a simple yet effective implementation of a text editor using [Tiptap] , enhanced with a custom emoji extension. The idea behind this project was to make the text editing experience more fun and expressive by allowing users to easily insert emojis while they’re writing.

## Why I Built This

I built this custom emoji extension because, while working with rich text editors, I noticed that adding emojis wasn’t always straightforward. Emojis have become an essential part of online communication, and I wanted to make it easier for users to add them to their content without leaving the editor. Tiptap is a great tool for building rich text editors, but it doesn’t come with an emoji feature by default, so I thought it would be a fun challenge to extend it and add that functionality.

This project was a way for me to practice building custom features and to explore the flexibility of Tiptap. My goal was to create something practical that could be used in real-world applications, whether it’s for writing blogs, messages, or just adding a little extra personality to text.

## Key Features

- **Custom Emoji Picker**: This allows users to pick and insert emojis directly into the editor with a single click.
- **Text Formatting Options**: Basic tools like Bold, Italic, and Headings are included to make text editing more versatile.

## Custom Emoji Extension

The custom emoji extension I built provides a simple, yet useful feature that allows users to insert emojis into their content. Here’s a little more about how it works:

- **Inserting Emojis**: Users can click the 🙂 button to open an emoji picker. When they select an emoji, it gets inserted right where their cursor is in the text.
- **Tiptap Integration**: I created an extension specifically for Tiptap that defines a new command, `insertEmoji`, which handles the emoji insertion.
- **Smooth UI**: I used the emoji picker from [Emoji-Mart] to provide a clean, user-friendly interface for browsing and selecting emojis.

This was my first time working with Tiptap on a project like this, and I learned a lot about extending existing tools to meet specific needs. It’s a great feature for any text editor, and I’m excited to share it.

## Packages Used

### 1. **Tiptap** (`@tiptap/react`, `@tiptap/core`)
- **Why I Chose It**: Tiptap is incredibly flexible and allows me to easily create custom features. It’s been a fantastic tool for building rich text editors that can be extended as needed.

### 2. **Emoji-Mart** (`@emoji-mart/react`)
- **Why I Chose It**: This package is straightforward and provides a great emoji picker. It was easy to integrate and gave the editor a familiar, interactive way to select emojis.

### 3. **React** (`react`, `react-dom`)
- **Why I Chose It**: React makes it simple to manage the editor's interface and the state of the emoji picker. It’s my go-to library for building interactive UIs, and it worked perfectly for this project.

### 4. **React Hooks** (`useState`)
- **Why I Chose It**: React hooks help keep the code clean and manageable, especially for handling state like whether the emoji picker is open or closed.

### 5. **CSS Styling**
- **Why I Chose It**: Custom CSS was used to make the UI clean and easy to use. It’s a simple approach, but it works well for the purpose of this project.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tiptap**: A flexible framework for creating rich text editors.
- **Emoji-Mart**: A simple emoji picker for React.
- **CSS**: For styling the editor and its components.

## Conclusion

I’m really glad to have had the opportunity to work on this project. It’s been a great way to learn more about Tiptap and extend its functionality. Building a custom emoji extension allowed me to practice problem-solving and create a feature that can make text editors more engaging and interactive.



