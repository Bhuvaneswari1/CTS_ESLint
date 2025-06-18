SPA (Single Page Application) behavior for the landing page (index.html) using JavaScript-based routing via the showPage() function.

🔍 What makes this a SPA?
Here's how SPA behavior is handled in your workflow.js:

📌 1. SPA-Like Routing via showPage()
function showPage(page) {
  const main = document.getElementById('main-content');
  ...
  main.innerHTML = `...`; // Injects HTML dynamically
}

This function dynamically loads content into the #main-content container without reloading the page.
Users stay on the same page (index.html), and content changes based on interaction (Login, Register links).

📌 2. DOM-Based Control (No Server-Side Routing)
You're not navigating to separate .html files (like login.html, register.html) — instead, you are:

Injecting HTML fragments dynamically based on user interaction.
Managing the session state (e.g., currentUser, cart) entirely on the client side.

📌 3. Event-Driven Navigation
<a class="nav-link" href="#" onclick="showPage('login')">Login</a>
Page links don’t cause a full page refresh.
onclick handlers trigger JavaScript to update the content, not navigate.

📌 4. Local State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
You persist and retrieve data using localStorage.
This allows maintaining cart contents between reloads or visits.

✅ Summary: Your SPA System (Index.html + workflow.js)
Feature	Implemented
JavaScript-based routing	✅ Yes
Single page (no reloads)	✅ Yes
Dynamic HTML injection	✅ Yes
Local data storage	✅ Yes
API interaction	✅ Yes
