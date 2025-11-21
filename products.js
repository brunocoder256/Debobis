// products.js

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const products = document.querySelectorAll(".products .product");
  const searchInput = document.getElementById("product-search");

  // Function to filter products by category
  function filterProducts(category) {
    products.forEach(product => {
      if (category === "all" || product.dataset.category === category || (category === "others" && !product.dataset.category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Function to search products by name
  function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    products.forEach(product => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      const desc = product.querySelector("p").textContent.toLowerCase();
      if (title.includes(lowerQuery) || desc.includes(lowerQuery)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Filter button click
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.filter;
      filterProducts(category);
    });
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query === "") {
      // Show filtered products based on active category
      const activeButton = document.querySelector(".filter-buttons button.active");
      filterProducts(activeButton ? activeButton.dataset.filter : "all");
    } else {
      searchProducts(query);
    }
  });

  // Initialize: show all products
  filterProducts("all");
});
