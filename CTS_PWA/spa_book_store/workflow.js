const API_URL = 'http://localhost:3000';
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 🧭 Show dynamic content in index.html
function showPage(page) {
  const main = document.getElementById('main-content');
  if (!main) return;

  if (page === 'register') {
    main.innerHTML = `
      <h2>Register</h2>
      <form onsubmit="registerUser(event)">
        <input type="text" placeholder="Name" id="reg-name" class="form-control mb-2" required/>
        <input type="email" placeholder="Email" id="reg-email" class="form-control mb-2" required/>
        <input type="password" placeholder="Password" id="reg-pass" class="form-control mb-2" required/>
        <input type="password" placeholder="Confirm Password" id="reg-cpass" class="form-control mb-2" required/>
        <select id="reg-role" class="form-control mb-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button class="btn btn-primary">Register</button>
      </form>`;
  } else if (page === 'login') {
    main.innerHTML = `
      <h2>Login</h2>
      <form onsubmit="loginUser(event)">
        <input type="email" placeholder="Email" id="login-email" class="form-control mb-2" required/>
        <input type="password" placeholder="Password" id="login-pass" class="form-control mb-2" required/>
        <button class="btn btn-success">Login</button>
      </form>`;
  }
}

// 📝 Register User
async function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;
  const cpass = document.getElementById('reg-cpass').value;
  const role = document.getElementById('reg-role').value;

  if (pass !== cpass) {
    alert('Passwords do not match');
    return;
  }

  const res = await fetch(`${API_URL}/users?email=${email}`);
  const existing = await res.json();
  if (existing.length > 0) {
    alert('Email already registered');
    return;
  }

  await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password: pass, role })
  });

  alert('Registered Successfully');
  showPage('login');
}

// 🔐 Login User
async function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;

  const res = await fetch(`${API_URL}/users?email=${email}&password=${pass}`);
  const users = await res.json();
  if (users.length === 0) return alert('Invalid credentials');

  currentUser = users[0];
  alert(`Welcome ${currentUser.name}`);
  location.href = currentUser.role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
}

// ➕ Add Book (Admin)
async function addBook(e) {
  e.preventDefault();

  const title = document.getElementById('book-title').value.trim();
  const author = document.getElementById('book-author').value.trim();
  const price = parseFloat(document.getElementById('book-price').value);

  if (!title || !author || isNaN(price) || price <= 0) {
    alert('Please enter valid book details.');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, price })
    });

    if (!response.ok) throw new Error('Failed to add book');
    alert('Book added successfully!');
    location.href = 'admin-dashboard.html';

  } catch (error) {
    console.error('Error adding book:', error);
    alert('Something went wrong while adding the book.');
  }
}

// 🛒 Add to Cart
async function addToCart(bookId) {
  try {
    const res = await fetch(`${API_URL}/books/${bookId}`);
    const book = await res.json();
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${book.title} added to cart!`);
  } catch (err) {
    console.error('Error adding to cart:', err);
    alert('Failed to add book to cart.');
  }
}

// 🔢 Update Cart Count in Navbar
function updateCartCount() {
  const countElem = document.getElementById('cart-count');
  if (countElem) countElem.innerText = cart.length;
}

// 📚 Load User Book List
// 📚 Load User Book List
async function loadUserBooks() {
  const listContainer = document.getElementById('user-book-list');
  if (!listContainer) return;

  try {
    const response = await fetch(`${API_URL}/books`);
    const books = await response.json();

    listContainer.innerHTML = books.map((b) => `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${b.title}</h5>
            <p class="card-text">Author: ${b.author}</p>
            <p class="card-text">Price: ₹${b.price}</p>
            <button class="btn btn-success btn-sm" onclick="addToCart(${b.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error("Error loading books:", error);
    alert("Failed to load books.");
  }
}


// 🧾 Load Checkout Page
function loadCheckout() {
  const listElem = document.getElementById('checkout-list');
  const totalElem = document.getElementById('total-price');

  if (!listElem || !totalElem) return;

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartItems.length === 0) {
    listElem.innerHTML = "<li class='list-group-item'>Cart is empty</li>";
    totalElem.innerText = "Total: ₹0";
    return;
  }

  listElem.innerHTML = cartItems.map(item => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      ${item.title}
      <span>₹${item.price}</span>
    </li>`).join('');

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  totalElem.innerText = "Total: ₹" + total;
}

// 🚪 Logout
function logout() {
  localStorage.removeItem('cart');
  alert("Logged out!");
  location.href = 'index.html';
}

// 🛠️ Admin Dashboard: Render Books with Edit/Delete
async function renderBooks(containerId, isAdmin = false) {
  const res = await fetch(`${API_URL}/books`);
  const books = await res.json();

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = books.map((book) => `
    <div class="card mb-2 p-2">
      <h5>${book.title}</h5>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      ${isAdmin
        ? `<button onclick="editBook(${book.id})" class="btn btn-sm btn-warning">Edit</button>
           <button onclick="deleteBook(${book.id})" class="btn btn-sm btn-danger">Delete</button>`
        : `<button onclick="addToCart(${book.id})" class="btn btn-sm btn-primary">Add to Cart</button>`}
    </div>`).join('');
}

// ✏️ Edit Book (Admin)
async function editBook(bookId) {
  const newTitle = prompt("Enter new title:");
  const newAuthor = prompt("Enter new author:");
  const newPrice = parseFloat(prompt("Enter new price:"));

  if (!newTitle || !newAuthor || isNaN(newPrice)) {
    alert('Invalid input');
    return;
  }

  await fetch(`${API_URL}/books/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle, author: newAuthor, price: newPrice })
  });

  alert("Book updated!");
  location.reload();
}

// ❌ Delete Book (Admin)
async function deleteBook(bookId) {
  await fetch(`${API_URL}/books/${bookId}`, { method: 'DELETE' });
  alert('Book deleted!');
  location.reload();
}

// 🚀 On Load Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  if (document.getElementById('user-book-list')) loadUserBooks();
  if (document.getElementById('checkout-list')) loadCheckout();
});
