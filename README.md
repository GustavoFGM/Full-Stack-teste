Documentation: Amazon Scraper (FullStack Internship Test)

This is an Amazon scraper project developed as part of a fullstack internship test. The project consists of a web application that allows users to search for products on Amazon and display the search results.

### Main Features:

1. **Product Search:**
   - Users can input a keyword into the search box.
   - Clicking the "Scrape" button will display the search results on the page.

2. **Results Display:**
   - Search results are displayed in cards containing information about each product, such as title, rating, review count, image, and a link for more details on the Amazon website.

3. **Error Handling:**
   - If the keyword is empty or if there is any error accessing Amazon's data, an error message will be displayed on the page.

### Technologies Used:

- **HTML:** The basic structure of the web page is defined in HTML.
- **CSS:** Custom styles are applied to HTML elements to enhance the appearance and usability of the page.
- **Bootstrap:** The Bootstrap library is used to facilitate the development of responsive layouts and add predefined styles to HTML elements.
- **JavaScript (ES6+):** JavaScript code is used for client-side interactivity, such as DOM manipulation and asynchronous calls to the server.
- **Express.js:** A Node.js web framework used to create and manage the HTTP server.
- **Axios:** A JavaScript library used to make HTTP requests to the server.
- **Cheerio:** A library for efficient HTML parsing and manipulation.

### Project Structure:

- **HTML Files:** The user interface is defined in HTML files, which contain the page structure and visual elements.
- **CSS Files:** Custom CSS files are used to apply additional styles to the page.
- **JavaScript Files:** JavaScript code is responsible for dynamic user interactions, such as sending requests to the server and updating the page with search results.
- **Server Files:** The server is built using Node.js and Express.js, where client requests are handled, Amazon data is scraped, and responses are sent back to the client.

### Setup and Execution:

1. **Installing Dependencies:**
   - Ensure that Node.js is installed on your system.
   - Run `npm install` to install project dependencies listed in the `package.json` file.

2. **Running the Server:**
   - Run `node server.js` to start the Express server.
   - The server will start and listen on port `3000` by default.

3. **Accessing the Application:**
   - Open a web browser and access `http://localhost:3000` to interact with the application.

### Additional Notes:

- This project is for educational and demonstration purposes only.
- Ensure compliance with Amazon's terms of service when using this application to avoid usage violations.
- Amazon scraping functionality may be sensitive to changes in site layout or policies, so the application may require future adjustments to continue working correctly.
