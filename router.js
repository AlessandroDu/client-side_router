const routes = {
  "/home": "<h1>Welcome to the Home Page</h1>",
  "/about": "<h1>About Us</h1>",
  "/contact": "<h1>Contact Page</h1>",
};

const app = document.getElementById("app");

function navigateTo(path) {
  history.pushState({ content: routes[path] }, "", `${path}`);
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

function displayContent(state) {
  const content = state.content;
  app.innerHTML = content;
}

// Handle forward/back buttons
window.addEventListener("popstate", (event) => {
  // If a state has been provided, we have a "simulated" page
  // and we update the current page.
  if (event.state) {
    // Simulate the loading of the previous page
    displayContent(event.state);
  }
});
