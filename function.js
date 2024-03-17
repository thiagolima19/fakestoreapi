function addProductCard(apiUrl) {
  // Access the product details container
  const productDetails = document.getElementById("product-details");
  // Create an empty string to store HTML content
  let htmlContent = "";
  // Loop through each filtered and sorted product and append its details to the HTML content
  filteredData.forEach((product) => {
    htmlContent += `
                <div class="product">
                <img src="${product.image}" alt="${product.title}" style="max-width: 300px;">
                <h3>${product.title}</h3>
                    <p>Rating: ${product.rating.rate} (${product.rating.count} Reviews)</p>
                    <p>$${product.price}</p>
                    <p>Description: ${product.description}</p>
                    <p>Category: ${product.category}</p>
               </div>
            `;
  });
  // Update the webpage with the HTML content
  productDetails.innerHTML = htmlContent;
}

export { addProductCard };
