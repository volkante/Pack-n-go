# Pack N Go - Your Ultimate Packing Checklist

Pack N Go is a simple and intuitive React application designed to help you create and manage packing lists for your camping trips, weekend getaways, or any travel adventure.

## Key Features

- **Add Items Effortlessly:** Quickly add items to your list with specified quantities.
- **Interactive Packing:** Mark items as packed or unpacked with a simple toggle.
- **List Management:** Easily delete individual items or clear the entire list to start fresh.
- **Smart Sorting:** Sort your packing list by input order, alphabetically, or by packing status to optimize your packing process.
- **Persistent Storage:** Your list is automatically saved in your browser's localStorage, ensuring your data is preserved between sessions.

## Project Structure

The project is organized into the following key components:

- **`src/index.js`**: The main entry point of the React application.
- **`src/components/App.js`**: The core application component that orchestrates the entire packing list functionality.
- **`src/components/Form.js`**: The form component used to add new items to the packing list.
- **`src/components/PackingList.js`**: The component responsible for rendering the packing list and handling sorting options.
- **`src/components/ListItem.js`**: Represents an individual item in the packing list, with packing status and delete options.
- **`src/components/Stats.js`**: Displays statistics and progress of your packing, giving you an overview of what's left to pack.
- **`src/components/Logo.js`**: The application's logo component.
- **`src/index.css`**: Global styles for the application.
- **`public/index.html`**: The static HTML file that serves as the entry point for the React app.
- **`package.json`**: Contains project metadata, dependencies, and scripts.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14 recommended)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/) if preferred)

## Getting Started (Development)

Follow these steps to get the project up and running in your local development environment:

1.  Clone the repository to your local machine:

    ```sh
    git clone <repository-url>
    cd pack-n-go
    ```

2.  Install the dependencies:

    ```sh
    npm install # or yarn install
    ```

3.  Start the development server:

    ```sh
    npm start # or yarn start
    ```

    This will launch the application in your default web browser, typically at `http://localhost:3000`.

Now you're ready to start!
