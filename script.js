// Get the preview button and container
const previewBtn = document.querySelector('.preview-btn');
const previewContainer = document.querySelector('.preview-container');

// Add event listener to the preview button
previewBtn.addEventListener('click', () => {
  // Load the preview content
  loadPreviewContent();
});

// Load the preview content
function loadPreviewContent() {
  // Create a new div element to hold the preview content
  const previewContent = document.createElement('div');
  previewContent.classList.add('fade-in');

  // Add some sample content to the preview container
  previewContent.innerHTML = `
    <h3>Preview Content</h3>
    <p>This is some sample preview content.</p>
  `;

  // Append the preview content to the preview container
  previewContainer.appendChild(previewContent);

  // Remove the preview content after 5 seconds
  setTimeout(() => {
    previewContent.remove();
  }, 5000);
}