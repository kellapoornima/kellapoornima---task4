const products = [
    { id: 1, name: 'Cerave Moisturizer', category: 'Moisturizer', price: 499, rating: 3.0, image: 'images/1.jpg' },
    { id: 2, name: 'Mama earth Moisturizer', category: 'Moisturizer', price: 19.99, rating: 3.0, image: 'images/2.jpg' },
    { id: 3, name: 'Minimalist Moisturizer', category: 'Moisturizer', price: 76999, rating: 4.5, image: 'images/3.jpg' },
    { id: 4, name: 'simple Moisturizer', category: 'Moisturizer', price: 1999, rating: 5.0, image: 'images/4.jpg' },
    { id: 5, name: 'Nykya Lipsticks', category: 'Lipsticks', price: 2999, rating: 3.9, image: 'images/5.jpg' },
    { id: 6, name: 'Mac Lipsticks', category: 'Lipsticks', price: 999, rating: 2.5, image: 'images/6.jpg' },
    { id: 7, name: 'Maybelline Lipsticks', category: 'Lipsticks', price: 399, rating: 4.7, image: 'images/7.jpg' },
    { id: 8, name: 'Revlon Lipsticks', category: 'Lipsticks', price: 99, rating: 3.0, image: 'images/8.jpg' },
    { id: 9, name: 'Loreal Serum ', category: 'Serum', price: 299, rating: 5.0, image: 'images/9.jpg' },
    { id: 10, name: 'Garnier Serum', category: 'Serum', price: 699, rating: 2.0, image: 'images/10.jpg' },
    { id: 11, name: 'True Serum', category: 'Serum', price: 999, rating: 3.5, image: 'images/11.jpg' },
    { id: 12, name: ' Lakeme Serum', category: 'Serum', price: 999, rating: 4.5, image: 'images/12.jpg' },
    { id: 13, name: ' Ordinary Toner', category: 'Toner', price: 999, rating: 4.5, image: 'images/13.jpg' },
    { id: 14, name: ' plum Toner', category: 'Toner', price: 999, rating: 4.5, image: 'images/14.jpg' },
    { id: 15, name: ' Toner', category: 'Toner', price: 999, rating: 4.5, image: 'images/15.jpg' },
    { id: 16, name: ' Tirtir Toner', category: 'Toner', price: 999, rating: 4.5, image: 'images/16.jpg' },
];

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);
document.getElementById('ratingFilter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const priceOrder = document.getElementById('priceFilter').value;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);

    let filteredProducts = products;

  
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (!isNaN(minRating)) {
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    if (priceOrder) {
        filteredProducts = filteredProducts.sort((a, b) =>
            priceOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const starRating = generateStars(product.rating);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="rating">${starRating}</div>
        `;

        productList.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStar = '<span class="star full">★</span>';
    const emptyStar = '<span class="star empty">☆</span>';
    const maxStars = 5;

    let starHtml = '';
    for (let i = 1; i <= maxStars; i++) {
        starHtml += i <= Math.floor(rating) ? fullStar : emptyStar;
    }
    return starHtml;
}


displayProducts(products);