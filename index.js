// Sidebar toggle functionality
const burgerBtn = document.getElementById("burger-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Optional: Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !burgerBtn.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});


