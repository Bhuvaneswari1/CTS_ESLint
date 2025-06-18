const API_URL = "http://localhost:3000";

// Load partial HTML pages into appContainer
function loadPage(page) {
  fetch(`templates/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("appContainer").innerHTML = html;
      loadNavItems();

      // Post-render logic
      if (page === "admin-dashboard") fetchAndRenderAdminBooks();
      if (page === "user-dashboard" || page === "book-listing") fetchAndRenderUserBooks();
      if (page === "checkout") renderCart();
      if (page === "addbook") setupAddBookForm();
    });
}

// ---------------------- Authentication ----------------------

async function handleLogin() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/users`);
  const users = await res.json();

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    loadPage(user.role === "admin" ? "admin-dashboard" : "user-dashboard");
  } else {
    alert("Invalid credentials");
  }
}

async function handleSignup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const role = document.getElementById("signupRole").value;

  const res = await fetch(`${API_URL}/users`);
  const users = await res.json();

  if (users.find(u => u.username === username)) {
    alert("User already exists!");
    return;
  }

  await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role })
  });

  alert("Signup successful! Please login.");
  loadPage("login");
}

function logout() {
  localStorage.removeItem("currentUser");
  loadPage("login");
}

// ---------------------- Navigation Bar ----------------------

function loadNavItems() {
  const nav = document.getElementById("navItems");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  nav.innerHTML = "";

  if (user) {
    if (user.role === "admin") {
      nav.innerHTML = `
        <button class="btn btn-outline-light me-2" onclick="loadPage('admin-dashboard')">Dashboard</button>
        <button class="btn btn-outline-light me-2" onclick="loadPage('addbook')">Add Book</button>
        <button class="btn btn-outline-light me-2" onclick="loadPage('book-listing')">Book Listing</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>`;
    } else {
      nav.innerHTML = `
        <button class="btn btn-outline-light me-2" onclick="loadPage('user-dashboard')">Dashboard</button>
        <button class="btn btn-outline-light me-2" onclick="loadPage('book-listing')">Book Listing</button>
        <button class="btn btn-outline-light me-2" onclick="loadPage('checkout')">Checkout</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>`;
    }
  }
}

// ---------------------- Book Management ----------------------

async function fetchBooks() {
  const res = await fetch(`${API_URL}/books`);
  return await res.json();
}

async function fetchAndRenderAdminBooks() {
  const books = await fetchBooks();
  let html = "";

  books.forEach((book) => {
    html += `
      <div class="col-md-4 mb-3">
        <div class="card p-3">
          <h5>${book.title}</h5>
          <p><strong>Author:</strong> ${book.author}</p>
          <button class="btn btn-sm btn-warning me-2" onclick="editBook(${book.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id})">Delete</button>
        </div>
      </div>`;
  });

  document.getElementById("adminBookList").innerHTML = html;
}

function setupAddBookForm() {
  document.getElementById("submitBook").onclick = async () => {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;

    await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author })
    });

    alert("Book added!");
    loadPage("admin-dashboard");
  };
}

async function deleteBook(id) {
  await fetch(`${API_URL}/books/${id}`, { method: "DELETE" });
  fetchAndRenderAdminBooks();
}

function editBook(id) {
  alert(`Edit feature coming soon for Book ID: ${id}`);
}

// ---------------------- User Book Display ----------------------

function renderUserBooks() {
  const books = getBooks();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  let html = "";

  books.forEach((book, index) => {
    html += `
      <div class="col-md-4 mb-3">
        <div class="card p-3">
          <h5>${book.title}</h5>
          <p><strong>Author:</strong> ${book.author}</p>`;

    if (user?.role === "user") {
      html += `<button class="btn btn-sm btn-primary" onclick="addToCart(${index})">Add to Cart</button>`;
    }

    html += `</div></div>`;
  });

  document.getElementById("bookList").innerHTML = html;
}


// ---------------------- Cart Management ----------------------

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, title, author) {
  const cart = getCart();
  cart.push({ id, title, author });
  setCart(cart);
  alert("Book added to cart!");
}

function renderCart() {
  const cart = getCart();
  let html = "";

  if (cart.length === 0) {
    html = `<li class="list-group-item">Cart is empty</li>`;
  } else {
    cart.forEach((book, i) => {
      html += `<li class="list-group-item d-flex justify-content-between">
        ${book.title} by ${book.author}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i})">Remove</button>
      </li>`;
    });
  }

  document.getElementById("cartList").innerHTML = html;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  setCart(cart);
  renderCart();
}

function checkoutCart() {
  localStorage.removeItem("cart");
  alert("Thank you for your purchase!");
  renderCart();
}

// ---------------------- Initial Load ----------------------

function goToDashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    loadPage(user.role === "admin" ? "admin-dashboard" : "user-dashboard");
  } else {
    loadPage("login");
  }
}

document.addEventListener("DOMContentLoaded", goToDashboard);
