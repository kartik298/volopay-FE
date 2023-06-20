# Card Management App

The Card Management App is a web application built with React that allows users to view and manage their cards. It provides features such as filtering cards, searching by name, and selecting cards based on owner ID.

## Installation

1. Clone the repository:

   ```bash
   gh repo clone https://github.com/kartik298/volopay-FE.git
   
   cd src
   
   npm install
   
   npm start
   
   
  Open your web browser and access the app at [Click Here for website](https://stackblitz-starters-fhqf6g.stackblitz.io)
  
  
  Usage
  The Card Management App consists of three tabs: All, Your, and Blocked. Each tab displays different card information based on its functionality.

  All Tab
  - Displays all the available cards.
  - Allows searching for cards by name.
  - Provides the option to filter cards by card type (burner or subscription).
  
  Your Tab
  - Displays cards that belong to a specific owner.
  
  Blocked Tab
  - Displays blocked cards.
  
  File Structure
  - src/
  - App.js
  - src/Data/mockData.jsx
  - src/component/CardList.js
  - src/component/FilterDropdown.js
  - src/component/Pages.js
  - src/component/searchBar.js
  - src/component/Tabs.js
  - App.js
  - index.js
  - App.css

Technologies Used
- React
- React Router
- CSS

Customization
- You can customize the app by modifying the existing components or creating new ones. The styles can be modified by editing the CSS file (style.css).
