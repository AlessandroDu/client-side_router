const routes = {
  "/home": "<h1>Welcome to the Home Page</h1>",
  "/about": "<h1>About Us</h1>",
  "/contact": "<h1>Contact Page</h1>",
};

const app = document.getElementById("app");

function navigateTo(path) {
  const content = routes[path] || "<h1>404 - Page Not Found</h1>";
  app.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const path = event.target.getAttribute("href");
      navigateTo(path); // Update the app content
    });
  });
});
