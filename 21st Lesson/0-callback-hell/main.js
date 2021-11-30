const go = document.querySelector(".go");

go.addEventListener("click", (e) => {
  const el = e.currentTarget;
  //   console.log(el);
  el.textContent = "GO!";
  // Make it circle after 2s
  setTimeout(() => {
    el.classList.add("circle");
    // Make it red after 0.5s
    setTimeout(() => {
      el.classList.add("red");
      // Make it square after 0.25s
      setTimeout(() => {
        el.classList.remove("circle");
        // Make it purple after 0.3s
        setTimeout(() => {
          el.classList.remove("red");
          el.classList.add("purple");
          // Fade out after 0.5s
          setTimeout(() => {
            el.classList.add("fadeOut");
          }, 500);
        }, 300);
      }, 250);
    }, 200);
  }, 2000);
});

/**
 * Create div in HTML, style it:
 * bgc - white
 * padding - 5rem
 * margin - 5rem
 * width - 5rem
 * height - 5rem
 * cursor - pointer
 *
 * with JS add click event.
 * Once you click:
 */

// Make it circle after 2s
// Make it red after 0.5s
// Make it square after 0.25s
// Make it purple after 0.3s
// Fade out after 0.5s
