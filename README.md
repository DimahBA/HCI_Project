# Interactive Menu App

This interactive menu website is designed to provide a user-friendly interface for browsing and selecting menu items for a restaurant. The site allows users to explore categories, view details of each dish, and filter options based on preferences like dietary restrictions. The goal is to offer a seamless and engaging experience while making it easy for users to interact with the menu.


## Website

The website can be found there: https://lucent-profiterole-b04284.netlify.app/

## Functionalities

....


## Interface

The application interface includes the following main sections:

- **Homepage**: Home page displaying menu, set menu buttons and settings and help.
- **Menu Page**: List of menu items, grouped by category, with filtering.
- **Set Menu Page**: List of set menu items, grouped by category, with filtering.
- **Item Details**: Details of the dish: description, ingredients and extras.
- **Cart**: Displays all selected items with quantities and individual prices; allows users to update item quantities or remove items, and shows the cart total in real time.
- **Payment page**: Provides choice for the user to either pay by selecting items or a custom amount.
- **Rating page**: Presents a star‑rating component and optional comment box where users can submit feedback on each dish.
- **Navigation Bar**: Persistent header with links to main sections.
- **Header**: Table number, settings and help



## Project Structure
```bash
src/
├── App.js               # Main application component with route definitions
├── index.js             # Entry point that renders the app

├── assets/              # Static assets
│   ├── images/          # Image files (JPG, PNG, SVG)
│   └── icons/           # Icon files

├── components/          # Reusable UI components (in .jsx)
│   └── ExampleComponent.jsx

├── data/                # Static data files (in .js)
│   └── menu.js
│   └── setMenu.js

├── pages/               # Page-level route components (mapped in App.js)
│   └── HomePage.jsx
│   └── MenuPage.jsx
        ...

├── slices/              # Redux slices for application state
│   └── cartSlice.js
│   └── setMenuSlice.js
│   └── accessibilitySlice.js

```
## Getting Started

### Prerequisites

- Node.js (version 14 or above recommended)
- npm 

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/DimahBA/HCI_Project.git

cd HCI_Project/project

npm install
```

Starting the Development Server
To start the app in development mode:

```
npm run dev
```
The app will be available at http://localhost:5173/

Routing
Routes are defined in App.js using react-router-dom. Each route corresponds to a page in the pages/ directory.

State Management
Redux Toolkit is used to manage global state. Slices are defined in the slices/ directory and combined in a Redux store.

Assets
Images and icons are stored in src/assets/images and src/assets/icons respectively. 
