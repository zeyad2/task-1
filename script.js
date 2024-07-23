document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const productCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><strong>$${product.price}</strong></p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
