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



// Select elements
const modalContainer = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close");
const modalOpenLinks = document.querySelectorAll("[data-modal-open]");

// Function to open the modal
function openModal() {
  modalContainer.classList.add("open");
}

// Function to close the modal
function closeModal() {
  modalContainer.classList.remove("open");
}

// Open modal when clicking links with 'data-modal-open'
modalOpenLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

// Close modal when clicking the close button
modalCloseButton.addEventListener("click", closeModal);

// Close modal when clicking outside the modal content
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    closeModal();
  }
});

