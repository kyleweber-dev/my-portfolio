document.addEventListener("mousemove", (event) => {
  const cursor = document.querySelector(".cursor");

  // Move the cursor effect to the mouse position
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;

  // Optional: Slight scale effect for smoothness
  cursor.style.transform = `translate(-50%, -50%) scale(1.1)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".sticky-header");

  window.addEventListener("scroll", () => {
    headers.forEach((header) => {
      const rect = header.getBoundingClientRect();

      // If the header has moved past the top of the viewport (covering content)
      if (rect.top <= 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
});
