// Function to handle click event on scrape button
const handleScrapeClick = async (event) => {
    event.preventDefault();

    // Get keyword from input
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
      // Display error if keyword is empty
      showError('The keyword cannot be empty');
      return;
    }

    try {
      // Fetch data from server
      const data = await fetchData(keyword);

      // Display new results
      displayResults(data);
    } catch (error) {
      // Display error message
      showError(error.message);
    }
};


// focused functions with descriptive names to help readability and team work


// Function to fetch data from server
const fetchData = async (keyword) => {
    const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data.error);
    }

    return data;
};

// Function to display results
const displayResults = (data) => {
    // Clear old results and error message
    // Limpar resultados antigos e mensagem de erro
    document.getElementById('results').innerHTML = '';
    hideError();

    // Loop through each product and create product card
    // Percorrer cada produto e criar um card de produto
    data.forEach(product => {
        const productDiv = createProductCard(product);
        document.getElementById('results').appendChild(productDiv);
    });
};

// Function to create product card
const createProductCard = (product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'card m-3';
    productDiv.style.width = '18rem';
    productDiv.innerHTML = `
        <img src="${product.imageUrl}" class="card-img-top img-thumbnail" alt="${product.title}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Rating: ${product.rating}</p>
            <p class="card-text">Review Count: ${product.reviewCount}</p>
            <a href="${product.productLink}" target="_blank" class="btn btn-primary">View Details</a>
        </div>
    `;
    return productDiv;
};

// Function to display error message
const showError = (message) => {
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
};

// Function to hide error message
const hideError = () => {
    document.getElementById('error').style.display = 'none';
};

// Add event listener to scrape button
document.getElementById('scrape').addEventListener('click', handleScrapeClick);
