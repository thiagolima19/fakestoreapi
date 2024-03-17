import { addProductCard } from "./function";
// Fetch data and update the webpage
const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
  .then((res) => {
    //this will handle the ok status if the api didnot work
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
      return;
    }
    return res.json(); // if works it will return JSON Object
  })
  .then((data) => {
    let filteredData = data;

    // Filter by category
    const categoryFilter = document.getElementById("category").value;
    if (categoryFilter) {
      filteredData = data.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Sort by price
    const sortType = document.getElementById("sort").value;
    if (sortType === "asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    // Access the product details container
    // const productDetails = document.getElementById("product-details");
    // // Create an empty string to store HTML content
    // let htmlContent = "";
    // // Loop through each filtered and sorted product and append its details to the HTML content
    // filteredData.forEach((product) => {
    //   htmlContent += `
    //                <div class="product">
    //                <img src="${product.image}" alt="${product.title}" style="max-width: 300px;">
    //                <h3>${product.title}</h3>
    //                    <p>Rating: ${product.rating.rate} (${product.rating.count} Reviews)</p>
    //                    <p>$${product.price}</p>
    //                    <p>Description: ${product.description}</p>
    //                    <p>Category: ${product.category}</p>
    //               </div>
    //            `;
    // });
    // // Update the webpage with the HTML content
    // productDetails.innerHTML = htmlContent;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = "<h1>Error loading data</h1>";
  });

// Add event listeners for sorting and filtering
document.getElementById("sort").addEventListener("change", addProductCard);
document.getElementById("category").addEventListener("change", addProductCard);

// Initial data load
addProductCard();
