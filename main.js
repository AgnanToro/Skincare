// main.js

// Fungsi untuk mensimulasikan penyimpanan data user
let users = [];


// Fungsi untuk login
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert('Login berhasil!');
        window.location.href = 'product-order.html';
    } else {
        alert('Email atau password salah!');
    }
}

// Fungsi untuk menampilkan produk
function displayProducts() {
    const products = [
        { id: 'skin1004', name: 'Madagascar Centella Tone Calming', price: 9.37, image: 'path/to/skin1004-image.jpg' },
        // Tambahkan produk lainnya di sini
    ];

    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    // Implementasi logika menambahkan ke keranjang
    console.log(`Produk dengan ID ${productId} ditambahkan ke keranjang`);
    updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    // Implementasi logika memperbarui tampilan keranjang
    const cartElement = document.getElementById('cart');
    // Update tampilan keranjang di sini
}

// Event listener untuk form signup
document.getElementById('signup-form').addEventListener('submit', signup);

// Event listener untuk form login
document.getElementById('login-form').addEventListener('submit', login);

// Panggil fungsi displayProducts saat halaman product-order.html dimuat
if (window.location.pathname.includes('product-order.html')) {
    window.onload = displayProducts;
}


// chechkout product
function goToCheckout(product) {
    var checkoutUrl = 'checkout.html?name=' + encodeURIComponent(product.name) +
                      '&description=' + encodeURIComponent(product.description) +
                      '&price=' + product.price +
                      '&size=' + encodeURIComponent(product.size) +
                      '&image=' + encodeURIComponent(product.image);
    window.location.href = checkoutUrl;
}

// Contoh penggunaan:
document.querySelectorAll('.product-item').forEach(function(item) {
    item.addEventListener('click', function() {
        var product = {
            name: this.querySelector('.product-name').textContent,
            description: this.querySelector('.product-description').textContent,
            price: this.querySelector('.product-price').dataset.price,
            size: this.querySelector('.product-size').textContent,
            image: this.querySelector('img').src
        };
        goToCheckout(product);
    });
});

